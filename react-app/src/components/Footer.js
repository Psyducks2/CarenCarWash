import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full py-20" id="contato">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center md:text-left space-y-2">
          <span className="font-headline-md text-headline-md font-bold text-on-surface-variant grayscale">
            Caren Car Wash
          </span>
          <p className="text-on-surface-variant font-body-md max-w-sm">
            © 2024 Caren Car Wash. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            className="flex items-center gap-1 text-on-surface-variant hover:text-secondary transition-opacity duration-300 opacity-80 hover:opacity-100 font-label-bold text-label-bold"
            href="https://instagram.com/caren_car_wash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">photo_camera</span>
            Instagram @caren_car_wash
          </a>
          <div className="flex gap-6">
            <span className="text-on-surface-variant font-caption">Privacidade</span>
            <span className="text-on-surface-variant font-caption">Termos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
