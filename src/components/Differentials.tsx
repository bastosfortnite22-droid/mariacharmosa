import React from 'react';
import { 
  Sparkles, 
  Layers, 
  HeartHandshake, 
  Star 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';

export const Differentials: React.FC = () => {
  const items = [
    {
      id: 'atendimento-profissional',
      title: 'Atendimento profissional',
      description: 'Equipe qualificada e dedicada a oferecer o melhor cuidado com atenção a cada detalhe.',
      icon: <Sparkles className="w-5 h-5 text-[#9A674A] stroke-[1.5]" />,
    },
    {
      id: 'diversos-servicos',
      title: 'Diversos serviços em um só lugar',
      description: 'Cabelo, unhas, sobrancelhas e estética com praticidade e excelência em Macaé.',
      icon: <Layers className="w-5 h-5 text-[#9A674A] stroke-[1.5]" />,
    },
    {
      id: 'ambiente-acolhedor',
      title: 'Ambiente acolhedor',
      description: 'Espaço agradável, climatizado e pensado para o seu conforto e tranquilidade.',
      icon: <HeartHandshake className="w-5 h-5 text-[#9A674A] stroke-[1.5]" />,
    },
    {
      id: 'google-rating',
      title: '4,9 ⭐ no Google',
      description: `${BUSINESS_CONFIG.googleReviewsCount} avaliações reais de clientes com alto nível de satisfação comprovada.`,
      icon: <Star className="w-5 h-5 text-[#E5A83B] fill-[#E5A83B]" />,
      isHighlight: true,
      link: BUSINESS_CONFIG.googleReviewsUrl,
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#FAF7F2] border-y border-[#EBE1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-[#8C5D44] block mb-2">
            Experiência & Qualidade
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#241C1A] tracking-tight">
            Tudo para realçar sua beleza
          </h2>
        </div>

        {/* 4 Discrete Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => {
            const cardInner = (
              <div className="h-full p-6 rounded-2xl bg-white border border-[#E9DFD4] shadow-xs hover:shadow-sm hover:border-[#D8C7B6] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5F0] border border-[#EFE5DB] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>

                  <h3 className="font-serif-display text-lg font-normal text-[#2A201E] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#6B5A51] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.isHighlight && item.link && (
                  <div className="mt-4 pt-3 border-t border-[#F5EFE8]">
                    <span className="text-[11px] font-medium text-[#9A674A] hover:underline">
                      Ver avaliações no Google →
                    </span>
                  </div>
                )}
              </div>
            );

            if (item.link) {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full focus:outline-hidden"
                >
                  {cardInner}
                </a>
              );
            }

            return (
              <div key={item.id} className="h-full">
                {cardInner}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

