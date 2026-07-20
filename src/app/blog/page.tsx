'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/types';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

function postImage(post: BlogPost) {
  return post.image ? urlFor(post.image).width(600).url() : '/images/blog-1.jpg';
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    client.fetch<BlogPost[]>(postsQuery).then(setPosts).catch(console.error);
  }, []);

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

  const filtered = useMemo(
    () => activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory),
    [activeCategory, posts]
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
            <h1 className="text-4xl md:text-3xl font-bold mb-4">All Blog Posts</h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Insights and tutorials on web development, design, and WordPress.
            </p>
          </motion.div>

          {posts.length > 0 && (
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
                {posts.length === 0 ? 'Loading posts...' : 'No posts found in this category.'}
              </div>
            )}
            {filtered.map((post, i) => (
              <Link key={post._id} href={`/blog/${post.slug}`}>
                <motion.article
                  className="group rounded-2xl bg-card border-border overflow-hidden hover-border-accent-30 card-lift cursor-pointer h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
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
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-muted3 text-xs mb-3">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </div>
                    <h3 className="text-sm font-semibold mb-2 group-hover-text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted2 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
