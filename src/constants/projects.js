// My projects - the stuff I've built
export const projects = [
  {
    id: 1,
    title: 'MarketHub',
    description:
      'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and wishlist functionality. Built with Redux state management, Material-UI components, and form validation.',
    technologies: [
      'React',
      'Redux',
      'Material-UI',
      'Tailwind CSS',
      'Formik',
      'Yup',
      'Axios',
      'Context API',
    ],
    category: 'react',
    featured: true,
    liveDemo: 'https://market-hub-react.netlify.app/',
    github: 'https://github.com/HussnainAshiq-5657/Market-Hub-React',
    preview: '/project-previews/markethub-preview.png',
  },

  {
    id: 2,
    title: 'Personal Portfolio',
    description:
      'A responsive portfolio website showcasing projects, skills, and experience. Built with modern React practices, performance optimizations, lazy loading, and smooth animations.',
    technologies: [
      'React',
      'TailwindCSS',
      'Context API',
      'Lazy Loading',
      'Responsive Design',
      'Performance Optimization',
    ],
    category: 'react',
    featured: true,
    liveDemo: 'https://szm96dev.github.io',
    github: 'https://github.com/HussnainAshiq-5657/React-Portfolio',
    preview: '/project-previews/portfolio-preview.png',
  },
];

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'react', name: 'React Projects' },
  { id: 'javascript', name: 'JavaScript Projects' },
  { id: 'web', name: 'Web Applications' },
];
