import React from 'react';

export default function CtaSection({ whatsappLink }) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-container/10 via-secondary/5 to-primary-container/10 border-y border-outline-variant/20">
      <div className="max-w-4xl mx-auto px-4 md:px-10 text-center space-y-6">
        <h2 className="font-headline-lg text-headline-lg text-on-background">Não Deixe seu Carro Esperar</h2>
        <p className="text-on-surface-variant text-body-lg">Horários limitados para hoje. Agende agora e ganhe 10% de desconto na próxima lavagem.</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-12 py-3 font-label-bold text-label-bold rounded-xl hover:brightness-110 transition-all shadow-xl hover:shadow-2xl"
        >
          <span className="material-symbols-outlined">whatsapp</span>
          Agendar Agora no WhatsApp
        </a>
      </div>
    </section>
  );
}
