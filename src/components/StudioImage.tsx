import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';

interface StudioImageProps {
  photoKey: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
  priority?: boolean;
  hintLabel?: string;
}

export const StudioImage: React.FC<StudioImageProps> = ({
  photoKey,
  defaultSrc,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "relative overflow-hidden w-full h-full bg-[#F3EFEA]",
  onClick,
  priority = false,
  hintLabel,
}) => {
  const { getPhotoSrc } = usePhotos();
  const rawSrc = getPhotoSrc(photoKey, defaultSrc);
  const currentSrc = /^(?:https?:|data:|blob:)/i.test(rawSrc)
    ? rawSrc
    : `${import.meta.env.BASE_URL || '/'}${rawSrc.replace(/^\/+/, '')}`;

  const [hasError, setHasError] = useState(false);

  // Reset error state if the src changes
  useEffect(() => {
    setHasError(false);
  }, [currentSrc]);

  return (
    <div className={containerClassName}>
      {!hasError && currentSrc ? (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setHasError(true)}
          onClick={onClick}
          className={`${className} block ${onClick ? 'cursor-pointer' : ''}`}
        />
      ) : null}

      {/* Fallback display if image fails to load */}
      {(hasError || !currentSrc) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F6F2ED] to-[#ECE5DC] border border-[#E3D9CE]">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] shadow-xs flex items-center justify-center mb-3 text-[#A06E50] border border-[#E8D8CD]">
            <Camera className="w-6 h-6 stroke-[1.5]" />
          </div>
          <p className="text-xs font-semibold tracking-wider text-[#6B5A52] uppercase mb-1">
            Studio Maria Chamosa
          </p>
          <p className="text-sm font-medium text-[#2D2422] line-clamp-1">
            {hintLabel || alt}
          </p>
        </div>
      )}
    </div>
  );
};
