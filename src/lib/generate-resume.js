// ATS-friendly resume generator.
// Uses jsPDF to emit a real text-based PDF (selectable, parse-able) with:
//  - Standard sans-serif font (Helvetica, built-in)
//  - Single column, standard section headings
//  - No images, tables, icons, or decorative elements
//  - Plain bullet points with the "•" character

import { jsPDF } from 'jspdf'
import {
  profile,
  about,
  techStack,
  experience,
  projects,
  education,
  certifications,
  interests,
} from '@/data/portfolio'

const PAGE_FORMAT = 'letter'
const MARGIN = 48 // ~0.67 inch — tight enough for one page while staying ATS-safe
const BLACK = '#000000'
const TEXT = '#111111'
const MUTED = '#333333'

export async function downloadResume() {
  const doc = new jsPDF({ unit: 'pt', format: PAGE_FORMAT })
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const contentWidth = pageWidth - MARGIN * 2
  let y = MARGIN

  // --- helpers ---------------------------------------------------------
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

  // --- header ----------------------------------------------------------
  setFont('bold', 20, BLACK)
  doc.text(profile.name.toUpperCase(), MARGIN, y)
  y += 22

  setFont('normal', 11, TEXT)
  doc.text(profile.title, MARGIN, y)
  y += 14

  setFont('normal', 9.5, MUTED)
  const contactLine = [
    profile.location,
    profile.email,
    profile.phone,
    `github.com/${profile.githubHandle}`,
    'thalvor.onrender.com',
  ].join('  |  ')
  const contactLines = doc.splitTextToSize(contactLine, contentWidth)
  for (const line of contactLines) {
    doc.text(line, MARGIN, y)
    y += 12
  }
  y += 2
  doc.setDrawColor(BLACK)
  doc.setLineWidth(0.8)
  doc.line(MARGIN, y, MARGIN + contentWidth, y)
  y += 2

  // --- summary ---------------------------------------------------------
  sectionTitle('Professional Summary')
  const cleanSummary = `${about.summary} ${about.focus}`.replace(/\s+/g, ' ').trim()
  writeLines(cleanSummary, { size: 10, gap: 1.4 })

  // --- technical skills -----------------------------------------------
  sectionTitle('Technical Skills')
  for (const group of techStack) {
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

  // --- professional experience ----------------------------------------
  sectionTitle('Professional Experience')
  for (const role of experience) {
    ensure(32)
    setFont('bold', 10.5, BLACK)
    const header = `${role.role} | ${role.company} | ${role.location}`
    doc.text(header, MARGIN, y)

    setFont('italic', 10, MUTED)
    const periodWidth = doc.getTextWidth(role.period)
    doc.text(role.period, MARGIN + contentWidth - periodWidth, y)
    y += 14

    for (const h of role.highlights) bullet(h)
    if (role.achievement) {
      setFont('bold', 10, BLACK)
      ensure(13)
      doc.text('Key Achievement:', MARGIN + 10, y)
      const labelW = doc.getTextWidth('Key Achievement: ')
      setFont('normal', 10, TEXT)
      const achLines = doc.splitTextToSize(role.achievement, contentWidth - 10 - labelW)
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

  // --- selected projects ----------------------------------------------
  sectionTitle('Selected Projects')
  const orderedProjects = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ]
  for (const p of orderedProjects) {
    ensure(36)
    setFont('bold', 10.5, BLACK)
    doc.text(p.name, MARGIN, y)

    setFont('italic', 9.5, MUTED)
    const stackText = p.stack.join(', ')
    const stackLines = doc.splitTextToSize(stackText, contentWidth - doc.getTextWidth(`${p.name}  —  `))
    // Put stack on the same line as the name if it fits, otherwise on the next line
    const nameW = doc.getTextWidth(`${p.name}  —  `)
    if (stackLines.length === 1 && nameW + doc.getTextWidth(stackLines[0]) <= contentWidth) {
      doc.text(`  —  ${stackLines[0]}`, MARGIN + doc.getTextWidth(p.name), y)
      y += 13
    } else {
      y += 13
      setFont('italic', 9.5, MUTED)
      const fullStackLines = doc.splitTextToSize(`Stack: ${stackText}`, contentWidth)
      for (const line of fullStackLines) {
        ensure(12)
        doc.text(line, MARGIN, y)
        y += 12
      }
    }

    writeLines(p.description, { size: 10, gap: 1.35 })

    const links = []
    if (p.github) links.push(`Repo: ${p.github}`)
    if (p.demo) links.push(`Live: ${p.demo}`)
    if (links.length) {
      writeLines(links.join('   '), { size: 9.5, color: MUTED })
    }
    y += 4
  }

  // --- education ------------------------------------------------------
  sectionTitle('Education')
  for (const ed of education) {
    ensure(32)
    setFont('bold', 10.5, BLACK)
    doc.text(ed.degree, MARGIN, y)
    setFont('italic', 10, MUTED)
    const periodW = doc.getTextWidth(ed.period)
    doc.text(ed.period, MARGIN + contentWidth - periodW, y)
    y += 13
    writeLines(`${ed.school}, ${ed.location}`, { size: 10 })
    writeLines(ed.detail, { size: 10 })
  }

  // --- certifications -------------------------------------------------
  sectionTitle('Certifications & Training')
  for (const c of certifications) {
    bullet(`${c.title} — ${c.issuer}`)
  }

  // --- interests ------------------------------------------------------
  sectionTitle('Interests')
  writeLines(interests.join(' • '), { size: 10 })

  // --- metadata (helps recruiters & ATS) ------------------------------
  doc.setProperties({
    title: 'Full Stack Developer — Miracle Agha',
    subject: 'Resume',
    author: profile.name,
    creator: 'Portfolio — thalvor.onrender.com',
    keywords: [
      'Full-Stack Developer',
      'Backend Engineer',
      'Node.js',
      'React',
      'TypeScript',
      'Python',
      'MongoDB',
      'PostgreSQL',
      'AWS',
      'Docker',
      'REST APIs',
    ].join(', '),
  })

  doc.save('Full Stack Developer Miracle Agha.pdf')
}
