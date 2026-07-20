import { NavLink, Project, Service, Testimonial, BlogPost, FaqItem } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'HOME', href: '/#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#portfolio' },
  { label: 'SERVICES', href: '#services' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'FAQS', href: '#faq' },
];

export const HERO = {
  tagline: '',
  greeting: "I'm Amir",
  roles: ['WORDPRESS', 'SHOPIFY', 'FULL STACK'],
  description:
    "I'm a WordPress, Shopify, Full Stack, and AI solutions developer dedicated to building high-performance, visually stunning websites, online stores, and AI-powered applications that drive results for businesses.",
  cta: 'GET IN TOUCH',
};

export const ABOUT = {
  name: 'Amir',
  bio: "I'm a passionate WordPress, Shopify, Full Stack, and AI solutions developer with over 5 years of experience creating custom themes, plugins, e-commerce stores, AI-powered apps, and full-scale web solutions. I specialize in converting design mockups into pixel-perfect, responsive websites and online stores that load fast and rank well.",
  stats: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Done', value: '120+' },
    { label: 'Happy Clients', value: '80+' },
    { label: 'Awards', value: '12+' },
  ],
  image: '/images/about.jpg',
};

export const SERVICES: Service[] = [
  {
    icon: 'Globe',
    title: 'WordPress Development',
    description: 'Custom WordPress themes, plugins, and full-scale websites built from scratch with clean, maintainable code and optimal performance.',
  },
  {
    icon: 'ShoppingCart',
    title: 'Shopify Development',
    description: 'Custom Shopify stores with tailored themes, product customizations, seamless checkout, and integrated sales channels.',
  },
  {
    icon: 'Code',
    title: 'Full Stack Development',
    description: 'End-to-end web applications using React, Next.js, Node.js, and TypeScript with modern architecture and best practices.',
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'Beautiful, user-centered interface designs that enhance user experience and drive engagement.',
  },
  {
    icon: 'Smartphone',
    title: 'Responsive Design',
    description: 'Mobile-first responsive designs ensuring your site looks perfect on every device.',
  },
  {
    icon: 'Brain',
    title: 'AI Solutions',
    description: 'AI-powered chatbots, content generation, automation workflows, and intelligent features integrated into your websites and applications.',
  },
  {
    icon: 'Store',
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores on WooCommerce and Shopify with custom product management, payment gateways, and multi-channel selling.',
  },
  {
    icon: 'Workflow',
    title: 'Custom API & Integration',
    description: 'RESTful and GraphQL APIs, third-party integrations, payment gateways, and custom backend services tailored to your business needs.',
  },
  {
    icon: 'Zap',
    title: 'Performance Optimization',
    description: 'Speed optimization, caching strategies, and performance audits to make your site lightning fast.',
  },
];

export const SKILLS_DATA = [
  { name: 'WordPress', percentage: 95 },
  { name: 'PHP', percentage: 90 },
  { name: 'Shopify', percentage: 88 },
  { name: 'Liquid', percentage: 85 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'TypeScript', percentage: 80 },
  { name: 'React/Next.js', percentage: 82 },
  { name: 'WooCommerce', percentage: 92 },
  { name: 'TailwindCSS', percentage: 88 },
  { name: 'HTML/CSS', percentage: 95 },
  { name: 'Cursor AI', percentage: 92 },
  { name: 'Claude AI', percentage: 90 },
  { name: 'Elementor', percentage: 90 },
];

export const PROJECTS: Project[] = [
  {
    _id: 'project-1',
    slug: 'ecommerce-hub',
    title: 'E-Commerce Hub',
    category: 'WordPress',
    description: 'A full-featured WooCommerce store with custom product filters, AJAX cart, and optimized checkout flow.',
    details: 'A comprehensive e-commerce solution built on WooCommerce, featuring advanced product filtering, real-time cart updates via AJAX, and a streamlined checkout process. The store handles thousands of products across multiple categories with fast search and seamless payment integration.',
    features: [
      'Advanced product filtering and search',
      'AJAX-powered shopping cart',
      'Optimized checkout flow',
      'Multi-currency support',
      'Inventory management system',
    ],
    techStack: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript'],
    image: '/images/project-1.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    _id: 'project-2',
    slug: 'business-dashboard',
    title: 'Business Dashboard',
    category: 'Node.js',
    description: 'Custom admin dashboard with real-time analytics, user management, and role-based access control.',
    details: 'A powerful business intelligence dashboard built with React and Node.js, providing real-time analytics, user management, and comprehensive reporting. The platform supports multiple user roles with granular permissions and customizable widgets.',
    features: [
      'Real-time analytics and reporting',
      'Role-based access control',
      'Customizable dashboard widgets',
      'Data export in multiple formats',
      'User activity logging',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    image: '/images/project-2.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    _id: 'project-3',
    slug: 'portfolio-platform',
    title: 'Portfolio Platform',
    category: 'Next.js',
    description: 'A dynamic portfolio platform with drag-and-drop builder, customizable templates, and client management.',
    details: 'A modern portfolio platform that empowers creatives to showcase their work with stunning templates and an intuitive drag-and-drop builder. Features include client management, project collaboration tools, and built-in SEO optimization.',
    features: [
      'Drag-and-drop page builder',
      'Pre-built customizable templates',
      'Client project management',
      'Built-in SEO tools',
      'Analytics dashboard',
    ],
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma'],
    image: '/images/project-3.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    _id: 'project-4',
    slug: 'saas-landing-page',
    title: 'SaaS Landing Page',
    category: 'WordPress',
    description: 'High-converting landing page with A/B testing, animated illustrations, and optimized SEO structure.',
    details: 'A high-performance landing page designed for SaaS companies, featuring engaging animated illustrations, A/B testing capabilities, and a conversion-optimized layout. Built with performance and SEO best practices to maximize organic reach.',
    features: [
      'A/B testing integration',
      'Custom animated illustrations',
      'Optimized conversion funnel',
      'SEO-optimized structure',
      'Fast loading performance',
    ],
    techStack: ['WordPress', 'Elementor', 'GSAP', 'PHP'],
    image: '/images/project-4.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    _id: 'project-5',
    slug: 'shopify-store',
    title: 'Fashion Store',
    category: 'Shopify',
    description: 'A modern Shopify store with custom theme, product customization, and seamless checkout experience.',
    details: 'A fully customized Shopify store built for a fashion brand, featuring a unique theme design, advanced product customization options, and an optimized checkout flow that increased conversions by 35%.',
    features: [
      'Custom Shopify theme',
      'Product customization options',
      'Abandoned cart recovery',
      'Inventory sync across channels',
      'Analytics and reporting',
    ],
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'Shopify API'],
    image: '/images/project-4.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    _id: 'project-6',
    slug: 'react-dashboard',
    title: 'Analytics Dashboard',
    category: 'React',
    description: 'Real-time analytics dashboard with interactive charts, data filtering, and export functionality.',
    details: 'A feature-rich analytics dashboard built with React, providing real-time data visualization, customizable filters, and multi-format export capabilities. Used by over 500 businesses to track key metrics.',
    features: [
      'Interactive charts and graphs',
      'Custom date range filtering',
      'Multi-format data export',
      'Real-time data updates',
      'User permission management',
    ],
    techStack: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
    image: '/images/project-3.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    _id: 'testimonial-1',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Amir delivered an outstanding website that exceeded our expectations. His attention to detail and technical expertise made the entire process seamless.',
    avatar: '/images/testimonial-1.jpg',
    rating: 5,
    featured: true,
    order: 1,
  },
  {
    _id: 'testimonial-2',
    name: 'Michael Chen',
    role: 'Marketing Director, Brandify',
    content: 'Working with Amir was a fantastic experience. He understood our vision perfectly and translated it into a beautiful, functional website.',
    avatar: '/images/testimonial-2.jpg',
    rating: 5,
    featured: false,
    order: 2,
  },
  {
    _id: 'testimonial-3',
    name: 'Emily Rodriguez',
    role: 'Founder, DesignLab',
    content: 'The best WordPress developer I have worked with. Amir is professional, responsive, and delivers high-quality work on time.',
    avatar: '/images/testimonial-3.jpg',
    rating: 5,
    featured: false,
    order: 3,
  },
  {
    _id: 'testimonial-4',
    name: 'David Park',
    role: 'CTO, WebStudio',
    content: 'Extremely talented developer with a keen eye for design. Amir transformed our outdated site into a modern, high-performing platform.',
    avatar: '/images/testimonial-2.jpg',
    rating: 5,
    featured: false,
    order: 4,
  },
  {
    _id: 'testimonial-5',
    name: 'Lisa Thompson',
    role: 'Brand Manager, Creativa',
    content: 'Amir is the go-to person for WordPress development. He solved complex issues quickly and delivered ahead of schedule. Highly recommended!',
    avatar: '/images/testimonial-1.jpg',
    rating: 5,
    featured: false,
    order: 5,
  },
  {
    _id: 'testimonial-6',
    name: 'James Wilson',
    role: 'Founder, GrowthLab',
    content: 'From concept to launch, Amir handled everything professionally. The site loads fast, looks stunning, and our conversions have doubled since launch.',
    avatar: '/images/testimonial-3.jpg',
    rating: 5,
    featured: true,
    order: 6,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    _id: 'post-1',
    title: 'Top 10 WordPress Performance Tips for 2024',
    excerpt: 'Learn how to optimize your WordPress site for speed and performance with these proven techniques.',
    content: 'Speed is critical for any WordPress site. A slow website not only frustrates visitors but also hurts your search engine rankings. In this post, we explore ten actionable tips to supercharge your WordPress performance, from caching and image optimization to database cleanup and CDN integration.\n\n1. **Use a Caching Plugin** – Caching dramatically reduces load times by serving static versions of your pages.\n\n2. **Optimize Images** – Compress images before uploading using tools like TinyPNG or Smush.\n\n3. **Minify CSS and JavaScript** – Remove unnecessary whitespace and comments from your code files.\n\n4. **Use a CDN** – A Content Delivery Network distributes your site across multiple servers worldwide.\n\n5. **Choose Quality Hosting** – Invest in managed WordPress hosting or a VPS for better speed.\n\n6. **Keep Plugins to a Minimum** – Audit your plugins regularly and remove any that aren\'t essential.\n\n7. **Use a Lightweight Theme** – Opt for lightweight, well-coded themes like GeneratePress or Astra.\n\n8. **Enable GZIP Compression** – GZIP reduces the size of files sent from your server to the browser.\n\n9. **Optimize Your Database** – Clean up post revisions, spam comments, and transients regularly.\n\n10. **Lazy Load Media** – Load images and videos only when they come into the viewport.\n\nImplementing these tips can significantly improve your WordPress site speed, leading to better user experience and higher search rankings.',
    date: 'Mar 15, 2024',
    category: 'WordPress',
    image: '/images/blog-1.jpg',
    slug: 'wordpress-performance-tips',
  },
  {
    _id: 'post-2',
    title: 'Why Responsive Design Matters More Than Ever',
    excerpt: 'Discover why mobile-first design is crucial for your business success in today\'s digital landscape.',
    content: 'With mobile devices accounting for over 60% of web traffic worldwide, responsive design is no longer optional. It is a necessity. This article dives deep into why responsive design matters and how it impacts your business.\n\n**User Experience** – A responsive site automatically adjusts to any screen size, providing an optimal viewing experience.\n\n**SEO Benefits** – Google uses mobile-first indexing. A responsive design ensures your site performs well in search results.\n\n**Cost Efficiency** – Maintaining separate desktop and mobile sites doubles your development costs. A single responsive site is more cost-effective.\n\n**Higher Conversion Rates** – Studies show that mobile-friendly sites have significantly higher conversion rates.\n\n**Future-Proofing** – New devices with different screen sizes appear every year. Responsive design ensures your site looks great on all of them.\n\n**Faster Development** – Building one responsive site is faster than building and maintaining multiple versions.\n\n**Analytics Simplicity** – With a single site, all your traffic data is in one place for a complete picture of user behavior.\n\nIn conclusion, responsive design is essential for any modern website. It improves user experience, boosts SEO, saves money, and drives conversions.',
    date: 'Feb 28, 2024',
    category: 'Design',
    image: '/images/blog-2.jpg',
    slug: 'responsive-design-matters',
  },
  {
    _id: 'post-3',
    title: 'Building Custom WordPress Themes from Scratch',
    excerpt: 'A comprehensive guide to creating custom WordPress themes that are fast, secure, and maintainable.',
    content: 'Building a custom WordPress theme gives you complete control over your site\'s design, functionality, and performance. This guide walks you through the process step by step.\n\n**1. Set Up Your Development Environment** – Install WordPress locally using tools like Local by Flywheel or XAMPP. Set up a code editor like VS Code and version control with Git.\n\n**2. Create the Basic File Structure** – Every WordPress theme needs at minimum: style.css, index.php, functions.php, header.php, and footer.php. Create these files and add the appropriate template headers.\n\n**3. Enqueue Styles and Scripts** – Use wp_enqueue_style() and wp_enqueue_script() in your functions.php file to properly load CSS and JavaScript. Never hardcode them in header.php.\n\n**4. Build the Template Hierarchy** – WordPress uses a template hierarchy to determine which file to use for each page. Create templates for single posts, pages, archives, search results, and 404 pages.\n\n**5. Add Theme Support** – Enable features like post thumbnails, menus, widgets, and custom logos using add_theme_support() in functions.php.\n\n**6. Create Custom Post Types and Taxonomies** – Extend WordPress beyond posts and pages by registering custom post types for portfolios, testimonials, or products.\n\n**7. Implement Customizer Options** – Use the WordPress Customizer API to let users modify colors, fonts, layouts, and other settings without touching code.\n\n**8. Optimize for Performance** – Follow WordPress coding standards, use proper escaping functions, minimize database queries, and leverage WordPress caching mechanisms.\n\n**9. Test Across Devices** – Ensure your theme is responsive and works correctly on all devices and browsers. Use tools like BrowserStack for comprehensive testing.\n\n**10. Prepare for Launch** – Run security checks, optimize images, set up SEO plugins, and test all forms and functionality before going live.\n\nBuilding a custom theme is rewarding and gives your clients a unique, tailored experience.',
    date: 'Jan 10, 2024',
    category: 'Development',
    image: '/images/blog-3.jpg',
    slug: 'custom-wordpress-themes',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'What is your typical turnaround time for a project?',
    answer: 'It depends on the project scope. A standard WordPress site takes 2-3 weeks, while more complex custom builds may take 4-6 weeks. I provide a clear timeline after discussing your requirements.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes, I offer monthly maintenance plans that include updates, backups, security monitoring, and priority support to keep your site running smoothly.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in WordPress, Shopify (Liquid), Full Stack development (React, Next.js, Node.js), AI solutions (ChatGPT, Claude, AI chatbots, automation), PHP, JavaScript, TypeScript, and modern front-end frameworks like TailwindCSS. I build custom websites, e-commerce stores, AI-powered applications, and web solutions tailored to your needs.',
  },
  {
    question: 'Can you work with existing designs or templates?',
    answer: 'Absolutely. I can convert your existing Figma, Adobe XD, or Sketch designs into a fully functional website, or work with existing themes to customize them to your brand.',
  },
  {
    question: 'Do you provide SEO optimization with your services?',
    answer: 'Yes, all my websites are built with SEO best practices in mind, including semantic HTML, fast loading times, proper meta tags, and schema markup for better search rankings.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'I offer both fixed-price and hourly rates depending on the project. I provide a detailed quote after understanding your requirements and will work within your budget.',
  },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'LinkedIn' },
];
