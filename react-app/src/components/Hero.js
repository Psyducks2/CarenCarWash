import React from 'react';

export default function Hero({ whatsappLink }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden water-texture">
      <div className="absolute inset-0 z-0">
        <img
          alt="Hero Car"
          className="w-full h-full object-cover opacity-60"
          src="https://lh3.googleusercontent.com/aida/ADBb0ugUQu2qPqB_3Pt1uz49H80Wp9FVNOb0S4sTvlNHRWB0oKWtasRtyvaOB1fGBwYYS5OswX5AM93zM63UcU_aLYveKJg6R6aC48v0Z2CP2nCsiBE8zR6T01tAikOLdobD8GG1Iz0j3uKe43Llc9VTZ6p2gwLpUThGHPFPFY56itaxVQjr9ghv3Ev8XfFsre1XL4LCwazYimOLKYT5U6_VnPhsB7UokntSXpXHsdLkCBKc12OBdKxn1g7TDQk"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 w-full">
        <div className="max-w-2xl space-y-6">
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
            <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary border border-secondary/30 rounded-full font-label-bold text-caption uppercase tracking-widest animate-pulse-intense">
              ⏰ Horários Limitados
            </span>
            <span className="inline-block py-1 px-3 bg-error/20 text-error border border-error/30 rounded-full font-label-bold text-caption uppercase tracking-widest">
              Agende em até 2 horas
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-background leading-tight">
            Lavagem Detalhada <span className="text-primary-container">Premium.</span> O cuidado que o seu veículo merece.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Cuidando do seu carro com carinho 🚗🛵. Especialistas em detalhamento para quem não aceita nada menos que a perfeição.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 pt-6">
            <a
              className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-12 py-3 font-label-bold text-label-bold rounded-xl glow-hover transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-xl"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-2xl">whatsapp</span>
              Agendar Agora no WhatsApp
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 border-2 border-on-surface-variant/30 text-on-surface hover:bg-on-surface-variant/10 px-12 py-3 font-label-bold text-label-bold rounded-xl transition-all"
              href="#servicos"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
