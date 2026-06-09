import React from 'react';

const HOURS = [
  { day: 'Seg – Sex', time: '08:00 – 17:00', closed: false },
  { day: 'Sábado', time: '08:00 – 16:00', closed: false },
  { day: 'Domingo', time: 'Fechado', closed: true },
];

export default function Location({ whatsappLink }) {
  return (
    <section className="py-20" id="localizacao">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="mb-12">
          <div className="font-font-mono-jb text-[9px] text-primary-container/60 uppercase tracking-widest mb-1">{'// Onde estamos'}</div>
          <h2 className="font-font-bebas text-4xl text-on-background">Onde Estamos</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-outline-variant/10 overflow-hidden">
          <div className="h-[360px] lg:h-auto relative">
            <div className="absolute inset-0 grayscale opacity-70">
              <iframe
                className="border-0 w-full h-full"
                frameBorder="0"
                src="https://maps.google.com/maps?q=Rua%20General%20Carneiro,%20204%20-%20S%C3%A3o%20Francisco,%20Curitiba&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Mapa Caren Car Wash"
              ></iframe>
            </div>
          </div>
          <div className="p-8 space-y-8 bg-surface-container">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-primary-container/10 border border-primary-container/15 flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-primary-container text-base">location_on</span>
              </div>
              <div>
                <div className="font-font-mono-jb text-[8px] text-primary-container/60 uppercase tracking-widest mb-1">Endereço</div>
                <p className="font-body-md text-[13px] text-on-surface-variant">
                  Rua General Carneiro, 204<br />São Francisco — Curitiba, PR
                </p>
              </div>
            </div>
            <div>
              <div className="font-font-mono-jb text-[8px] text-primary-container/60 uppercase tracking-widest mb-3">Horários</div>
              <div className="space-y-0">
                {HOURS.map(({ day, time, closed }) => (
                  <div key={day} className="flex justify-between items-center py-2.5 border-b border-outline-variant/10 last:border-0">
                    <span className="font-font-mono-jb text-[10px] text-on-surface-variant">{day}</span>
                    <span className={`font-font-mono-jb text-[10px] font-bold ${closed ? 'text-error' : 'text-on-surface'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary-container text-on-primary-container py-3 font-font-mono-jb text-[10px] uppercase tracking-wider hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-base">directions</span>
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
