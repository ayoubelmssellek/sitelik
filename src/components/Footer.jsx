import { Code, Mail, Phone, MapPin, Github, Instagram} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'SEO Optimization', href: '#services' },
      { name: 'E-Commerce', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    technologies: [
      { name: 'React.js', href: '#technologies' },
      { name: 'Laravel', href: '#technologies' },
      { name: 'Vue.js', href: '#technologies' },
      { name: 'Tailwind CSS', href: '#technologies' }
    ]
  };

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/orama_dev/', name: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold">OramaDev</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are a passionate team of developers and designers creating 
              exceptional digital experiences that help businesses grow.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                <span>contact@oramadev.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                <span>+212 752 33& 434</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-primary-400" />
                <span>Morocco</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Technologies</h4>
            <ul className="space-y-3">
              {footerLinks.technologies.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; {currentYear} OramaDev. All rights reserved.</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;