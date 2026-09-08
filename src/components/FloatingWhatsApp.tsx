import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed right-5 z-[60] flex items-end gap-3 pointer-events-auto"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
      {/* Small Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-xs text-[#2D2422] px-3.5 py-2 rounded-2xl shadow-lg border border-[#E6DDD3] text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Olá! Agende seu horário pelo WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#9C8A80] hover:text-[#2D2422] p-0.5 rounded-full transition-colors focus:outline-hidden"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={BUSINESS_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95"
        aria-label="Conversar no WhatsApp com Studio Maria Chamosa"
        title="Agendar pelo WhatsApp"
      >
        {/* Subtle pulsating radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Small online badge */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#10B981] border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
