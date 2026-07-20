'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { postQuery, postsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { ArrowLeft, Calendar } from 'lucide-react';
import type { BlogPost } from '@/types';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

function postImage(post: BlogPost) {
  return post.image ? urlFor(post.image).width(800).url() : '/images/blog-1.jpg';
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (!slug) return;
    client.fetch<BlogPost>(postQuery, { slug }).then(setPost).catch(console.error);
    client.fetch<BlogPost[]>(postsQuery).then((all) => {
      setRelated(all.filter((p) => p.slug !== slug).slice(0, 3));
    }).catch(console.error);
  }, [slug]);

  if (!slug) return null;

  if (post === undefined) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-28 pb-20 flex items-center justify-center">
          <p className="text-muted">Post not found</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover-text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex flex-col lg:flex-row gap-10">
            <article className="flex-1 min-w-0">
              {post && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="rounded-2xl overflow-hidden border-border mb-8">
                    <img src={postImage(post)} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-accent-20 text-accent text-xs font-medium mb-4">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-2 text-muted3 text-sm mb-4">
                    <Calendar size={14} />
                    {formatDate(post.date)}
                  </div>

                  <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

                  <p className="text-muted text-lg leading-relaxed mb-2 italic border-l-4 border-accent pl-4">
                    {post.excerpt}
                  </p>

                  <hr className="border-border my-8" />

                  <div className="text-muted text-base leading-relaxed">
                    <PortableText value={post.content} />
                  </div>
                </motion.div>
              )}
            </article>

            {post && (
              <aside className="lg:w-80 flex-shrink-0">
                <div className="sticky top-28">
                  <h3 className="text-lg font-semibold mb-6">Related Posts</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r._id} href={`/blog/${r.slug}`}>
                        <div className="group flex gap-3 p-3 rounded-xl bg-card border-border hover-border-accent-30 transition-all card-lift">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={postImage(r)} alt={r.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] text-accent font-medium uppercase tracking-wider">{r.category}</span>
                            <h4 className="text-sm font-medium mt-0.5 group-hover-text-accent transition-colors line-clamp-2">
                              {r.title}
                            </h4>
                            <div className="flex items-center gap-1 text-muted3 text-[10px] mt-1">
                              <Calendar size={10} />
                              {formatDate(r.date)}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
