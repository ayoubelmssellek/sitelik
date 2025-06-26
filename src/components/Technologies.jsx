import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Shield,
  Zap,
  Layers
} from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      color: 'primary',
      technologies: ['React.js', 'Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: <Database className="w-6 h-6" />,
      color: 'secondary',
      technologies: ['Laravel', 'PHP', 'Node.js', 'Express.js', 'REST API', 'GraphQL']
    },
    {
      title: 'Database',
      icon: <Layers className="w-6 h-6" />,
      color: 'purple',
      technologies: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase Firestore']
    },
    {
      title: 'Cloud & Services',
      icon: <Cloud className="w-6 h-6" />,
      color: 'blue',
      technologies: ['Cloudinary', 'Firebase', 'Stripe', 'AWS', 'Vercel', 'Netlify']
    },
    {
      title: 'Tools & DevOps',
      icon: <Shield className="w-6 h-6" />,
      color: 'orange',
      technologies: ['Git & GitHub', 'Docker', 'CI/CD', 'Webpack', 'Vite', 'ESLint']
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-50 border-primary-200 text-primary-600',
      secondary: 'bg-secondary-50 border-secondary-200 text-secondary-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      orange: 'bg-orange-50 border-orange-200 text-orange-600'
    };
    return colors[color];
  };

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and modern frameworks to build 
            scalable, secure, and high-performance applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex items-center gap-3 p-3 rounded-xl border-2 mb-6 ${getColorClasses(category.color)}`}>
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 transition-colors duration-200 text-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React.js', 'Laravel', 'Tailwind CSS', 'MySQL', 'Firebase', 'Stripe', 'Cloudinary', 'Git'].map((tech) => (
              <span
                key={tech}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;