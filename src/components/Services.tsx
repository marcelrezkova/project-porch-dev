import React from 'react';
import { Hammer, Layers, Truck, Paintbrush, Settings, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Hrubá stavba",
      description: "Kompletní realizace hrubé stavby včetně základů, zdění, stropů a střešních konstrukcí.",
      features: ["Základy a izolace", "Zděné konstrukce", "Železobetonové konstrukce", "Střešní systémy"]
    },
    {
      icon: Settings,
      title: "Koordinace subdodávek",
      description: "Profesionální koordinace všech subdodávek s důrazem na dodržení harmonogramu.",
      features: ["Řízení projektů", "Časové plánování", "Kontrola kvality", "Komunikace s investory"]
    },
    {
      icon: Truck,
      title: "Zemní práce",
      description: "Komplexní zemní práce od výkopů po terénní úpravy s moderní technikou.",
      features: ["Výkopy základů", "Terénní úpravy", "Odvodnění", "Zpevnění povrchů"]
    },
    {
      icon: Paintbrush,
      title: "Fasády",
      description: "Realizace všech typů fasád s důrazem na energetickou efektivitu a design.",
      features: ["Zateplení budov", "Omítky a nátěry", "Obkladové systémy", "Specializované povrchy"]
    },
    {
      icon: Layers,
      title: "Dokončovací práce",
      description: "Finální dokončovací práce pro dokonalé završení každého projektu.",
      features: ["Obklady a dlažby", "Malířské práce", "Instalace podlah", "Finální úpravy"]
    },
    {
      icon: Hammer,
      title: "Speciální konstrukce",
      description: "Náročné stavební konstrukce vyžadující specializované znalosti a techniku.",
      features: ["Ocelové konstrukce", "Atypické řešení", "Rekonstrukce", "Modernizace"]
    }
  ];

  return (
    <section id="sluzby" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Naše služby
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Poskytujeme komplexní subdodávky pro developerské projekty 
            s garancí nejvyšší kvality a profesionálního přístupu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="bg-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-black" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-400">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <button className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors duration-200 flex items-center gap-2">
                  Zjistit více
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-8">
            Potřebujete individuální řešení? Kontaktujte nás pro konzultaci.
          </p>
          <button 
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Konzultace zdarma
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;