import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Restaurant Management System',
      description: 'Complete restaurant management solution with online ordering, table reservations, and inventory management.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe'],
      category: 'Web Application',
      color: 'primary'
    },
    {
      title: 'E-Learning Platform',
      description: 'Modern educational platform with course management, video streaming, and progress tracking.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Firebase'],
      category: 'Education',
      color: 'secondary'
    },
    {
      title: 'E-Commerce Store',
      description: 'Full-featured online store with payment processing, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Laravel', 'MySQL', 'Cloudinary'],
      category: 'E-Commerce',
      color: 'purple'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design and smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Portfolio',
      color: 'blue'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Laravel', 'WebSocket', 'Redis'],
      category: 'Productivity',
      color: 'green'
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing platform with advanced search, virtual tours, and agent management.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'PHP', 'MySQL', 'Google Maps API'],
      category: 'Real Estate',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-600',
      secondary: 'bg-secondary-600',
      purple: 'bg-purple-600',
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      orange: 'bg-orange-600'
    };
    return colors[color];
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            in creating innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`${getColorClasses(project.color)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {/* <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </button>
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-200 flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;