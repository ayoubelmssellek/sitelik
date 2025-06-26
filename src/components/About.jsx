import { Users, Award, Clock, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '20+', label: 'Happy Clients' },
    { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Projects Completed' },
    { icon: <Clock className="w-8 h-8" />, number: '2+', label: 'Years Experience' },
    { icon: <Coffee className="w-8 h-8" />, number: '1000+', label: 'Cups of Coffee' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers and designers dedicated to creating 
            exceptional digital experiences that help businesses grow and succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building Digital Solutions That Matter
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team combines technical expertise with creative vision to deliver 
              websites and applications that not only look great but perform exceptionally. 
              We believe in clean code, modern design, and user-centered development.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From concept to deployment, we work closely with our clients to understand 
              their needs and deliver solutions that exceed expectations. Our collaborative 
              approach ensures every project is tailored to achieve specific business goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-semibold">
                Modern Technologies
              </span>
              <span className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full font-semibold">
                Agile Development
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                24/7 Support
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team working"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-secondary-600/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;