'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';
import ProjectModal from '@/components/ui/ProjectModal';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

function projectImage(project: Project) {
  return project.image ? urlFor(project.image).width(600).url() : '/images/project-1.jpg';
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    client.fetch<Project[]>(projectsQuery).then(setProjects).catch(console.error);
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered = useMemo(
    () => activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory),
    [activeCategory, projects]
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-3xl font-bold mb-4">My Projects</h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A showcase of my recent work across WordPress, React, and full-stack development.
            </p>
          </motion.div>

          {projects.length > 0 && (
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'text-primary shadow-lg'
                      : 'text-muted bg-card border-border hover-text-primary hover-border-hover'
                  }`}
                  style={activeCategory === cat ? { background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))' } : {}}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-20 text-muted">
                {projects.length === 0 ? 'Loading projects...' : 'No projects found in this category.'}
              </div>
            )}
            {filtered.map((project, i) => (
              <motion.div
                key={project._id}
                layout
                className="group rounded-2xl bg-card border-border overflow-hidden hover-border-accent-30 card-lift cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(project)}
              >
                <div className="h-44 relative overflow-hidden">
                  <img src={projectImage(project)} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                    style={{ background: 'linear-gradient(to top, var(--overlay-bg), transparent)' }}
                  >
                    <span className="px-3 py-1.5 rounded-full bg-card-hover backdrop-blur-sm text-primary text-xs font-medium">
                      Quick View
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold mb-1.5">{project.title}</h3>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent-10 text-accent text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <p className="text-muted2 text-xs mb-3 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-full bg-card border-border text-[10px] text-muted">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full bg-card border-border text-[10px] text-muted">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-full border-border text-muted hover-text-primary hover-border-hover transition-all">
                      <FaGithub size={13} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-full border-border text-muted hover-text-primary hover-border-hover transition-all">
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </main>
      <Footer />
    </>
  );
}
