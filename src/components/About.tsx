import React from 'react';
import { Target, Users, Zap, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Přesnost",
      description: "Každý projekt realizujeme s maximální pozorností k detailům a technické přesnosti."
    },
    {
      icon: Users,
      title: "Spolehlivost",
      description: "Jsme partner, na kterého se můžete spolehnout ve všech fázích stavebního projektu."
    },
    {
      icon: Zap,
      title: "Efektivita",
      description: "Optimalizujeme procesy pro rychlou a kvalitní realizaci vašich projektů."
    },
    {
      icon: CheckCircle,
      title: "Kvalita",
      description: "Používáme pouze ověřené technologie a materiály nejvyšší kvality."
    }
  ];

  return (
    <section id="o-nas" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O naší společnosti
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            PORCH STAV s.r.o. je moderní stavební společnost specializující se na subdodávky 
            pro developerské projekty. Kombinujeme tradiční řemeslné dovednosti s nejnovějšími 
            technologiemi pro dosažení výjimečných výsledků.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Proč si vybrat PORCH STAV?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Jsme specialisté na komplexní subdodávky pro developery. Naše zkušenosti 
              sahají od hrubé stavby až po finální dokončovací práce. Každý projekt 
              přistupujeme individuálně s důrazem na kvalitu, termíny a transparentní komunikaci.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Náš tým tvoří zkušení profesionálové s dlouholetou praxí v oboru. 
              Disponujeme moderním vybavením a certifikacemi, které nám umožňují 
              realizovat i ty nejnáročnější projekty.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold">
                IČO: 12345678
              </div>
              <div className="text-gray-300">
                Registrovaná společnost s.r.o.
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Stavební tým při práci"
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-black" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;