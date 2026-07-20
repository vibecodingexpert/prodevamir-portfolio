'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Project } from '@/types';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col"
            style={{ background: 'var(--bg-primary)' }}
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold truncate pr-4">{project.title}</h2>
              <button onClick={onClose} className="p-1.5 rounded-full hover:bg-card-hover transition-colors flex-shrink-0">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
              <div className="lg:w-3/5 h-64 lg:h-auto relative">
                {project.liveUrl && (
                  <iframe
                    src={project.liveUrl}
                    className="w-full h-full border-0"
                    title={`${project.title} live preview`}
                    sandbox="allow-scripts allow-same-origin"
                  />
                )}
              </div>
              <div className="lg:w-2/5 overflow-y-auto p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-card border-border text-xs text-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6">{project.details}</p>

                <h3 className="text-sm font-semibold mb-3">Key Features</h3>
                <div className="space-y-2 mb-6">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted2 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="group flex-1 px-4 py-2.5 rounded-full border-border text-sm font-medium flex items-center justify-center gap-2 hover-text-primary hover-border-hover transition-all">
                    <FaGithub size={14} className="icon-rotate" /> GitHub
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="group flex-1 px-4 py-2.5 rounded-full text-primary text-sm font-semibold btn-shimmer btn-glow flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))' }}>
                    <ExternalLink size={14} className="icon-rotate" /> Live
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
