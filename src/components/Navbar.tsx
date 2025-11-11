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
    <nav className="fixed w-full z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://www.creativefabrica.com/wp-content/uploads/2022/12/05/AG-GA-initial-logo-brand-letter-design-v-Graphics-50456674-1-1-580x386.jpg" 
                alt="AG Logo" 
                className="w-12 h-12 object-contain rounded-xl shadow-lg"
              />
              <span className="font-bold text-xl text-gray-900">
                Abhishek Giri
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-gray-800 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <User size={16} />
              <span>Home</span>
            </Link>
            <Link
              to="/journey"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/journey') 
                  ? 'bg-gray-800 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <User size={16} />
              <span>Journey</span>
            </Link>
            <Link
              to="/projects"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/projects') 
                  ? 'bg-gray-800 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Briefcase size={16} />
              <span>Projects</span>
            </Link>
            <Link
              to="/skills"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/skills') 
                  ? 'bg-gray-800 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Code size={16} />
              <span>Skills</span>
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsSoftSkillsOpen(!isSoftSkillsOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 hover:bg-gray-100"
              >
                <Award size={16} />
                <span>Soft Skills</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isSoftSkillsOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 overflow-hidden">
                  <div className="py-2">
                    <Link
                      to="/softskills/overview"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsSoftSkillsOpen(false)}
                    >
                      Overview
                    </Link>
                    {weeks.map((week) => (
                      <Link
                        key={week}
                        to={`/softskills/week${week}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
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
                  ? 'bg-gray-800 text-white shadow-lg' 
                  : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 shadow-lg'
              }`}
            >
              <MessageCircle size={16} />
              <span>Contact</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/') ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/journey"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/journey') ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Journey
            </Link>
            <Link
              to="/projects"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/projects') ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/skills') ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive('/contact') ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'
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
