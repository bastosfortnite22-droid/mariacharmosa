import React, { useEffect, useRef } from 'react';
import { MessageCircle, ArrowRight, Star, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/studio';
import heroBgImage from '../assets/images/hero_beauty_bg_1788626404610.jpg';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const videoUrl = `${baseUrl}/images/b_Animate_this_image_i.mp4`;
  const fallbackVideoUrl = `${baseUrl}/b_Animate_this_image_i.mp4`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Crucial for iOS Safari / WebKit and Android autoplay policies
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      if (video && video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay may be restricted (e.g. Low Power Mode on mobile)
          });
        }
      }
    };

    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    // Fallback: If device restricted autoplay due to power saving mode, play seamlessly on first user interaction
    const handleFirstTouch = () => {
      tryPlay();
      cleanupInteractionListeners();
    };

    const cleanupInteractionListeners = () => {
      window.removeEventListener('touchstart', handleFirstTouch);
      window.removeEventListener('touchend', handleFirstTouch);
      window.removeEventListener('scroll', handleFirstTouch);
      window.removeEventListener('click', handleFirstTouch);
    };

    window.addEventListener('touchstart', handleFirstTouch, { passive: true });
    window.addEventListener('touchend', handleFirstTouch, { passive: true });
    window.addEventListener('scroll', handleFirstTouch, { passive: true });
    window.addEventListener('click', handleFirstTouch, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      cleanupInteractionListeners();
    };
  }, []);

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#servicos');
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
    <section 
      id="inicio" 
      className="relative w-full min-h-screen overflow-hidden flex items-center pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Fallback image background in case video is loading or blocked by OS low-power mode */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 pointer-events-none"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      />

      {/* 1. Video background (full viewport, edge to edge) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        poster={heroBgImage}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={fallbackVideoUrl} type="video/mp4" />
      </video>

      {/* 2. Dark overlay (full viewport, edge to edge) */}
      <div 
        className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/50 to-black/40 pointer-events-none" 
        style={{ width: '100%', height: '100%' }}
      />

      {/* 3. Content / navigation */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-2xl flex flex-col items-start text-left">
          
          {/* Discreet Luxury Eyebrow / Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#E8DCD1] text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-[#8C5D44] uppercase mb-6 shadow-2xs animate-in fade-in duration-500">
            <Sparkles className="w-3 h-3 text-[#9A674A]" />
            <span>BELEZA • CUIDADO • ESTÉTICA</span>
          </div>

          {/* Discreet Google Rating Badge */}
          <a
            href={BUSINESS_CONFIG.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-google-rating-badge"
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#E8DCD1] text-xs font-medium text-[#4A3B34] shadow-2xs hover:border-[#C49B80] hover:shadow-xs transition-all mb-6 group"
          >
            <div className="flex items-center text-[#D97706]">
              <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#D97706]" />
            </div>
            <span className="font-semibold text-[#2D2422]">
              {BUSINESS_CONFIG.googleRating}
            </span>
            <span className="text-[#87766D]">⭐ no Google</span>
            <span className="text-[#CBBBB0]">•</span>
            <span className="text-[#6B5B53] font-medium group-hover:text-[#9A674A] transition-colors">
              {BUSINESS_CONFIG.googleReviewsCount} avaliações
            </span>
          </a>

          {/* Main Headline */}
          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-white tracking-tight mb-6 drop-shadow-md">
            Realce sua beleza no{' '}
            <span className="italic text-[#E8B896]">Studio Maria Chamosa</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F5EDE6] font-light leading-relaxed max-w-xl mb-8 drop-shadow-xs">
            Cuidados de beleza, cabelo, unhas, sobrancelhas e estética em um só lugar.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-9">
            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-primary-whatsapp-cta"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar pelo WhatsApp</span>
            </a>

            <a
              href="#servicos"
              onClick={handleScrollToServices}
              id="hero-secondary-services-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#4A3D36] bg-white/90 hover:bg-white border border-[#E0D4C8] shadow-2xs hover:shadow-xs transition-all active:scale-[0.98]"
            >
              <span>Conheça nossos serviços</span>
              <ArrowRight className="w-4 h-4 text-[#8C7A70]" />
            </a>
          </div>

          {/* Micro Location & Specialization Note */}
          <div className="space-y-1 pt-2 border-t border-white/20 w-full max-w-md">
            <div className="flex items-center gap-2 text-xs font-medium text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#E8B896] shrink-0" />
              <span>{BUSINESS_CONFIG.neighborhood}, {BUSINESS_CONFIG.city} - RJ</span>
            </div>
            <p className="text-xs text-[#EAE0D8] font-light">
              Atendimento especializado em beleza, cuidado e bem-estar.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

