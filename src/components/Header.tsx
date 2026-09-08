import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/98 backdrop-blur-md shadow-xs border-b border-[#EAE3DA] py-3.5'
          : 'bg-white/50 backdrop-blur-md border-b border-white/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Text */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="group flex min-w-0 max-w-[calc(100%-5.5rem)] flex-col focus:outline-hidden"
          id="brand-logo-link"
        >
          <span className="font-serif-display text-xl min-[380px]:text-2xl sm:text-3xl font-normal tracking-tight text-[#2D2422] group-hover:text-[#9A674A] transition-colors whitespace-nowrap">
            {BUSINESS_CONFIG.name}
          </span>
          <span className="text-[9px] min-[380px]:text-[10px] tracking-widest uppercase font-medium text-[#7D6B62] -mt-1 whitespace-nowrap">
            Beleza & Estética • Macaé
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-[#564942] hover:text-[#9A674A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9A674A] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Highlighted CTA on desktop & tablet */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BUSINESS_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-cta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar pelo WhatsApp</span>
          </a>
        </div>

        {/* Mobile & Tablet Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={BUSINESS_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden p-2 rounded-full text-white bg-[#128C7E] hover:bg-[#075E54] transition-colors"
            aria-label="Agendar pelo WhatsApp"
            title="Agendar no WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2D2422] hover:bg-[#EFE8E0] transition-colors focus:outline-hidden"
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#FAF8F5] border-b border-[#E8D8CD] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#4A3D36] hover:text-[#9A674A] hover:bg-[#F3ECE4] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#EAE3DA]">
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
