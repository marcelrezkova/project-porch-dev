import React, { useState, useEffect } from 'react';
import { Building2, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold text-white">PORCH STAV</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('domov')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Domov
            </button>
            <button
              onClick={() => scrollToSection('o-nas')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              O nás
            </button>
            <button
              onClick={() => scrollToSection('sluzby')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection('reference')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Reference
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('domov')}
                className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left"
              >
                Domov
              </button>
              <button
                onClick={() => scrollToSection('o-nas')}
                className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left"
              >
                O nás
              </button>
              <button
                onClick={() => scrollToSection('sluzby')}
                className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left"
              >
                Služby
              </button>
              <button
                onClick={() => scrollToSection('reference')}
                className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left"
              >
                Reference
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="block mx-3 my-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold text-center"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;