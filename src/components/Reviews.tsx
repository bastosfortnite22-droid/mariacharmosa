import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, REVIEWS_DATA } from '../config/studio';

export const Reviews: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#F5F0EA] border-t border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE1D7] text-[#865A40] text-xs font-semibold tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-[#A06E50] text-[#A06E50]" />
            <span>Reputação no Google</span>
          </div>
          
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C1A] tracking-tight mb-4">
            Aprovado por quem frequenta e recomenda
          </h2>

          <p className="text-base text-[#6E5D54] font-light leading-relaxed">
            Transparência e dedicação refletidas na avaliação de nossas clientes no Google.
          </p>
        </div>

        {/* Big Score Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8DCD0] shadow-xs flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#FAF5F0] border border-[#EFE5DB] min-w-[130px]">
                <span className="font-serif-display text-5xl font-semibold text-[#241C1A] leading-none">
                  {BUSINESS_CONFIG.googleRating}
                </span>
                <div className="flex items-center gap-1 mt-2 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#D97706]" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-[#8A7970] mt-1">
                  Nota no Google
                </span>
              </div>

              <div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#241C1A] mb-1">
                  Excelência Comprovada
                </h3>
                <p className="text-sm text-[#6B5A51] font-light mb-2">
                  <strong className="font-semibold text-[#2D2422]">{BUSINESS_CONFIG.googleReviewsCount} avaliações</strong> reais registradas no Google.
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#128C7E] font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Perfil verificado e ativo em Macaé</span>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="reviews-view-google-button"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#2D2422] bg-[#FAF8F5] hover:bg-[#F0E8DF] border border-[#D8C7B8] shadow-2xs transition-all active:scale-95"
            >
              <span>Ver avaliações no Google</span>
              <ExternalLink className="w-4 h-4 text-[#8C7A70]" />
            </a>

          </div>
        </div>

        {/* Real Quotes Verified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="relative p-7 rounded-2xl bg-white border border-[#EAE0D4] shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#D97706]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#E0D2C4]" />
                </div>

                <p className="text-base text-[#3A2E28] font-light italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#F3EDE6] flex items-center justify-between text-xs text-[#8A786F]">
                <span className="font-medium">{rev.authorLabel}</span>
                <span className="text-[#128C7E] font-medium">Avaliação Real</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
