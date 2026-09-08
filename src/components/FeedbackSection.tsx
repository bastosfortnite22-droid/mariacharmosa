import React, { useState } from 'react';
import { Star, ExternalLink, QrCode, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';

export const FeedbackSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  
  // Direct file as requested: public/qr-code.png (with fallback to alternative path if needed)
  const qrCodeSrc = !imageError 
    ? `${baseUrl}/qr-code.png` 
    : `${baseUrl}/qr%20code.png`;

  return (
    <section 
      id="avaliar-atendimento" 
      className="py-16 md:py-24 bg-[#FAF5F0] border-t border-[#E8DCD0] relative overflow-hidden"
    >
      {/* Subtle decorative background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C49B80]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE1D7] text-[#865A40] text-xs font-semibold tracking-wider uppercase mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#9A674A]" />
            <span>Sua opinião é importante para nós</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C1A] tracking-tight mb-4">
            Avalie nosso atendimento
          </h2>

          <p className="text-base text-[#6E5D54] font-light leading-relaxed">
            Sua experiência é o reflexo da nossa dedicação. Escaneie o QR Code abaixo com a câmera do seu celular para deixar sua avaliação no Google.
          </p>
        </div>

        {/* Centralized Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#E8DCD0] shadow-sm p-6 sm:p-10 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* QR Code Container - Centered and prominently displayed */}
            <div className="flex flex-col items-center shrink-0 w-full md:w-auto">
              <div className="relative group bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-[#E8DCD0] shadow-xs transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={qrCodeSrc}
                  alt="QR Code para avaliar o Studio Maria Chamosa no Google"
                  loading="lazy"
                  onError={() => setImageError(true)}
                  className="w-56 h-auto sm:w-64 md:w-72 max-w-full object-contain rounded-xl block mx-auto"
                />

                {/* Subtle corner badge */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#9A674A] text-[#FAF8F5] px-3 py-0.5 rounded-full text-[11px] font-medium shadow-xs flex items-center gap-1.5 whitespace-nowrap">
                  <QrCode className="w-3 h-3" />
                  <span>Google Reviews</span>
                </div>
              </div>

              <span className="text-xs text-[#8A7970] mt-4 flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-[#9A674A]" />
                Aponte a câmera do seu celular
              </span>
            </div>

            {/* Explanation & Instructions */}
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#F59E0B] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#D97706]" />
                ))}
                <span className="text-xs font-semibold text-[#2D2422] ml-1.5">
                  5.0 no Google
                </span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#241C1A] mb-3">
                Como avaliar é simples e rápido:
              </h3>

              <ol className="space-y-2.5 text-sm text-[#6B5A51] font-light mb-6 text-left max-w-md mx-auto md:mx-0">
                <li className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EAE1D7] text-[#865A40] text-xs font-semibold shrink-0 mt-0.5">
                    1
                  </span>
                  <span>Abra o aplicativo de câmera no seu celular.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EAE1D7] text-[#865A40] text-xs font-semibold shrink-0 mt-0.5">
                    2
                  </span>
                  <span>Aponte para o QR Code ao lado.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EAE1D7] text-[#865A40] text-xs font-semibold shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Toque no link que surgir na tela e deixe suas estrelas e comentário.</span>
                </li>
              </ol>

              {/* Direct evaluation button (essential for visitors browsing on mobile) */}
              <div className="pt-2 border-t border-[#F3EDE6]">
                <p className="text-xs text-[#8A7970] mb-3">
                  Acessando diretamente do seu celular?
                </p>
                <a
                  href={BUSINESS_CONFIG.googleReviewsUrl || BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="direct-google-review-button"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#9A674A] hover:bg-[#865A40] shadow-xs hover:shadow-md transition-all active:scale-98"
                >
                  <span>Avaliar diretamente no Google</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Trust badge */}
              <div className="mt-4 flex items-center justify-center md:justify-start gap-1.5 text-xs text-[#128C7E]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Sua avaliação ajuda a fortalecer o comércio local de Macaé</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
