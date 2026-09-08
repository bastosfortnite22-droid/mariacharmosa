import React from 'react';
import { MessageCircle, Sparkles, Clock, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3ECE3] to-[#EAE0D4] relative overflow-hidden border-t border-[#E8DDD2]">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-[#E3D4C5] text-[#865A40] text-xs font-semibold tracking-wider uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Agendamento Rápido</span>
        </div>

        {/* Exact Requested Title */}
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C1A] tracking-tight mb-5">
          Pronta para cuidar de você?
        </h2>

        {/* Exact Requested Subtitle */}
        <p className="text-base sm:text-lg text-[#5D4E45] font-light leading-relaxed max-w-2xl mx-auto mb-8">
          Agende seu horário no Studio Maria Chamosa e escolha o serviço ideal para você.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={BUSINESS_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-schedule-whatsapp-button"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Agendar pelo WhatsApp</span>
          </a>
        </div>

        {/* Reassuring micro-copy */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#7A6A61] font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#9A674A]" />
            <span>Resposta rápida no horário comercial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#9A674A]" />
            <span>Horários com atendimento exclusivo</span>
          </div>
        </div>

      </div>
    </section>
  );
};
