import React from 'react';
import { MessageCircle, MapPin, Instagram, ExternalLink, Phone, Heart } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-24 bg-[#FAF8F5] border-t border-[#E8DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECE4] text-[#865A40] text-xs font-semibold tracking-wider uppercase mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Fale Conosco</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C1A] tracking-tight mb-4">
            Canais de Contato
          </h2>

          <p className="text-base text-[#6E5D54] font-light leading-relaxed">
            Estamos prontos para atender você, tirar dúvidas e reservar seu horário no Studio Maria Chamosa.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: WhatsApp */}
          <div className="p-7 rounded-2xl bg-white border border-[#E9DFD4] shadow-2xs hover:border-[#128C7E]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8F6F3] text-[#128C7E] flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8C7A70] block mb-1">
                Atendimento Principal
              </span>
              <h3 className="font-serif-display text-xl font-normal text-[#2D2422] mb-2">
                WhatsApp Oficial
              </h3>
              <p className="text-sm font-semibold text-[#128C7E] mb-2">
                {BUSINESS_CONFIG.whatsappDisplay}
              </p>
              <p className="text-xs text-[#6B5A51] font-light leading-relaxed">
                Envie uma mensagem direta para consultar serviços, valores e horários disponíveis.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2ECE4]">
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-link"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#128C7E] hover:text-[#075E54] transition-colors"
              >
                <span>Conversar no WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Endereço & Maps */}
          <div className="p-7 rounded-2xl bg-white border border-[#E9DFD4] shadow-2xs hover:border-[#9A674A]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF5F0] text-[#9A674A] flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8C7A70] block mb-1">
                Localização
              </span>
              <h3 className="font-serif-display text-xl font-normal text-[#2D2422] mb-2">
                Nosso Endereço
              </h3>
              <p className="text-xs font-medium text-[#2D2422] mb-2 leading-relaxed">
                {BUSINESS_CONFIG.address}
              </p>
              <p className="text-xs text-[#6B5A51] font-light leading-relaxed">
                Cavaleiros, Macaé - RJ. Fácil estacionamento e acesso na orla marítima.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2ECE4]">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-maps-link"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#9A674A] hover:text-[#7D4E36] transition-colors"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Instagram */}
          <div className="p-7 rounded-2xl bg-white border border-[#E9DFD4] shadow-2xs hover:border-[#D62976]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] text-[#C13584] flex items-center justify-center mb-5">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8C7A70] block mb-1">
                Rede Social
              </span>
              <h3 className="font-serif-display text-xl font-normal text-[#2D2422] mb-2">
                Instagram
              </h3>
              <p className="text-xs text-[#6B5A51] font-light leading-relaxed mb-4">
                Acompanhe novidades, trabalhos recentes e o dia a dia do nosso studio.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2ECE4]">
              {BUSINESS_CONFIG.instagramUrl ? (
                <a
                  href={BUSINESS_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-instagram-link"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#C13584] hover:text-[#833AB4] transition-colors"
                >
                  <span>Acessar Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <a
                  href={BUSINESS_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8C7A70] hover:text-[#2D2422] transition-colors"
                >
                  <span>Solicitar perfil via WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
