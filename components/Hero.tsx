'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stackTags = [
  { name: 'MERN', amber: false },
  { name: 'Next.js 14', amber: false },
  { name: 'FastAPI', amber: false },
  { name: 'TypeScript', amber: false },
  { name: 'MongoDB', amber: false },
]

const otherTags = [
  { name: 'RAG pipelines', amber: true },
  { name: 'LangGraph', amber: true },
  { name: 'ChromaDB', amber: true },
]

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section className="pt-20 pb-20 border-b border-border-dark">
      <div className="max-w-[1080px] mx-auto px-10 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
        {/* Left column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Label */}
          <motion.p variants={itemVariants} className="font-mono text-sm text-text-dim letter-spacing-wide mb-5">
            satyam · dev
          </motion.p>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="font-serif font-bold text-6xl leading-tight mb-7" style={{ letterSpacing: '-0.03em' }}>
            <span className="text-amber-accent italic">AI ×</span> Web
            <br />
            Engineer
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg text-text-dim leading-relaxed max-w-sm mb-7"
          >
            I build intelligent, <span className="text-text-warm font-medium">full-stack products</span> end-to-end — from embedding pipelines to polished UIs. Currently in my 3rd year at{' '}
            <span className="text-text-warm font-medium">IIT Guwahati</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href="#projects"
              className="px-5 py-2 bg-amber-accent text-bg-base font-sans font-medium text-base rounded hover:bg-amber-light transition-colors"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="px-5 py-2 border border-border-dark text-text-dim font-sans font-medium text-base rounded hover:border-text-subtle hover:text-text-warm transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right column - Stack & Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:flex flex-col gap-6"
        >
          {/* Stack section */}
          <div>
            <p className="font-mono text-xs text-text-darkest letter-spacing-wider uppercase mb-2">
              // stack
            </p>
            <div className="grid grid-cols-2 gap-2">
              {stackTags.map((tag, idx) => (
                <motion.div
                  key={tag.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className={`px-2.5 py-1.5 rounded text-xs font-mono border transition-colors text-center ${
                    tag.amber
                      ? 'bg-amber-subtle-bg border-amber-subtle-border text-amber-dark hover:text-amber-accent'
                      : 'bg-bg-card border-border text-text-subtle hover:text-text-muted'
                  }`}
                >
                  {tag.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other skills section */}
          <div className="border-t border-border-dark pt-4">
            <p className="font-mono text-xs text-text-darkest letter-spacing-wider uppercase mb-2">
              // ai / ml
            </p>
            <div className="grid grid-cols-2 gap-2">
              {otherTags.map((tag, idx) => (
                <motion.div
                  key={tag.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 + idx * 0.05 }}
                  className={`px-2.5 py-1.5 rounded text-xs font-mono border transition-colors text-center ${
                    tag.amber
                      ? 'bg-amber-subtle-bg border-amber-subtle-border text-amber-dark hover:text-amber-accent'
                      : 'bg-bg-card border-border text-text-subtle hover:text-text-muted'
                  }`}
                >
                  {tag.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
