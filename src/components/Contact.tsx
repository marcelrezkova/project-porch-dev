import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Děkujeme za zprávu! Ozveme se vám co nejdříve.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kontaktujte nás
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Máte projekt, který potřebujete realizovat? Rádi vám připravíme 
            nezávaznou nabídku na míru vašim požadavkům.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Spojte se s námi
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Jsme připraveni odpovědět na všechny vaše dotazy a začít práci 
                na vašem projektu. Kontaktujte nás jakýmkoliv způsobem, který vám vyhovuje.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">PORCH STAV s.r.o.</h4>
                  <p className="text-gray-300">IČO: 12345678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Telefon</h4>
                  <a href="tel:+420123456789" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                    +420 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">E-mail</h4>
                  <a href="mailto:info@porchstav.cz" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                    info@porchstav.cz
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Adresa</h4>
                  <p className="text-gray-300">Praha 1, Česká republika</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Pracovní doba</h4>
                  <p className="text-gray-300">Po-Pá: 8:00 - 17:00</p>
                  <p className="text-gray-300">So: 8:00 - 12:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h4 className="text-white font-semibold mb-3">Rychlý kontakt</h4>
              <p className="text-gray-300 mb-4">
                Pro urgentní dotazy a konzultace jsme k dispozici i mimo pracovní dobu.
              </p>
              <a 
                href="tel:+420123456789" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors duration-200"
              >
                <Phone size={18} />
                Zavolat nyní
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Poptávkový formulář
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                    placeholder="Vaše jméno"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                    placeholder="vas@email.cz"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Společnost
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                    placeholder="Název společnosti"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                    placeholder="+420 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Zpráva *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Popište nám váš projekt, požadavky a termíny..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <Send size={20} />
                Odeslat poptávku
              </button>

              <p className="text-gray-400 text-sm">
                * Povinné pole. Vaše údaje zpracováváme v souladu s GDPR a použijeme je pouze pro účely zodpovězení vaší poptávky.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;