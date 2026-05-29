import React from 'react';

export default function Header({ whatsappLink }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-20 px-4 md:px-10 max-w-7xl mx-auto w-full">
        <a className="font-headline-md text-headline-md font-black text-primary-container tracking-tighter" href="#/">
          Caren Car Wash
        </a>
        <div className="hidden md:flex items-center gap-12">
          <a className="text-primary-container font-bold border-b-2 border-primary-container pb-1 font-label-bold text-label-bold transition-all" href="#/">Início</a>
          <a className="text-on-surface font-body-md hover:text-primary-container transition-colors duration-200" href="#servicos">Serviços</a>
          <a className="text-on-surface font-body-md hover:text-primary-container transition-colors duration-200" href="#localizacao">Localização</a>
          <a className="text-on-surface font-body-md hover:text-primary-container transition-colors duration-200" href="#contato">Contato</a>
        </div>
        <a className="bg-primary-container text-on-primary-container px-6 py-2 font-label-bold text-label-bold rounded-lg active:scale-95 duration-150 ease-in-out hover:brightness-110 shadow-lg hover:shadow-xl transition-all" href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Agendar Agora
        </a>
      </div>
    </nav>
  );
}
