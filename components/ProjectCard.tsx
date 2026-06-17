'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProjectLink {
  label: string
  href: string
  enabled: boolean
}

interface Tag {
  name: string
  amber: boolean
}

interface Project {
  name: string
  oneLiner: string
  description: string
  tags: Tag[]
  links: ProjectLink[]
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.005 }}
      className="relative bg-bg-card border border-border rounded-xl p-7 transition-colors"
    >
      {/* Top amber line on hover */}
      {isHovered && (
        <motion.div
          layoutId={`accent-${project.name}`}
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-accent to-transparent rounded-t-xl"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Top row - Name and links */}
      <div className="flex items-start justify-between gap-6 mb-2">
        <h3 className="font-serif font-bold text-2xl text-text-primary" style={{ letterSpacing: '-0.025em' }}>
          {project.name}
        </h3>

        {/* Link buttons */}
        <div className="flex gap-2 flex-shrink-0">
          {project.links.map((link) => (
            <motion.div
              key={link.label}
              className="relative"
              title={!link.enabled ? 'Coming Soon' : ''}
            >
              {link.enabled ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 font-mono text-xs border border-border rounded text-text-subtle hover:border-border-hover hover:text-text-warm transition-colors"
                >
                  {link.label} ↗
                </a>
              ) : (
                <div className="px-3 py-1 font-mono text-xs border border-border-subtle rounded text-text-darkest cursor-not-allowed opacity-50">
                  {link.label}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* One-liner */}
      <p className="font-sans text-sm font-medium text-amber-accent mb-4">
        {project.oneLiner}
      </p>

      {/* Description */}
      <p className="font-sans text-md text-text-dim leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <div
            key={tag.name}
            className={`px-3 py-1 rounded text-xs font-mono border transition-colors ${
              tag.amber
                ? 'bg-amber-subtle-bg border-amber-subtle-border text-amber-dark hover:text-amber-accent'
                : 'bg-bg-base border-border text-text-subtle hover:text-text-muted'
            }`}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
