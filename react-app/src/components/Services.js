import React from 'react';

const ServiceCard = ({ title, description, features, image, isFeatured, isMotorcycle, whatsappLink, badge }) => {
  return (
    <div className="group bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/30 hover:border-primary-container/50 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        {isMotorcycle ? (
          <div className="w-full h-full object-cover bg-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-primary-container">motorcycle</span>
          </div>
        ) : (
          <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={image} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60"></div>
      </div>
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-headline-md text-headline-md text-primary-container">{title}</h3>
          {badge && <span className="bg-primary-container/10 text-primary-container text-[10px] px-2 py-1 rounded border border-primary-container/20 uppercase font-black">{badge}</span>}
        </div>
        <p className="text-on-surface-variant font-body-md">{description}</p>
        <ul className="space-y-1 text-caption font-label-bold text-on-surface">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-2 rounded-lg font-label-bold text-label-bold text-center transition-all ${
            isFeatured
              ? 'bg-primary-container text-on-primary-container hover:brightness-110'
              : 'bg-primary-container/20 text-primary-container border border-primary-container/30 hover:bg-primary-container/30'
          }`}
        >
          {isFeatured ? 'Agendar Agora (TOP)' : 'Agendar Este Serviço'}
        </a>
      </div>
    </div>
  );
};

export default function Services({ whatsappLink }) {
  const services = [
    {
      title: 'Lavagem Detalhada Externa',
      description: 'Utilizamos snow foam premium, pincéis de detalhamento para frestas e limpeza técnica de caixas de roda.',
      features: ['Snow Foam Ativo', 'Pincelamento Técnico', 'Limpeza de Rodas & Caixas'],
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uh8scCryzVxfPD1RO36FFcM6njXapyVcG1DUihN1XN-sNDRTRzRijg2KedmBc5hvq1RizIP16vqDdFYQzfMyfIJUPU2lfArp-i3D6K5nknXSGPQrd6NMwQ7adXwI7pVR4OuuEJsALUuV2DaEG6r4btGYD6a8jQ2dEWzV8-8rZIjeV6Jy9-J21-H7XGHaucI-weTTJybVBAycwG6zMZxoF2aeK4Le4lZZNm8hbb-1hxqDMbz2CBWJDTXh78W'
    },
    {
      title: 'Higienização Interna',
      description: 'Aspiração profunda, limpeza detalhada do painel e condicionamento de plásticos com proteção UV.',
      features: ['Aspiração de Alta Sucção', 'Condicionamento de Plásticos', 'Limpeza de Couro'],
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uhgzHj6B8sB0UTP01muiDxa2CiG3pK1pakmK8Eb8X0ftSJNYg9catB_r4MU5sG7AFUx7jnlJvJQPmMaD4x3XPgljkCY9C-GV9-vpZECPp-2JpqSx-Z-EMYTWF82NfTK5UfLvr__roKwyn-UUHy9NNSi_lp2JqhaSBvZEClHiTyIFykrjIaIoevDnfB01MWFB8dE4KqPv8EOaPFseta2U7yLy6HjQIst7d-ZV4zJ6Qggci8bC48YmRYyRsBZ',
      isFeatured: true,
      badge: 'Mais Procurado'
    },
    {
      title: 'Estética para Motos 🛵',
      description: 'Desengraxante biodegradável, lavagem segura de motor e carenagens com proteção especial.',
      features: ['Lavagem Técnica de Motor', 'Limpeza de Corrente', 'Cera em Spray Protetora'],
      isMotorcycle: true
    }
  ];

  return (
    <section className="py-20 bg-surface-container-lowest" id="servicos">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12 space-y-2">
          <h2 className="font-headline-lg text-headline-lg text-on-background">Nossos Serviços</h2>
          <p className="text-on-surface-variant text-sm">Escolha o pacote ideal para seu veículo</p>
          <div className="h-1 w-20 bg-primary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} whatsappLink={whatsappLink} />
          ))}
        </div>
      </div>
    </section>
  );
}
