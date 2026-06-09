import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-8" id="contato">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-font-bebas text-xl tracking-widest text-on-surface-variant/40">
          CAREN<span className="text-primary-container/40">.</span>
        </span>
        <p className="font-font-mono-jb text-[8px] text-on-surface-variant/30 uppercase tracking-wider">
          © 2024 Caren Car Wash · Curitiba, PR
        </p>
        <div className="flex items-center gap-6">
          <a
            className="flex items-center gap-1.5 font-font-mono-jb text-[9px] text-on-surface-variant/40 hover:text-on-surface-variant uppercase tracking-wider transition-colors"
            href="https://instagram.com/caren_car_wash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm">photo_camera</span>
            Instagram
          </a>
          <span className="font-font-mono-jb text-[9px] text-on-surface-variant/30 uppercase tracking-wider">Privacidade</span>
          <span className="font-font-mono-jb text-[9px] text-on-surface-variant/30 uppercase tracking-wider">Termos</span>
        </div>
      </div>
    </footer>
  );
}
