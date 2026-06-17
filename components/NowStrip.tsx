'use client'

import { motion } from 'framer-motion'

export default function NowStrip() {
  return (
    <div className="border-t border-border-dark px-10 py-4">
      <div className="max-w-[1080px] mx-auto flex items-center gap-3">
        {/* Pulsing dot */}
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-amber-accent flex-shrink-0"
        />

        {/* Text */}
        <p className="font-mono text-lg text-text-subtle">
          <span className="text-text-warm font-medium">open to SWE / AI internship</span> ·{' '}
          <span className="text-text-muted">let's build together</span>
        </p>
      </div>
    </div>
  )
}
