import React from 'react';

export default function Location({ whatsappLink }) {
  return (
    <section className="py-20" id="localizacao">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl">
          <div className="lg:w-2/3 h-[400px] lg:h-auto relative bg-surface-container-highest">
            <div className="absolute inset-0 opacity-80 grayscale">
              <iframe
                className="border-0 w-full h-full"
                frameBorder="0"
                src="https://maps.google.com/maps?q=Rua%20General%20Carneiro,%20204%20-%20S%C3%A3o%20Francisco,%20Curitiba&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Mapa Caren Car Wash"
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/3 p-8 space-y-8 flex flex-col justify-center">
            <div className="space-y-2">
              <h3 className="font-headline-lg text-headline-lg text-on-background">Onde Estamos</h3>
              <div className="flex items-start gap-2 text-on-surface-variant font-body-md">
                <span className="material-symbols-outlined text-primary-container">location_on</span>
                <p>Rua General Carneiro, 204<br />São Francisco, Curitiba - PR</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-label-bold text-label-bold text-on-surface uppercase tracking-widest border-b border-outline-variant pb-2">Horário de Funcionamento</h4>
              <div className="space-y-2 font-body-md text-on-surface-variant">
                <div className="flex justify-between items-center">
                  <span>Segunda - Sexta</span>
                  <span className="text-on-surface font-bold">08:00 às 17:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sábado</span>
                  <span className="text-on-surface font-bold">08:00 às 16:00</span>
                </div>
                <div className="flex justify-between items-center text-error">
                  <span>Domingo</span>
                  <span className="font-bold">Fechado</span>
                </div>
              </div>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-label-bold text-label-bold text-center hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">directions</span>
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
