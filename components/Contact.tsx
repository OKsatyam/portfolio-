'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      id="contact"
      className="py-20 border-b border-border-dark"
    >
      <div className="max-w-[480px] mx-auto px-10 text-center">
        {/* Section label */}
        <p className="font-mono text-xs text-text-darker letter-spacing-widest uppercase mb-6">
          04. contact
        </p>

        {/* Heading */}
        <h2 className="font-serif font-bold text-4xl text-text-primary mb-6" style={{ letterSpacing: '-0.025em' }}>
          Let's build something
        </h2>

        {/* Subtext */}
        <p className="font-sans text-lg text-text-subtle mb-8">
          Open to SWE and AI internships for 2025–26. Also happy to talk about cool tech.
        </p>

        {/* Links */}
        <div className="flex gap-2.5 justify-center flex-wrap">
          <a
            href="mailto:satyam.mahato@op.iitg.ac.in"
            className="px-5 py-2 bg-amber-accent text-bg-base font-sans font-medium text-base rounded hover:bg-amber-light transition-colors"
          >
            ✉ Email me
          </a>
          <a
            href="https://github.com/OKsatyam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-border text-text-dim font-sans font-medium text-base rounded hover:border-text-subtle hover:text-text-warm transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/oksatyam/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-border text-text-dim font-sans font-medium text-base rounded hover:border-text-subtle hover:text-text-warm transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </motion.section>
  )
}
