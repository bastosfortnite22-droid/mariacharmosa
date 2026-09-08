import React, { useState } from 'react';
import { Sparkles, Maximize2, Camera, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../config/studio';
import { GalleryItem, CategoryType } from '../types';
import { StudioImage } from './StudioImage';
import { Lightbox } from './Lightbox';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('todas');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'todas', label: 'Todos' },
    { id: 'cabelo', label: 'Cabelo' },
    { id: 'unhas', label: 'Unhas' },
    { id: 'sobrancelhas', label: 'Sobrancelhas' },
    { id: 'estetica', label: 'Estética' },
    { id: 'espaco', label: 'Espaço' },
  ];

  const filteredGallery = selectedCategory === 'todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#F5F0EA] border-t border-[#ECE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE1D7] text-[#865A40] text-xs font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Galeria de Trabalhos & Espaço</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#241C1A] tracking-tight mb-4">
            Resultados reais de quem confia em nosso cuidado
          </h2>
          <p className="text-base text-[#6E5D54] font-light leading-relaxed">
            Veja detalhes dos atendimentos de cabelo, unhas, sobrancelhas e conheça nosso aconchegante ambiente em Cavaleiros.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#2D2422] text-[#FAF8F5] shadow-xs'
                  : 'bg-white/80 text-[#63534B] hover:bg-white border border-[#E4D8CC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E8DCD0] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Photo Area */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] cursor-pointer"
                onClick={() => setActiveLightboxItem(item)}
              >
                <StudioImage
                  photoKey={item.photoKey}
                  defaultSrc={item.defaultImagePath}
                  alt={item.title}
                  hintLabel={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="p-3 rounded-full bg-white/90 text-[#2D2422] shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#4A3B34] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-2xs">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Meta Description */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="font-serif-display text-lg sm:text-xl font-normal text-[#2A201E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6F5F57] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveLightboxItem(item)}
                    className="text-xs font-medium text-[#9A674A] hover:text-[#7A4E36] transition-colors inline-flex items-center gap-1 focus:outline-hidden"
                  >
                    <span>Ver ampliado</span>
                  </button>

                  <span className="text-[10px] font-mono text-[#A8988E]">
                    Foto Real
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discreet Notice about Real Photos */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#87746A] inline-flex items-center gap-1.5 bg-[#ECE3D8]/80 px-4 py-2 rounded-full border border-[#DFD3C6]">
            <Camera className="w-3.5 h-3.5 text-[#9A674A]" />
            <span>Todas as imagens da galeria representam serviços e o ambiente real do Studio Maria Chamosa.</span>
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredGallery}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />
    </section>
  );
};
