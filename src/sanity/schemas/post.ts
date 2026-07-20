export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'content', title: 'Content', type: 'blockContent' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'date', title: 'Date', type: 'datetime' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
};
