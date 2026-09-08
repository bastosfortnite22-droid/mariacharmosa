import React, { createContext, useContext, useState, useEffect } from 'react';

interface PhotoContextType {
  customPhotos: Record<string, string>;
  setCustomPhoto: (key: string, dataUrl: string) => void;
  removeCustomPhoto: (key: string) => void;
  getPhotoSrc: (key: string, defaultPath: string) => string;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
  photoKeys: string[];
}

const STORAGE_KEY = 'studio_maria_chamosa_photos_v1';

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PHOTO_KEYS = [
  'hero',
  'espaco-01',
  'cabelo-01',
  'cabelo-02',
  'unhas-01',
  'unhas-02',
  'sobrancelhas-01',
  'estetica-01'
];

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [isManagerOpen, setIsManagerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customPhotos));
    } catch (e) {
      console.warn("Storage quota limit reached for photos:", e);
    }
  }, [customPhotos]);

  const setCustomPhoto = (key: string, dataUrl: string) => {
    setCustomPhotos(prev => ({
      ...prev,
      [key]: dataUrl
    }));
  };

  const removeCustomPhoto = (key: string) => {
    setCustomPhotos(prev => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  const getPhotoSrc = (key: string, defaultPath: string): string => {
    if (customPhotos[key]) {
      return customPhotos[key];
    }
    return defaultPath;
  };

  return (
    <PhotoContext.Provider
      value={{
        customPhotos,
        setCustomPhoto,
        removeCustomPhoto,
        getPhotoSrc,
        isManagerOpen,
        setIsManagerOpen,
        photoKeys: PHOTO_KEYS
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
