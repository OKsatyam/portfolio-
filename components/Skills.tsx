'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Full Stack Development',
    skills: [
      { name: 'MERN', amber: false },
      { name: 'Next.js 14', amber: false },
      { name: 'FastAPI', amber: false },
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      { name: 'RAG', amber: true },
      { name: 'ChromaDB', amber: true },
      { name: 'sentence-transformers', amber: true },
      { name: 'LangChain', amber: true },
      { name: 'LangGraph', amber: true },
    ],
  },
  {
    label: 'Programming Languages',
    skills: [
      { name: 'JavaScript', amber: false },
      { name: 'TypeScript', amber: false },
      { name: 'SQL', amber: false },
      { name: 'Python', amber: false },
    ],
  },
  {
    label: 'Additional Skills',
    skills: [
      { name: 'NoSQL Databases', amber: false },
      { name: 'Redis', amber: false },
      { name: 'Vercel', amber: false },
      { name: 'Railway', amber: false },
      { name: 'Git', amber: false },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
}

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      id="skills"
      className="py-20 border-b border-border-dark"
    >
      <div className="max-w-[1080px] mx-auto px-10">
        {/* Section label */}
        <p className="font-mono text-xs text-text-darker letter-spacing-widest uppercase mb-4">
          02. skills
        </p>

        {/* Section heading */}
        <h2 className="font-serif font-bold text-4xl text-text-primary mb-3" style={{ letterSpacing: '-0.025em' }}>
          What I work with
        </h2>

        {/* Description */}
        <p className="font-sans text-md text-text-subtle mb-12">
          Things I've actually used in projects, not just listed.
        </p>

        {/* Skill groups */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <motion.div key={group.label} variants={itemVariants} className="p-5 border border-border-dark rounded-lg bg-bg-card/50 backdrop-blur-xs hover:border-border-hover transition-colors">
              <p className="font-mono text-xs text-amber-label letter-spacing-widest uppercase mb-4 font-medium">
                {`// ${group.label.toLowerCase()}`}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-2 rounded text-xs font-mono border transition-all cursor-default ${
                      skill.amber
                        ? 'bg-amber-subtle-bg border-amber-subtle-border text-amber-dark hover:border-amber-dark hover:shadow-lg hover:shadow-amber-accent/20'
                        : 'bg-bg-base border-border text-text-subtle hover:border-text-subtle hover:text-text-warm hover:shadow-lg hover:shadow-text-warm/10'
                    }`}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
