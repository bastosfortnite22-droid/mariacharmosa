import React from 'react';
import { Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';
import { StudioImage } from './StudioImage';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#F5F0EA] border-y border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo of the Space / Studio */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              
              {/* Outer decorative soft outline */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border border-[#D8C6B6] -z-10 hidden sm:block" />

              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-[#E4D7CA] bg-[#FAF8F5]">
                <StudioImage
                  photoKey="espaco-01"
                  defaultSrc="/images/espaco-01.jpg"
                  alt="Espaço Studio Maria Chamosa em Macaé"
                  hintLabel="Foto Real do Espaço / Salão"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Bottom Caption Pill */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#7A6A61] px-1">
                <span>Nosso espaço em Cavaleiros, Macaé</span>
                <span className="font-medium text-[#9A674A]">Ambiente Acolhedor & Climatizado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Story */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#865A40] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sobre o Studio</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C1A] tracking-tight leading-tight mb-6">
              Cuidado, conforto e dedicação a cada atendimento
            </h2>

            {/* Official provided text */}
            <p className="text-base sm:text-lg text-[#5C4D45] font-light leading-relaxed mb-6">
              No Studio Maria Chamosa, cada detalhe é pensado para proporcionar uma experiência de beleza, cuidado e bem-estar. Reunimos diferentes serviços em um só lugar, com atendimento profissional e um ambiente acolhedor para você cuidar da sua beleza.
            </p>

            <div className="w-full space-y-3.5 mb-8 text-sm text-[#4E4039]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A674A] shrink-0 mt-0.5" />
                <span>Atendimento personalizado e atento ao estilo individual de cada cliente.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A674A] shrink-0 mt-0.5" />
                <span>Produtos de qualidade profissional selecionados para a máxima durabilidade e saúde.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A674A] shrink-0 mt-0.5" />
                <span>Localização privilegiada na Av. Atlântica, nos Cavaleiros em Macaé.</span>
              </div>
            </div>

            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="about-whatsapp-cta"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fale conosco pelo WhatsApp</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
