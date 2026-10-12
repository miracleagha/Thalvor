// ATS-friendly resume generator.
// Produces a real text-based PDF (selectable, searchable, parse-able) using jsPDF:
//   - Standard sans-serif font (Helvetica, built into every PDF viewer)
//   - Single column, standard section headings
//   - No images, tables, icons, or decorative elements
//   - Plain "•" bullets
// The PDF is built from a role data object, so every role gets its own tailored resume.

import { jsPDF } from 'jspdf'
import { profile } from '@/data/roles'

const PAGE_FORMAT = 'letter'
const MARGIN = 48 // ~0.67 inch
const BLACK = '#000000'
const TEXT = '#111111'
const MUTED = '#333333'

export async function downloadResume(role) {
  if (!role) throw new Error('downloadResume: a role must be provided')

  const doc = new jsPDF({ unit: 'pt', format: PAGE_FORMAT })
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const contentWidth = pageWidth - MARGIN * 2
  let y = MARGIN

  // ---------------- helpers ----------------
  const ensure = (needed) => {
    if (y + needed > pageHeight - MARGIN) {
      doc.addPage()
      y = MARGIN
    }
  }

  const setFont = (style = 'normal', size = 10, color = TEXT) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
    doc.setTextColor(color)
  }

  const writeLines = (text, { size = 10, style = 'normal', color = TEXT, indent = 0, gap = 1.35 } = {}) => {
    setFont(style, size, color)
    const lines = doc.splitTextToSize(String(text ?? ''), contentWidth - indent)
    const lineHeight = size * gap
    for (const line of lines) {
      ensure(lineHeight)
      doc.text(line, MARGIN + indent, y)
      y += lineHeight
    }
  }

  const bullet = (text, opts = {}) => {
    const size = opts.size ?? 10
    const gap = opts.gap ?? 1.35
    const bulletIndent = 10
    const textIndent = 22
    setFont('normal', size, TEXT)
    const lines = doc.splitTextToSize(String(text ?? ''), contentWidth - textIndent)
    const lineHeight = size * gap
    ensure(lineHeight)
    doc.text('•', MARGIN + bulletIndent, y)
    doc.text(lines[0], MARGIN + textIndent, y)
    y += lineHeight
    for (let i = 1; i < lines.length; i++) {
      ensure(lineHeight)
      doc.text(lines[i], MARGIN + textIndent, y)
      y += lineHeight
    }
  }

  const sectionTitle = (title) => {
    ensure(28)
    y += 10
    setFont('bold', 11, BLACK)
    doc.text(title.toUpperCase(), MARGIN, y)
    y += 4
    doc.setDrawColor(BLACK)
    doc.setLineWidth(0.6)
    doc.line(MARGIN, y, MARGIN + contentWidth, y)
    y += 12
  }

  const normalize = (s) => String(s ?? '').replace(/\s+/g, ' ').trim()

  // ---------------- header ----------------
  setFont('bold', 20, BLACK)
  doc.text(profile.name.toUpperCase(), MARGIN, y)
  y += 22

  setFont('normal', 11, TEXT)
  doc.text(role.resumeTitle || role.cardTitle, MARGIN, y)
  y += 14

  setFont('normal', 9.5, MUTED)
  const contactParts = [
    role.location,
    profile.email,
    `${role.phone} (WhatsApp)`,
    `github.com/${profile.githubHandle}`,
    profile.portfolioLabel,
  ].filter(Boolean)
  const contactLines = doc.splitTextToSize(contactParts.join('  |  '), contentWidth)
  for (const line of contactLines) {
    doc.text(line, MARGIN, y)
    y += 12
  }
  y += 2
  doc.setDrawColor(BLACK)
  doc.setLineWidth(0.8)
  doc.line(MARGIN, y, MARGIN + contentWidth, y)
  y += 2

  // ---------------- summary ----------------
  sectionTitle('Professional Summary')
  const summary = [role.summary, role.focus].map(normalize).filter(Boolean).join(' ')
  writeLines(summary, { size: 10, gap: 1.4 })

  // ---------------- skills ----------------
  const skillsTitle = role.id === 'full-stack' ? 'Technical Skills' : role.stackEyebrow || 'Skills'
  sectionTitle(skillsTitle)
  for (const group of role.stack) {
    const label = `${group.title}: `
    const value = group.items.join(', ')

    setFont('bold', 10, BLACK)
    const labelWidth = doc.getTextWidth(label)
    ensure(14)
    doc.text(label, MARGIN, y)

    setFont('normal', 10, TEXT)
    const valueLines = doc.splitTextToSize(value, contentWidth - labelWidth)
    doc.text(valueLines[0], MARGIN + labelWidth, y)
    y += 13
    for (let i = 1; i < valueLines.length; i++) {
      ensure(13)
      doc.text(valueLines[i], MARGIN + labelWidth, y)
      y += 13
    }
    y += 2
  }

  // ---------------- experience ----------------
  sectionTitle('Professional Experience')
  for (const r of role.experience) {
    ensure(32)
    setFont('bold', 10.5, BLACK)
    const parts = [r.role, r.company, r.location].filter(Boolean)
    const header = parts.join(' | ')
    doc.text(header, MARGIN, y)

    setFont('italic', 10, MUTED)
    if (r.period) {
      const periodWidth = doc.getTextWidth(r.period)
      doc.text(r.period, MARGIN + contentWidth - periodWidth, y)
    }
    y += 14

    for (const h of r.highlights) bullet(h)

    if (r.achievement) {
      setFont('bold', 10, BLACK)
      ensure(13)
      doc.text('Key Achievement:', MARGIN + 10, y)
      const labelW = doc.getTextWidth('Key Achievement: ')
      setFont('normal', 10, TEXT)
      const achLines = doc.splitTextToSize(r.achievement, contentWidth - 10 - labelW)
      doc.text(achLines[0], MARGIN + 10 + labelW, y)
      y += 13
      for (let i = 1; i < achLines.length; i++) {
        ensure(13)
        doc.text(achLines[i], MARGIN + 22, y)
        y += 13
      }
    }
    y += 6
  }

  // ---------------- projects (only if the role has them) ----------------
  if (role.projects && role.projects.length > 0) {
    sectionTitle('Selected Projects')
    const ordered = [
      ...role.projects.filter((p) => p.featured),
      ...role.projects.filter((p) => !p.featured),
    ]
    for (const p of ordered) {
      ensure(36)
      setFont('bold', 10.5, BLACK)
      doc.text(p.name, MARGIN, y)

      // Stack: on same line if it fits, else next line.
      setFont('italic', 9.5, MUTED)
      const stackText = p.stack.join(', ')
      const nameW = doc.getTextWidth(`${p.name}  —  `)
      const stackLineForSameLine = doc.splitTextToSize(stackText, contentWidth - nameW)
      if (stackLineForSameLine.length === 1) {
        doc.text(`  —  ${stackLineForSameLine[0]}`, MARGIN + doc.getTextWidth(p.name), y)
        y += 13
      } else {
        y += 13
        const stackLines = doc.splitTextToSize(`Stack: ${stackText}`, contentWidth)
        for (const line of stackLines) {
          ensure(12)
          doc.text(line, MARGIN, y)
          y += 12
        }
      }

      writeLines(p.description, { size: 10, gap: 1.35 })

      const links = []
      if (p.github) links.push(`Repo: ${p.github}`)
      if (p.demo) links.push(`Live: ${p.demo}`)
      if (links.length) writeLines(links.join('   '), { size: 9.5, color: MUTED })
      y += 4
    }
  }

  // ---------------- role-specific extras ----------------
  if (role.teachingApproach && role.teachingApproach.length > 0) {
    sectionTitle('Teaching Approach')
    for (const t of role.teachingApproach) bullet(t)
  }

  if (role.keyStrengths && role.keyStrengths.length > 0) {
    sectionTitle('Key Strengths')
    writeLines(role.keyStrengths.join(' • '), { size: 10 })
  }

  if (role.additionalStrengths && role.additionalStrengths.length > 0) {
    sectionTitle('Additional Strengths')
    for (const s of role.additionalStrengths) bullet(s)
  }

  if (role.strengths && role.strengths.length > 0) {
    sectionTitle('Professional Strengths')
    writeLines(role.strengths.join(' • '), { size: 10 })
  }

  // ---------------- education ----------------
  sectionTitle('Education')
  for (const ed of role.education) {
    ensure(32)
    setFont('bold', 10.5, BLACK)
    doc.text(ed.degree, MARGIN, y)
    if (ed.period) {
      setFont('italic', 10, MUTED)
      const periodW = doc.getTextWidth(ed.period)
      doc.text(ed.period, MARGIN + contentWidth - periodW, y)
    }
    y += 13
    writeLines(`${ed.school}, ${ed.location}`, { size: 10 })
    if (ed.detail) writeLines(ed.detail, { size: 10 })
  }

  // ---------------- certifications ----------------
  if (role.certifications && role.certifications.length > 0) {
    sectionTitle('Certifications & Training')
    for (const c of role.certifications) bullet(`${c.title} — ${c.issuer}`)
  }

  // ---------------- interests ----------------
  if (role.interests && role.interests.length > 0) {
    sectionTitle('Interests')
    writeLines(role.interests.join(' • '), { size: 10 })
  }

  if (role.availability) {
    sectionTitle('Availability')
    writeLines(role.availability, { size: 10 })
  }

  // ---------------- metadata (ATS keywords) ----------------
  doc.setProperties({
    title: role.resumeTitle || role.cardTitle,
    subject: 'Resume',
    author: profile.name,
    creator: `Portfolio — ${profile.portfolioLabel}`,
    keywords: (role.resumeKeywords ?? []).join(', '),
  })

  doc.save(role.resumeFileName || `${role.cardTitle} — ${profile.name}.pdf`)
}
