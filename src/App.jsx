import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-white">Ahmed • Flutter Dev</a>
          <ul className="hidden md:flex items-center gap-5 text-sm text-slate-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#experience" className="hover:text-white">Experience</a></li>
            <li><a href="#education" className="hover:text-white">Education</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">© {new Date().getFullYear()} Ahmed Abu El‑Hassan • Flutter Developer</div>
      </footer>
    </div>
  )
}

export default App
