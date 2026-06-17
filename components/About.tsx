'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      id="about"
      className="py-20 border-b border-border-dark"
    >
      <div className="max-w-[1080px] mx-auto px-10">
        {/* Section label */}
        <p className="font-mono text-xs text-text-darker letter-spacing-widest uppercase mb-4">
          01. about
        </p>

        {/* Section heading */}
        <h2 className="font-serif font-bold text-4xl text-text-primary mb-12" style={{ letterSpacing: '-0.025em' }}>
          Who I am
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_200px]">
          {/* Left text */}
          <div className="space-y-6">
            <p className="font-sans text-lg text-text-muted leading-relaxed">
              I'm a third-year <span className="text-text-warm font-medium">AI/ML undergrad</span> at{' '}
              <span className="text-text-warm font-medium">IIT Guwahati</span> who knows his way around the{' '}
              <span className="text-text-warm font-medium">full stack</span>. I pick up new tools fast, prefer understanding things deeply over just getting them working, and enjoy working at the intersection of{' '}
              <span className="text-text-warm font-medium">web development and AI</span>.
            </p>

            <p className="font-sans text-lg text-text-muted leading-relaxed">
              From <span className="text-text-warm font-medium">RAG pipelines</span> and{' '}
              <span className="text-text-warm font-medium">LangGraph agents</span> to polished React frontends, I build end-to-end. Every project taught me something the previous one didn't.
            </p>

            <p className="font-sans text-lg text-text-muted leading-relaxed">
              When I'm not shipping, I'm trekking in the <span className="text-text-warm font-medium">Himalayas</span> or <span className="text-text-warm font-medium">exploring new ideas</span>.
            </p>
          </div>

          {/* Right - Code block */}
          <div className="hidden lg:block">
            <div className="bg-bg-codeblock border border-border p-4 rounded-lg font-mono text-xs leading-relaxed">
              <div className="text-text-subtle"># the ritual</div>
              <div className="text-text-warm">chai = <span className="text-amber-accent">0</span></div>
              <div className="text-text-warm">while (work_not_done) {'{}'}</div>
              <div className="ml-4">
                <div className="text-text-warm">code()</div>
                <div className="text-text-warm">chai++</div>
              </div>
              <div className="text-text-warm">{'}'}</div>
              <div className="text-green-code">→ shipped</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
