import React from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Differentials } from './components/Differentials';
import { Reviews } from './components/Reviews';
import { FeedbackSection } from './components/FeedbackSection';
import { Location } from './components/Location';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <PhotoProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2523] selection:bg-[#E8D8CD] selection:text-[#2C2523]">
        {/* Navigation Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Diferenciais Elegantes logo após o Hero */}
          <Differentials />

          {/* 3. Sobre o Studio */}
          <About />

          {/* 4. Serviços */}
          <Services />

          {/* 5. Galeria de Fotos Reais */}
          <Gallery />

          {/* 6. Avaliações do Google */}
          <Reviews />

          {/* 7. Avalie nosso atendimento (QR Code Google) */}
          <FeedbackSection />

          {/* 8. Localização & Como Chegar */}
          <Location />

          {/* 9. CTA para Agendamento */}
          <CTA />

          {/* 10. Informações de Contato */}
          <Contact />
        </main>

        {/* 10. Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Action */}
        <FloatingWhatsApp />
      </div>
    </PhotoProvider>
  );
}

