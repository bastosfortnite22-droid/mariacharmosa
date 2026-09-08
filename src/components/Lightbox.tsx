import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Camera } from 'lucide-react';
import { GalleryItem } from '../types';
import { usePhotos } from '../context/PhotoContext';
import { BUSINESS_CONFIG } from '../config/studio';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  const { getPhotoSrc } = usePhotos();
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const imageSrc = getPhotoSrc(item.photoKey, item.defaultImagePath);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização ampliada: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden z-20 cursor-pointer"
        aria-label="Fechar visualização"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next Navigation */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden z-20 cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden z-20 cursor-pointer"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Content Container */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full min-h-[260px] max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl bg-[#1A1412]">
          {!imageError ? (
            <img
              src={imageSrc}
              alt={item.title}
              className="max-h-[72vh] max-w-full object-contain rounded-lg transition-opacity duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="p-8 sm:p-12 text-center text-[#E5D7CA] flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#E8B896]">
                <Camera className="w-7 h-7" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D4A587] mb-1">
                {item.categoryLabel}
              </p>
              <h3 className="text-xl font-serif mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-xs text-stone-300 max-w-md">
                {item.description}
              </p>
            </div>
          )}
        </div>

        {/* Caption & WhatsApp Action */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D4A587] bg-white/10 px-2 py-0.5 rounded">
                {item.categoryLabel}
              </span>
              <span className="text-sm font-medium text-stone-200">
                {item.title}
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-1 max-w-lg">
              {item.description}
            </p>
          </div>

          <a
            href={BUSINESS_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] shadow-sm transition-all shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Agendar este serviço</span>
          </a>
        </div>
      </div>
    </div>
  );
};
