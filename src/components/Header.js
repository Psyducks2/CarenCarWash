import React from 'react';

export default function Header({ whatsappLink }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center h-16 px-4 md:px-10 max-w-7xl mx-auto w-full">
        <a className="font-font-bebas text-2xl tracking-widest text-on-background" href="#/">
          CAREN<span className="text-primary-container">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a className="font-font-mono-jb text-[10px] uppercase tracking-widest text-primary-container" href="#/">Início</a>
          <a className="font-font-mono-jb text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#servicos">Serviços</a>
          <a className="font-font-mono-jb text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#localizacao">Localização</a>
          <a className="font-font-mono-jb text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#contato">Contato</a>
        </div>
        <a
          className="bg-primary-container text-on-primary-container px-5 py-2 font-font-mono-jb text-[10px] tracking-wider uppercase hover:brightness-110 transition-all"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar Agora
        </a>
      </div>
    </nav>
  );
}
