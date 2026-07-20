import { createClient } from '@sanity/client';
import { BLOG_POSTS, PROJECTS, TESTIMONIALS } from '../src/constants';

const client = createClient({
  projectId: 'f2sri1fn',
  dataset: 'production',
  token: process.env.SANITY_SEED_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

function toPortableText(text: string) {
  const blocks: any[] = [];
  const paragraphs = text.split('\n\n');

  for (const para of paragraphs) {
    const trimmed = para.trim();
    if (!trimmed) continue;

    let listItem: string | null = null;
    if (/^\d+\.\s/.test(trimmed)) listItem = 'number';
    else if (/^-\s/.test(trimmed)) listItem = 'bullet';

    const textContent = listItem ? trimmed.replace(/^(\d+\.\s|-\s)/, '') : trimmed;

    const spans: any[] = [];
    let lastIndex = 0;
    const boldRe = /\*\*(.+?)\*\*/g;
    let match: RegExpExecArray | null;

    while ((match = boldRe.exec(textContent)) !== null) {
      if (match.index > lastIndex) {
        spans.push({ _type: 'span', text: textContent.slice(lastIndex, match.index) });
      }
      spans.push({ _type: 'span', text: match[1], marks: ['strong'] });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < textContent.length) {
      spans.push({ _type: 'span', text: textContent.slice(lastIndex) });
    }

    if (spans.length === 0) spans.push({ _type: 'span', text: textContent });

    const block: any = {
      _type: 'block',
      style: 'normal',
      children: spans,
      markDefs: [],
    };

    if (listItem) {
      block.listItem = listItem;
      block.level = 1;
    }

    blocks.push(block);
  }

  return blocks;
}

async function clearExisting() {
  for (const type of ['testimonial', 'post', 'project']) {
    const ids = await client.fetch(`*[_type == "${type}"]{_id}._id`);
    if (ids.length > 0) {
      console.log(`Deleting ${ids.length} existing ${type}...`);
      await Promise.all(ids.map((id: string) => client.delete(id)));
    }
  }
}

async function main() {
  await clearExisting();

  console.log(`Seeding ${BLOG_POSTS.length} posts...`);
  for (const post of BLOG_POSTS) {
    const doc = {
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      content: toPortableText(post.content),
      category: post.category,
      date: new Date(post.date).toISOString(),
    };
    await client.create(doc);
    console.log(`  Created post: ${post.title}`);
  }

  console.log(`\nSeeding ${PROJECTS.length} projects...`);
  for (const project of PROJECTS) {
    const doc = {
      _type: 'project',
      title: project.title,
      slug: { _type: 'slug', current: project.slug },
      category: project.category,
      description: project.description,
      details: project.details,
      features: project.features,
      techStack: project.techStack,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
    };
    await client.create(doc);
    console.log(`  Created project: ${project.title}`);
  }

  console.log(`\nSeeding ${TESTIMONIALS.length} testimonials...`);
  for (const testimonial of TESTIMONIALS) {
    const doc = {
      _type: 'testimonial',
      name: testimonial.name,
      role: testimonial.role,
      content: testimonial.content,
      rating: testimonial.rating,
      featured: testimonial.featured ?? false,
      order: testimonial.order ?? 0,
    };
    await client.create(doc);
    console.log(`  Created testimonial: ${testimonial.name}`);
  }

  console.log('\nSeed complete!');
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
