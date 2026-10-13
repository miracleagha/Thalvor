import { useEffect, useState } from 'react'
import { RoleProvider } from '@/contexts/role-provider'
import { useRoleContext } from '@/contexts/role-context'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Loader from '@/components/sections/Loader'
import RoleSelector from '@/components/sections/RoleSelector'
import SwitchRolePrompt from '@/components/sections/SwitchRolePrompt'

function Portfolio() {
  const { role } = useRoleContext()
  if (!role) return <RoleSelector />

  return (
    <div className="relative min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        {role.projects && role.projects.length > 0 && <Projects />}
        <Education />
        <Contact />
        <SwitchRolePrompt variant="full" />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (booting) return <Loader />

  return (
    <RoleProvider>
      <Portfolio />
    </RoleProvider>
  )
}
