import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold text-white">PORCH STAV</span>
            </div>
            <p className="text-gray-300 mb-4">
              Spolehlivý partner pro developerské projekty. 
              Poskytujeme kvalitní subdodávky s garancí profesionality a dodržování termínů.
            </p>
            <div className="text-gray-400">
              <p>IČO: 12345678</p>
              <p>PORCH STAV s.r.o.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('domov')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                >
                  Domov
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('o-nas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                >
                  O nás
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                >
                  Služby
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reference')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                >
                  Reference
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <a href="tel:+420123456789" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  +420 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <a href="mailto:info@porchstav.cz" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  info@porchstav.cz
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">Praha 1, Česká republika</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Pracovní doba:</p>
              <p className="text-gray-300">Po-Pá: 8:00 - 17:00</p>
              <p className="text-gray-300">So: 8:00 - 12:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} PORCH STAV s.r.o. Všechna práva vyhrazena.
            </p>
            <p className="text-gray-400 mt-4 md:mt-0">
              Vytvořeno s důrazem na kvalitu a profesionalitu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;