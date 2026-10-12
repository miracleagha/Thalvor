import {
  // Role selector / pillars
  Code2,
  GraduationCap,
  HeartHandshake,
  FileSpreadsheet,
  // Full-stack pillars
  Server,
  Database,
  ShieldCheck,
  Cloud,
  BrainCircuit,
  // Tutor pillars
  Users,
  BookOpen,
  MessageCircle,
  Target,
  HandHelping,
  // Benefits pillars
  Headset,
  ClipboardList,
  Zap,
  // Admin pillars
  CheckCircle2,
  // fallback
  Sparkles,
} from 'lucide-react'

// Static map keeps tree-shaking happy: only these icons ship.
const REGISTRY = {
  Code2,
  GraduationCap,
  HeartHandshake,
  FileSpreadsheet,
  Server,
  Database,
  ShieldCheck,
  Cloud,
  BrainCircuit,
  Users,
  BookOpen,
  MessageCircle,
  Target,
  HandHelping,
  Headset,
  ClipboardList,
  Zap,
  CheckCircle2,
  Sparkles,
}

export default function DynamicIcon({ name, ...props }) {
  const Icon = REGISTRY[name] ?? Sparkles
  return <Icon {...props} />
}
