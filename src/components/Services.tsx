import React, { useState, useRef } from 'react';
import { 
  Scissors, 
  Wind, 
  Sparkles, 
  Palette, 
  Flame, 
  Hand, 
  Footprints, 
  Gem, 
  Eye, 
  HeartHandshake, 
  Sparkle,
  MessageCircle
} from 'lucide-react';
import { 
  motion, 
  AnimatePresence, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useReducedMotion 
} from 'motion/react';
import { SERVICES_DATA, BUSINESS_CONFIG } from '../config/studio';
import { ServiceItem, CategoryType } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  getServiceIcon: (iconName: string) => React.ReactNode;
  getWhatsAppServiceLink: (serviceName: string) => string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  index, 
  getServiceIcon, 
  getWhatsAppServiceLink 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Motion values for smooth 3D perspective tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for buttery smooth return & interpolation without harsh snaps
  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 26 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 26 });

  // Subtle luxury tilt capped at 5 degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['4.5deg', '-4.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-4.5deg', '4.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#E9DFD4] shadow-2xs hover:shadow-xl hover:shadow-[#9A674A]/10 hover:border-[#D5BEAC] transition-shadow duration-500 will-change-transform select-none"
    >
      {/* Subtle Specular Ambient Sheen on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-[#FAF4EE]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div style={{ transform: shouldReduceMotion ? 'none' : 'translateZ(14px)' }}>
        {/* Top bar of card: Icon & Category Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-[#FAF5F0] border border-[#EFE5DB] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F7EFE6] group-hover:border-[#DFCEBF] shadow-2xs">
            <div className="transition-transform duration-300 group-hover:scale-105">
              {getServiceIcon(service.iconName)}
            </div>
          </div>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C7A70] group-hover:text-[#6E594F] bg-[#FAF8F5] group-hover:bg-[#F8F3ED] px-2.5 py-1 rounded-md border border-[#EFE8E1] transition-colors duration-300">
            {service.category}
          </span>
        </div>

        {/* Service Name with subtle microtransition */}
        <h3 className="font-serif-display text-xl sm:text-2xl font-normal text-[#261E1C] mb-2.5 transition-all duration-300 group-hover:text-[#9A674A] group-hover:translate-x-0.5">
          {service.name}
        </h3>

        {/* Service Description with subtle microtransition */}
        <p className="text-sm text-[#67574F] font-light leading-relaxed mb-6 transition-colors duration-300 group-hover:text-[#52443C]">
          {service.description}
        </p>
      </div>

      {/* Action Button to Schedule Specific Service */}
      <div 
        style={{ transform: shouldReduceMotion ? 'none' : 'translateZ(10px)' }}
        className="pt-4 border-t border-[#F3ECE4] flex items-center justify-between mt-auto"
      >
        <a
          href={getWhatsAppServiceLink(service.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#128C7E] group-hover:text-[#0b6b60] transition-colors duration-200 py-1 focus:outline-hidden"
        >
          <MessageCircle className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">Agendar pelo WhatsApp</span>
        </a>
        
        <span className="text-[11px] text-[#A39287] transition-opacity duration-300 group-hover:opacity-90">
          Atendimento com hora marcada
        </span>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('todas');
  const shouldReduceMotion = useReducedMotion();

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'todas', label: 'Todos os Serviços' },
    { id: 'cabelo', label: 'Cabelo' },
    { id: 'unhas', label: 'Unhas' },
    { id: 'sobrancelhas', label: 'Sobrancelhas' },
    { id: 'estetica', label: 'Estética' },
  ];

  const filteredServices = activeCategory === 'todas'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#9A674A] stroke-[1.75]" };
    switch (iconName) {
      case 'Scissors': return <Scissors {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Hand': return <Hand {...props} />;
      case 'Footprints': return <Footprints {...props} />;
      case 'Gem': return <Gem {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <Sparkle {...props} />;
    }
  };

  const getWhatsAppServiceLink = (serviceName: string) => {
    const text = encodeURIComponent(
      `Olá! Vim pelo site do Studio Maria Chamosa e gostaria de agendar um horário para ${serviceName}.`
    );
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth viewport entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECE4] text-[#8C5D44] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nosso Menu de Serviços</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C1A] tracking-tight mb-4">
            Tratamentos completos para realçar o seu melhor
          </h2>
          <p className="text-base text-[#6E5D54] font-light leading-relaxed">
            Profissionais dedicados, produtos de excelência e atendimento cuidadoso em cada detalhe.
          </p>
        </motion.div>

        {/* Category Filter Tabs with stagger */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#2D2422] text-[#FAF8F5] shadow-xs scale-100'
                  : 'bg-white text-[#63534B] hover:bg-[#F2ECE4] border border-[#E8DCD1] hover:border-[#D8C7B6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid with Stagger & Smooth Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1200 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                getServiceIcon={getServiceIcon}
                getWhatsAppServiceLink={getWhatsAppServiceLink}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F4ECE2] border border-[#E5D8CC] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h4 className="font-serif-display text-xl font-normal text-[#2D2422] mb-1">
              Dúvidas sobre o procedimento ideal para você?
            </h4>
            <p className="text-sm text-[#6E5E56] font-light">
              Converse com nossa equipe no WhatsApp para orientações e consultas de disponibilidade.
            </p>
          </div>
          <a
            href={BUSINESS_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar no WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

