import React from 'react';

export default function FloatingButton({ whatsappLink }) {
  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 right-8 bg-secondary text-on-secondary p-4 rounded-full shadow-2xl hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 animate-bounce"
        title="Clique para falar conosco no WhatsApp"
      >
        <span className="material-symbols-outlined text-3xl">whatsapp</span>
      </a>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-outline-variant/20 flex justify-around items-center h-16 px-4">
        <a className="flex flex-col items-center gap-1 text-primary-container" href="#/">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-[10px] font-label-bold">Início</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#servicos">
          <span className="material-symbols-outlined">minor_crash</span>
          <span className="text-[10px] font-label-bold">Serviços</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#localizacao">
          <span className="material-symbols-outlined">distance</span>
          <span className="text-[10px] font-label-bold">Local</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant" href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined">chat</span>
          <span className="text-[10px] font-label-bold">Whats</span>
        </a>
      </div>
    </>
  );
}
