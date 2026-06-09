import React from 'react';

const TESTIMONIALS = [
  {
    text: 'Meu carro saiu como novo. O pessoal é cuidadoso, pontual e entregou antes do previsto. Já indiquei pra vários amigos.',
    name: 'Marcos R.',
    role: 'Cliente desde 2021',
    initials: 'MR',
  },
  {
    text: 'Higienização interna impecável. Tiraram manchas que achei que eram permanentes. Atendimento via WhatsApp rápido demais.',
    name: 'Ana C.',
    role: 'Avaliação Google',
    initials: 'AC',
  },
  {
    text: 'Levo minha moto todo mês. Serviço especializado, não é qualquer lugar que faz direito. Preço justo pelo resultado.',
    name: 'Felipe P.',
    role: 'Cliente fidelizado',
    initials: 'FP',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 dot-grid" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="mb-12">
          <div className="font-font-mono-jb text-[9px] text-primary-container/60 uppercase tracking-widest mb-1">// O que dizem nossos clientes</div>
          <h2 className="font-font-bebas text-4xl text-on-background">Aprovado por quem importa</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map(({ text, name, role, initials }, i) => (
            <div key={i} className="border border-outline-variant/10 p-6 relative bg-surface-container-low">
              <div className="absolute top-3 right-4 font-font-bebas text-6xl text-primary-container/6 leading-none select-none">"</div>
              <div className="text-primary-container text-sm tracking-widest mb-3">★★★★★</div>
              <p className="font-body-md text-[13px] text-on-surface-variant italic leading-relaxed mb-5">{text}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-primary-container/10 border border-primary-container/20 font-font-bebas text-sm text-primary-container flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <div className="font-font-mono-jb text-[10px] text-on-surface">{name}</div>
                  <div className="font-font-mono-jb text-[8px] text-on-surface-variant/40">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
