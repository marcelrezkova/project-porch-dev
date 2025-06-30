import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: "Rezidenční komplex Praha",
      description: "Moderní bytový komplex s 150 jednotkami",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Hrubá stavba"
    },
    {
      title: "Administrativní centrum",
      description: "Kancelářský komplex s retail prostory",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Fasády"
    },
    {
      title: "Rodinné domy Brno",
      description: "Výstavba 25 rodinných domů na klíč",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Kompletní realizace"
    },
    {
      title: "Skladový areál",
      description: "Průmyslový areál s administrativní částí",
      image: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Zemní práce"
    },
    {
      title: "Hotel resort",
      description: "Luxusní hotelový komplex s wellness",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Dokončovací práce"
    },
    {
      title: "Obchodní centrum",
      description: "Moderní shopping centrum s parkingem",
      image: "https://images.pexels.com/photos/442406/pexels-photo-442406.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Speciální konstrukce"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="reference" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Naše reference
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Podívejte se na některé z našich úspěšně realizovaných projektů, 
            které demonstrují naši odbornost a kvalitu práce
          </p>
        </div>

        {/* Main Gallery Slider */}
        <div className="mb-16">
          <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src={projects[currentImage].image}
                alt={projects[currentImage].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronRight size={24} />
              </button>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                  {projects[currentImage].category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {projects[currentImage].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {projects[currentImage].description}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  currentImage === index 
                    ? 'border-yellow-500' 
                    : 'border-gray-700 hover:border-gray-500'
                }`}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-300 group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                  {project.category}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-200">
                  {project.title}
                </h4>
                <p className="text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            Chcete vidět více našich projektů nebo získat referenci?
          </p>
          <button 
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Kontaktujte nás
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;