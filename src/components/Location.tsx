import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';

export const Location: React.FC = () => {
  // Encoded address for embedding Google Maps without requiring an API key
  const embedMapUrl = `https://www.google.com/maps?q=${encodeURIComponent("Studio Maria Chamosa, " + BUSINESS_CONFIG.address)}&z=16&output=embed`;

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECE4] text-[#865A40] text-xs font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Nossa Localização</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C1A] tracking-tight mb-4">
            Estamos em Cavaleiros, Macaé - RJ.
          </h2>

          <p className="text-base text-[#6E5D54] font-light leading-relaxed">
            Localização nobre, de fácil acesso e com toda a comodidade para o seu momento de beleza e bem-estar.
          </p>
        </div>

        {/* Card & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-white border border-[#E8DCD0] shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF5F0] border border-[#EFE5DB] flex items-center justify-center mb-6 text-[#9A674A]">
                <Compass className="w-6 h-6 stroke-[1.5]" />
              </div>

              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C7A70] block mb-1">
                Endereço Oficial
              </span>

              <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#241C1A] leading-snug mb-4">
                {BUSINESS_CONFIG.name}
              </h3>

              <div className="p-4 rounded-xl bg-[#F8F4EF] border border-[#EFE7DE] mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#9A674A] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#2D2422]">
                      {BUSINESS_CONFIG.address}
                    </p>
                    <p className="text-xs text-[#7D6C63] mt-1">
                      Bairro {BUSINESS_CONFIG.neighborhood} • {BUSINESS_CONFIG.city} - {BUSINESS_CONFIG.state}
                    </p>
                    <p className="text-xs font-mono text-[#9B8980] mt-0.5">
                      CEP {BUSINESS_CONFIG.zipCode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#6B5A51] font-light">
                <p>• Localizado na orla dos Cavaleiros, um dos pontos mais agradáveis e valorizados de Macaé.</p>
                <p>• Próximo a restaurantes, cafeterias e com facilidade de estacionamento nas proximidades.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F2ECE4]">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-how-to-arrive-button"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#2D2422] hover:bg-[#1A1413] shadow-xs transition-all active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-[#C49B80]" />
                <span>Como chegar</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[380px] sm:h-[440px] lg:h-auto lg:min-h-[380px] rounded-2xl overflow-hidden border border-[#E8DCD0] shadow-xs relative bg-[#EAE2D8]">
            <iframe
              title="Mapa de Localização - Studio Maria Chamosa"
              src={embedMapUrl}
              className="block w-full h-full border-0"
              loading="eager"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Direct Maps Quick Link Pill */}
            <div className="absolute top-4 right-4 pointer-events-auto">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-xs font-semibold text-[#2D2422] shadow-sm hover:text-[#9A674A] transition-colors border border-[#E0D5C9]"
              >
                <span>Abrir no app Maps</span>
                <ExternalLink className="w-3 h-3 text-[#9A674A]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
