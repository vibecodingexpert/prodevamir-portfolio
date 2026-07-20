'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';
import ProjectModal from '@/components/ui/ProjectModal';

function projectImage(project: Project) {
  return project.image ? urlFor(project.image).width(600).url() : '/images/project-1.jpg';
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    client.fetch<Project[]>(projectsQuery).then(setProjects).catch(console.error);
  }, []);

  const display = projects.slice(0, 4);

  return (
    <section id="portfolio" className="section-container px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-12 left-[6%] w-6 h-6 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
        <svg className="absolute top-1/4 right-[10%] w-5 h-5 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)" />
        </svg>
        <svg className="absolute bottom-1/3 left-[4%] w-4 h-4 animate-float-fast" style={{ color: 'rgba(var(--theme-primary-rgb),0.35)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <svg className="absolute top-[15%] right-[5%] w-8 h-8 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.2)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
        </svg>
        <svg className="absolute bottom-[25%] right-[12%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg className="absolute top-[60%] left-[12%] w-3 h-3 animate-pulse" style={{ color: 'rgba(var(--theme-primary-rgb),0.4)' }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
        </svg>
        <div className="absolute top-[20%] right-[20%] w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.06),transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[25%] w-36 h-36 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.04),transparent 70%)' }} />
      </div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        A selection of projects I have worked on recently.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {display.map((project, i) => (
          <motion.div
            key={project._id}
            className="group rounded-2xl bg-card border-border overflow-hidden hover-border-accent-30 card-lift cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setSelected(project)}
          >
            <div className="h-52 relative overflow-hidden">
              <img src={projectImage(project)} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
                style={{ background: `linear-gradient(to top, var(--overlay-bg), transparent)` }}
              >
                <div className="flex gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full bg-card-hover backdrop-blur-sm text-primary hover-bg-accent-30 transition-colors">
                    <FaGithub size={18} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full bg-card-hover backdrop-blur-sm text-primary hover-bg-accent-30 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted2 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-card border-border text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link href="/projects" prefetch={false}
          className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-primary font-semibold text-sm tracking-wider btn-shimmer btn-glow"
          style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))' }}
        >
          VIEW ALL PROJECTS <ArrowUpRight size={16} className="icon-rotate" />
        </Link>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
