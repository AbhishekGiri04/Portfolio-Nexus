import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Code, Briefcase, MessageCircle, Award } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSoftSkillsOpen, setIsSoftSkillsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const weeks = Array.from({ length: 7 }, (_, i) => i + 1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/images/AG.png" 
                alt="AG Logo" 
                className="w-12 h-12 object-contain rounded-xl shadow-lg"
              />
              <span className="font-bold text-xl text-white">
                Abhishek Giri
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
              }`}
            >
              <User size={16} />
              <span>Home</span>
            </Link>
            <Link
              to="/journey"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/journey') 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
              }`}
            >
              <User size={16} />
              <span>Journey</span>
            </Link>
            <Link
              to="/projects"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/projects') 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
              }`}
            >
              <Briefcase size={16} />
              <span>Projects</span>
            </Link>
            <Link
              to="/skills"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/skills') 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
              }`}
            >
              <Code size={16} />
              <span>Skills</span>
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsSoftSkillsOpen(!isSoftSkillsOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-300 hover:bg-blue-600/20 hover:text-white"
              >
                <Award size={16} />
                <span>Soft Skills</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isSoftSkillsOpen && (
                <div className="absolute top-full mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl border border-blue-500/20 overflow-hidden">
                  <div className="py-2">
                    <Link
                      to="/softskills/overview"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-600/20 hover:text-white transition-colors"
                      onClick={() => setIsSoftSkillsOpen(false)}
                    >
                      Overview
                    </Link>
                    {weeks.map((week) => (
                      <Link
                        key={week}
                        to={`/softskills/week${week}`}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-600/20 hover:text-white transition-colors"
                        onClick={() => setIsSoftSkillsOpen(false)}
                      >
                        Week {week}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/contact') 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg'
              }`}
            >
              <MessageCircle size={16} />
              <span>Contact</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors text-gray-300 hover:bg-blue-600/20 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-blue-500/20">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/journey"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/journey') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Journey
            </Link>
            <Link
              to="/projects"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/projects') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/skills') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/contact') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
