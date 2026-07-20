export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(date desc) {
  _id, title, "slug": slug.current, excerpt, category, date, image
}`;

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, excerpt, content, category, date, image
}`;

export const projectsQuery = `*[_type == "project" && defined(slug.current)] | order(title asc) {
  _id, title, "slug": slug.current, category, description, details, features, techStack, image, githubUrl, liveUrl
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id, name, role, content, avatar, rating, featured, order
}`;
