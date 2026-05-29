import React from 'react';

export default function SocialProof() {
  return (
    <section className="py-12 bg-surface-container-highest border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-display-lg text-primary-container">4.9★</div>
            <p className="text-on-surface-variant text-sm">Avaliação Média</p>
            <p className="text-xs text-on-surface-variant">347 avaliações</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-display-lg text-secondary">2.500+</div>
            <p className="text-on-surface-variant text-sm">Clientes Felizes</p>
            <p className="text-xs text-on-surface-variant">Desde 2019</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-display-lg text-primary-container">48h</div>
            <p className="text-on-surface-variant text-sm">Agendamento</p>
            <p className="text-xs text-on-surface-variant">Resposta garantida</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-display-lg text-secondary">100%</div>
            <p className="text-on-surface-variant text-sm">Garantia</p>
            <p className="text-xs text-on-surface-variant">ou dinheiro de volta</p>
          </div>
        </div>
      </div>
    </section>
  );
}
