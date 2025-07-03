import { ArrowRight, Code, Palette, Database } from 'lucide-react';

const Hero = () => {
  const teamMembers = [
    // {
    //   name: 'Ayoub El Mssellek',
    //   role: 'Frontend Developer',
    //   icon: <Code className="w-8 h-8" />,
    //   image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    // },
    // {
    //   name: 'Ayoub Fekri',
    //   role: 'Backend Developer',
    //   icon: <Database className="w-8 h-8" />,
    //   image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    // },
    // {
    //   name: 'Mustapha Arab',
    //   role: 'UI/UX Designer',
    //   icon: <Palette className="w-8 h-8" />,
    //   image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    // }
  ];

  return (
    <section id="home" className="h-auto bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            We Build{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Clean & Fast
            </span>{' '}
            Websites
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            Professional web development team creating modern, responsive, and high-performance websites 
            that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href='#contact' className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a  href='#projects' className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200">
              View Our Work
            </a>
          </div>
        </div>

        {/* Team Cards */}
        {/* <div className="grid md:grid-cols-3 gap-8 mt-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white p-2 rounded-full">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;