'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0 }}
      className="fixed top-0 w-full z-50 bg-bg-base/90 backdrop-blur-xs border-b border-border-dark"
      style={{ height: '52px' }}
    >
      <div className="max-w-[1080px] mx-auto px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-sm text-text-subtle hover:text-text-warm transition-colors">
          <span className="text-amber-label">~/</span>
          <span>satyam</span>
        </Link>

        {/* Center links */}
        <div className="flex gap-12 items-center">
          <Link href="#about" className="font-sans text-base text-text-subtle hover:text-text-warm transition-colors">
            about
          </Link>
          <Link href="#projects" className="font-sans text-base text-text-subtle hover:text-text-warm transition-colors">
            projects
          </Link>
          <Link href="#contact" className="font-sans text-base text-text-subtle hover:text-text-warm transition-colors">
            contact
          </Link>
        </div>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          download
          className="font-sans text-xs px-3.5 py-1.5 border border-border-dark text-text-muted rounded hover:border-text-subtle hover:text-text-warm transition-colors"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  )
}
