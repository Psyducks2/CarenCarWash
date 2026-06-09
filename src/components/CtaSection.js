import React from 'react';

export default function CtaSection({ whatsappLink }) {
  return (
    <section className="py-20 border-y border-outline-variant/10 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-font-bebas text-5xl md:text-6xl leading-none text-on-background mb-3">
              AGENDE AGORA.<br /><span className="text-primary-container">VAGAS LIMITADAS.</span>
            </h2>
            <p className="font-font-mono-jb text-[10px] text-on-surface-variant uppercase tracking-widest">
              Resposta via WhatsApp em até 2 horas · Seg–Sáb 08h–17h
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-container text-on-primary-container px-10 py-4 font-font-mono-jb text-[11px] uppercase tracking-wider hover:brightness-110 transition-all shadow-xl"
            >
              <span className="material-symbols-outlined text-xl">whatsapp</span>
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
