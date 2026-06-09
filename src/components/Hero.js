import React from 'react';

export default function Hero({ whatsappLink }) {
  const stats = [
    { icon: 'star', value: '4.9', desc: 'Avaliação média', sub: '347 avaliações no Google' },
    { icon: 'group', value: '2.500+', desc: 'Clientes atendidos', sub: 'Desde 2019' },
    { icon: 'verified', value: '100%', desc: 'Garantia de satisfação', sub: 'Ou refaremos sem custo' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center dot-grid overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Hero Car"
          className="w-full h-full object-cover opacity-30"
          src="https://lh3.googleusercontent.com/aida/ADBb0ugUQu2qPqB_3Pt1uz49H80Wp9FVNOb0S4sTvlNHRWB0oKWtasRtyvaOB1fGBwYYS5OswX5AM93zM63UcU_aLYveKJg6R6aC48v0Z2CP2nCsiBE8zR6T01tAikOLdobD8GG1Iz0j3uKe43Llc9VTZ6p2gwLpUThGHPFPFY56itaxVQjr9ghv3Ev8XfFsre1XL4LCwazYimOLKYT5U6_VnPhsB7UokntSXpXHsdLkCBKc12OBdKxn1g7TDQk"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 border border-secondary/30 px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-font-mono-jb text-[9px] uppercase tracking-widest text-secondary">Vagas disponíveis hoje</span>
            </div>
            <h1 className="font-font-bebas text-[64px] md:text-[80px] leading-none tracking-wide text-on-background">
              O CUIDADO<br />QUE SEU<br />CARRO <span className="text-primary-container">MERECE.</span>
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Especialistas em detalhamento premium. Snow foam, pincelamento técnico e proteção UV desde 2019.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-8 py-3 font-font-mono-jb text-[10px] tracking-wider uppercase hover:brightness-110 transition-all shadow-xl"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-lg">whatsapp</span>
                Agendar via WhatsApp
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-outline-variant/60 px-8 py-3 font-font-mono-jb text-[10px] tracking-wider uppercase transition-all"
                href="#servicos"
              >
                Ver Serviços
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="border border-primary-container/15 bg-surface-container/50 p-6">
              {stats.map(({ icon, value, desc, sub }, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 py-5 ${i < stats.length - 1 ? 'border-b border-outline-variant/10' : ''}`}
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-primary-container/10 border border-primary-container/15 flex-shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-lg">{icon}</span>
                  </div>
                  <div>
                    <div className="font-font-bebas text-3xl text-primary-container leading-none">{value}</div>
                    <div className="font-font-mono-jb text-[9px] text-on-surface-variant uppercase tracking-wider">{desc}</div>
                    <div className="font-font-mono-jb text-[8px] text-on-surface-variant/50 mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
