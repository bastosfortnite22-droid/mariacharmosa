import React from 'react';
import { MessageCircle, MapPin, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1918] text-[#D8CDC5] pt-16 pb-12 border-t border-[#382E2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#332A27]">
          
          {/* Col 1: Brand & Slogan */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-serif-display text-3xl font-normal text-white tracking-tight mb-2">
              {BUSINESS_CONFIG.name}
            </span>
            <p className="text-sm font-light text-[#B8A9A0] italic mb-6">
              "{BUSINESS_CONFIG.tagline}"
            </p>
            <p className="text-xs text-[#8A7970] leading-relaxed max-w-sm mb-6 font-light">
              Salão e Studio de beleza especializado em cuidados completos para cabelo, unhas, sobrancelhas e estética com atendimento profissional na orla de Cavaleiros, Macaé.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B8A9A0]">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, '#inicio')}
                  className="hover:text-[#C49B80] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleNavClick(e, '#sobre')}
                  className="hover:text-[#C49B80] transition-colors"
                >
                  Sobre o Studio
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleNavClick(e, '#servicos')}
                  className="hover:text-[#C49B80] transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  onClick={(e) => handleNavClick(e, '#galeria')}
                  className="hover:text-[#C49B80] transition-colors"
                >
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a
                  href="#avaliacoes"
                  onClick={(e) => handleNavClick(e, '#avaliacoes')}
                  className="hover:text-[#C49B80] transition-colors"
                >
                  Avaliações no Google
                </a>
              </li>
              <li>
                <a
                  href="#localizacao"
                  onClick={(e) => handleNavClick(e, '#localizacao')}
                  className="hover:text-[#C49B80] transition-colors"
                >
                  Localização
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="hover:text-[#C49B80] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Information & Quick Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Atendimento & Endereço
            </h4>
            
            <div className="space-y-4 text-xs text-[#B8A9A0]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C49B80] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONFIG.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#128C7E] shrink-0" />
                <a
                  href={BUSINESS_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium text-white transition-colors"
                >
                  {BUSINESS_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright and Bottom Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6B63]">
          <p>
            © {currentYear} {BUSINESS_CONFIG.name}. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#B8A9A0] hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
