'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/types';

function postImage(post: BlogPost) {
  return post.image ? urlFor(post.image).width(600).url() : '/images/blog-1.jpg';
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    client.fetch<BlogPost[]>(postsQuery).then(setPosts).catch(console.error);
  }, []);

  const display = posts.slice(0, 3);

  return (
    <section id="blog" className="section-container px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-10 right-[8%] w-5 h-5 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
        <svg className="absolute top-1/3 left-[5%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)" />
        </svg>
        <svg className="absolute bottom-1/4 right-[6%] w-5 h-5 animate-float-fast" style={{ color: 'rgba(var(--theme-primary-rgb),0.35)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <svg className="absolute top-[20%] right-[3%] w-6 h-6 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.2)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
        </svg>
        <svg className="absolute bottom-[30%] left-[8%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg className="absolute top-[55%] right-[15%] w-3 h-3 animate-pulse" style={{ color: 'rgba(var(--theme-primary-rgb),0.4)' }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
        </svg>
        <div className="absolute top-[10%] left-[15%] w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.06),transparent 70%)' }} />
        <div className="absolute bottom-[15%] right-[20%] w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.04),transparent 70%)' }} />
      </div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Latest Blog Posts
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Insights and tutorials on web development, design, and WordPress.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {display.map((post, i) => (
          <Link key={post._id} href={`/blog/${post.slug}`}>
            <motion.article
              className="group rounded-2xl bg-card border-border overflow-hidden hover-border-accent-30 card-lift cursor-pointer h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-44 relative overflow-hidden">
                <img src={postImage(post)} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent-20 text-accent text-xs font-medium backdrop-blur-sm">
                  {post.category}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, var(--overlay-bg), transparent)' }}
                >
                  <span className="text-xs text-primary font-medium flex items-center gap-1">
                    Read More <ArrowRight size={12} />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted3 text-xs mb-3">
                  <Calendar size={12} />
                  {formatDate(post.date)}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover-text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted2 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link href="/blog"
          className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-primary font-semibold text-sm tracking-wider btn-shimmer btn-glow"
          style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))' }}
        >
          VIEW ALL POSTS <ArrowRight size={16} className="icon-rotate" />
        </Link>
      </motion.div>
    </section>
  );
}
