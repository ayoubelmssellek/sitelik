import { Code, Palette, Search, ShoppingCart, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'secondary'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive more organic traffic to your website.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Optimization'],
      color: 'purple'
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and admin panels.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Admin Dashboard'],
      color: 'blue'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Performance Optimization',
      description: 'Speed up your website and improve user experience with advanced optimization techniques.',
      features: ['Code Optimization', 'Image Compression', 'Caching Strategies', 'CDN Integration'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: 'bg-primary-50',
        border: 'border-primary-200',
        icon: 'text-primary-600',
        button: 'bg-primary-600 hover:bg-primary-700'
      },
      secondary: {
        bg: 'bg-secondary-50',
        border: 'border-secondary-200',
        icon: 'text-secondary-600',
        button: 'bg-secondary-600 hover:bg-secondary-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700'
      }
    };
    return colors[color];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl p-4 inline-block mb-6`}>
                  <div className={colorClasses.icon}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 ${colorClasses.button.split(' ')[0]} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full ${colorClasses.button} text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;