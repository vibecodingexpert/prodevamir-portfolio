export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'details', title: 'Details', type: 'text', rows: 5 },
    { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
    { name: 'techStack', title: 'Tech Stack', type: 'array', of: [{ type: 'string' }] },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'githubUrl', title: 'GitHub URL', type: 'url' },
    { name: 'liveUrl', title: 'Live URL', type: 'url' },
  ],
};
