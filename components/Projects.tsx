'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'AlphaDesk',
    oneLiner: 'RAG-based financial document intelligence platform',
    description:
      'Auto-fetches annual reports from BSE India, NSE India, and SEC EDGAR. Answers natural language queries with page-level citations across multiple LLM providers. Built as a trimester internship project and submitted as an IEEE-format research report.',
    tags: [
      { name: 'RAG', amber: true },
      { name: 'ChromaDB', amber: true },
      { name: 'LangChain', amber: true },
      { name: 'Next.js 14', amber: false },
      { name: 'FastAPI', amber: false },
      { name: 'Python', amber: false },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/OKsatyam/AlphaDesk', enabled: true },
      { label: 'Live Link', href: 'https://alpha-desk-qs00os5j2-oksatyams-projects.vercel.app/', enabled: true },
    ],
  },
  {
    name: 'LexrAI',
    oneLiner: 'Codebase onboarding assistant',
    description:
      'Three-pillar architecture — Understand, Explore, Improve. Performs static analysis via Ruff, Bandit and Radon, orchestrated through LangGraph agents to surface code quality insights.',
    tags: [
      { name: 'LangGraph', amber: true },
      { name: 'LangChain', amber: true },
      { name: 'FastAPI', amber: false },
      { name: 'Python', amber: false },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/OKsatyam/LexrAI', enabled: true },
      { label: 'Live Link', href: '#', enabled: false },
    ],
  },
  {
    name: 'NoteFlow',
    oneLiner: 'Block-based document editor and publishing platform',
    description:
      'Rich block editor with 15+ content types, Google OAuth, and GA4 analytics. Deployed on Vercel and Railway. The project where I went fully full-stack for the first time.',
    tags: [
      { name: 'Next.js', amber: false },
      { name: 'TypeScript', amber: false },
      { name: 'MongoDB', amber: false },
      { name: 'MERN', amber: false },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/OKsatyam/noteflow-frontend', enabled: true },
      { label: 'Live Link', href: 'https://noteflow-frontend-seven.vercel.app/', enabled: true },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      id="projects"
      className="py-20 border-b border-border-dark"
    >
      <div className="max-w-[1080px] mx-auto px-10">
        {/* Section label */}
        <p className="font-mono text-xs text-text-darker letter-spacing-widest uppercase mb-4">
          03. projects
        </p>

        {/* Section heading */}
        <h2 className="font-serif font-bold text-4xl text-text-primary mb-3" style={{ letterSpacing: '-0.025em' }}>
          What I've built
        </h2>

        {/* Description */}
        <p className="font-sans text-md text-text-subtle mb-12">
          Each one taught me something the previous one didn't.
        </p>

        {/* Projects grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="space-y-3.5">
          {projects.map((project) => (
            <motion.div key={project.name} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
