import React from 'react';
import { ArrowRight, Award, Clock, Shield, Building2 } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="domov" className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">PORCH</span>
              <span className="block text-yellow-500">STAV</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mt-2">
                s.r.o.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Spolehlivý partner pro developery
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Poskytujeme kvalitní subdodávky pro developerské projekty s garancí 
              profesionality, dodržování termínů a nejvyšších standardů kvality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToContact}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105"
              >
                Získat nabídku
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Naše služby
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Award className="h-6 w-6 text-yellow-500" />
                <span>15+ let zkušeností</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="h-6 w-6 text-yellow-500" />
                <span>Dodržení termínů</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Shield className="h-6 w-6 text-yellow-500" />
                <span>Garantovaná kvalita</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700">
              <img 
                src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Moderní stavební projekt"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-yellow-500 font-semibold">200+</p>
                  <p className="text-gray-300 text-sm">Dokončených projektů</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;