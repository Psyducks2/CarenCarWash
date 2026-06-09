import React from 'react';

const ServiceCard = ({ title, description, features, image, isFeatured, isMotorcycle, whatsappLink, badge }) => (
  <div className="group bg-surface-container-low border border-outline-variant/10 hover:border-primary-container/20 transition-all duration-300 overflow-hidden">
    <div className="relative h-48 overflow-hidden">
      {isMotorcycle ? (
        <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
          <span className="material-symbols-outlined text-5xl text-primary-container opacity-30">motorcycle</span>
        </div>
      ) : (
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
          src={image}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
    </div>
    <div className="p-5 space-y-3">
      <div className="flex justify-between items-start">
        <h3 className="font-font-bebas text-xl text-on-background tracking-wide">{title}</h3>
        {badge && (
          <span className="font-font-mono-jb text-[7px] uppercase tracking-wider bg-primary-container/10 text-primary-container border border-primary-container/20 px-2 py-1">
            {badge}
          </span>
        )}
      </div>
      <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">{description}</p>
      <ul className="space-y-1.5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 font-font-mono-jb text-[9px] text-on-surface uppercase tracking-wider">
            <span className="material-symbols-outlined text-secondary text-sm">chevron_right</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full py-2.5 font-font-mono-jb text-[9px] uppercase tracking-wider text-center transition-all ${
          isFeatured
            ? 'bg-primary-container text-on-primary-container hover:brightness-110'
            : 'bg-transparent text-primary-container border border-primary-container/25 hover:border-primary-container/50'
        }`}
      >
        {isFeatured ? 'Agendar Agora' : 'Agendar Este Serviço'}
      </a>
    </div>
  </div>
);

export default function Services({ whatsappLink }) {
  const services = [
    {
      title: 'Lavagem Detalhada Externa',
      description: 'Snow foam premium, pincéis de detalhamento para frestas e limpeza técnica de caixas de roda.',
      features: ['Snow Foam Ativo', 'Pincelamento Técnico', 'Rodas & Caixas'],
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uh8scCryzVxfPD1RO36FFcM6njXapyVcG1DUihN1XN-sNDRTRzRijg2KedmBc5hvq1RizIP16vqDdFYQzfMyfIJUPU2lfArp-i3D6K5nknXSGPQrd6NMwQ7adXwI7pVR4OuuEJsALUuV2DaEG6r4btGYD6a8jQ2dEWzV8-8rZIjeV6Jy9-J21-H7XGHaucI-weTTJybVBAycwG6zMZxoF2aeK4Le4lZZNm8hbb-1hxqDMbz2CBWJDTXh78W',
    },
    {
      title: 'Higienização Interna',
      description: 'Aspiração profunda, condicionamento de plásticos e limpeza de couro com proteção UV.',
      features: ['Alta Sucção', 'Condicionamento UV', 'Limpeza de Couro'],
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uhgzHj6B8sB0UTP01muiDxa2CiG3pK1pakmK8Eb8X0ftSJNYg9catB_r4MU5sG7AFUx7jnlJvJQPmMaD4x3XPgljkCY9C-GV9-vpZECPp-2JpqSx-Z-EMYTWF82NfTK5UfLvr__roKwyn-UUHy9NNSi_lp2JqhaSBvZEClHiTyIFykrjIaIoevDnfB01MWFB8dE4KqPv8EOaPFseta2U7yLy6HjQIst7d-ZV4zJ6Qggci8bC48YmRYyRsBZ',
      isFeatured: true,
      badge: 'Mais Procurado',
    },
    {
      title: 'Estética para Motos',
      description: 'Desengraxante biodegradável, lavagem segura de motor e carenagens com proteção especial.',
      features: ['Lavagem Técnica', 'Limpeza de Corrente', 'Cera Protetora'],
      isMotorcycle: true,
    },
  ];

  return (
    <section className="py-20 bg-surface-container-lowest" id="servicos">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="mb-12">
          <div className="font-font-mono-jb text-[9px] text-primary-container/60 uppercase tracking-widest mb-1">// Serviços</div>
          <h2 className="font-font-bebas text-4xl text-on-background">Escolha seu pacote</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} whatsappLink={whatsappLink} />
          ))}
        </div>
      </div>
    </section>
  );
}
