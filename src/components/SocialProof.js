import React from 'react';

const METRICS = [
  { icon: 'star', value: '4.9★', label: 'Avaliação Média', sub: '347 avaliações' },
  { icon: 'group', value: '2.500+', label: 'Clientes Felizes', sub: 'Desde 2019' },
  { icon: 'schedule', value: '2h', label: 'Resposta Garantida', sub: 'Seg–Sáb · 08h–17h' },
  { icon: 'verified', value: '100%', label: 'Garantia Total', sub: 'Ou refaremos' },
];

export default function SocialProof() {
  return (
    <section className="bg-surface-container-lowest border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {METRICS.map(({ icon, value, label, sub }, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 py-5 px-4 ${i < METRICS.length - 1 ? 'border-r border-outline-variant/10' : ''}`}
            >
              <div className="w-8 h-8 flex items-center justify-center bg-primary-container/10 border border-primary-container/15 flex-shrink-0">
                <span className="material-symbols-outlined text-primary-container text-base">{icon}</span>
              </div>
              <div>
                <div className="font-font-bebas text-xl text-primary-container leading-none">{value}</div>
                <div className="font-font-mono-jb text-[8px] text-on-surface-variant uppercase tracking-wider">{label}</div>
                <div className="font-font-mono-jb text-[7px] text-on-surface-variant/40">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
