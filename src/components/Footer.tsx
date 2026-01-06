import { Github, Instagram, Linkedin, Mail, Twitter, Heart, ArrowUp, MapPin, Briefcase, User, Code, MessageCircle, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/abhishekgiri04',
      icon: Github,
      color: 'hover:text-gray-900',
      bg: 'hover:bg-gray-100'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhishek-giri04/',
      icon: Linkedin,
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-50'
    },
    {
      name: 'Email',
      href: 'mailto:abhishekgiri1978@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500',
      bg: 'hover:bg-red-50'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/justtabhiii07',
      icon: Twitter,
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-50'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/justt.abhiii/',
      icon: Instagram,
      color: 'hover:text-pink-500',
      bg: 'hover:bg-pink-50'
    },
    {
      name: 'Website',
      href: 'https://agxdev.vercel.app',
      icon: Globe,
      color: 'hover:text-indigo-600',
      bg: 'hover:bg-indigo-50'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: User },
    { name: 'Journey', href: '/journey', icon: User },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Skills', href: '/skills', icon: Code },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const services = [
    'AI/ML Development',
    'Full-Stack Development',
    'Web Application Development',
    'Technical Consulting',
    'System Architecture',
    'Code Review & Optimization'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-indigo-50 border-t border-gray-200/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-4">
              <img 
                src="https://www.creativefabrica.com/wp-content/uploads/2022/12/05/AG-GA-initial-logo-brand-letter-design-v-Graphics-50456674-1-1-580x386.jpg" 
                alt="AG Logo" 
                className="w-12 h-12 object-contain rounded-xl shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Abhishek Giri
                </h3>
                <p className="text-gray-600 font-medium">AI/ML Engineer & Full-Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed max-w-md">
              Passionate about leveraging cutting-edge technology to solve complex problems and drive innovation. 
              Specializing in AI/ML solutions and modern web development with a focus on scalable, enterprise-grade applications.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={16} className="text-indigo-500" />
                <span>Haridwar, Uttarakhand, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail size={16} className="text-indigo-500" />
                <a href="mailto:abhishekgiri04@gmail.com" className="hover:text-indigo-600 transition-colors">
                  abhishekgiri1978@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Briefcase size={16} className="text-indigo-500" />
                <span>Available for Professional Opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-gray-900">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.div key={link.name} whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
                    >
                      <Icon size={16} />
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-gray-900">Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <motion.div key={service} whileHover={{ x: 5 }}>
                  <span className="block text-gray-600 font-medium">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 p-3 bg-white border border-gray-200 rounded-xl text-gray-600 ${social.color} ${social.bg} transition-all duration-300 hover:shadow-md hover:scale-105`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>

            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-2 text-gray-600 text-sm">
                <span>© {new Date().getFullYear()} Abhishek Giri. All rights reserved.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Committed to delivering exceptional results through innovative technology solutions. 
            Let's collaborate to bring your vision to life with cutting-edge AI/ML and web development expertise.
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
}

export default Footer;