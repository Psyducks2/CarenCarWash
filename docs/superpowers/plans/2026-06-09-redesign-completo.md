# Caren Car Wash — Redesign Completo para Conversão

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign completo da landing page com estética Brutalist Minimal, nova tipografia (Bebas Neue + JetBrains Mono), remoção de emojis, nova seção de depoimentos e layout otimizado para conversão.

**Architecture:** Edição in-place dos 8 componentes existentes + criação de `Testimonials.js`. Sem roteamento, sem estado global. Tailwind via CDN com config no `index.html`. Material Symbols Outlined já carregados.

**Tech Stack:** React 18, Tailwind CSS (CDN), Google Fonts (Bebas Neue + JetBrains Mono + Inter), Material Symbols Outlined

---

## Mapa de Arquivos

| Arquivo | Ação | Responsabilidade |
|---------|------|-----------------|
| `public/index.html` | Modificar | Fontes Google, Tailwind config, CSS global (.dot-grid) |
| `src/components/Header.js` | Modificar | Logo CAREN., nav JetBrains Mono |
| `src/components/Hero.js` | Modificar | Grid 2 colunas, headline Bebas Neue, stats card lateral |
| `src/components/SocialProof.js` | Modificar | Ícones por métrica, labels JetBrains Mono |
| `src/components/Services.js` | Modificar | Sem emojis, styling Brutalist |
| `src/components/Testimonials.js` | **Criar** | Nova seção de 3 depoimentos ficcionais |
| `src/components/CtaSection.js` | Modificar | Layout split, sem texto de desconto |
| `src/components/Location.js` | Modificar | Horários JetBrains Mono, ícones nas info rows |
| `src/components/Footer.js` | Modificar | Logo CAREN., 1 linha, minimal |
| `src/App.js` | Modificar | Import + `<Testimonials />` entre Services e CtaSection |

---

## Task 1: Fontes, Tailwind Config e CSS Global

**Files:**
- Modify: `public/index.html`

- [ ] **Step 1: Atualizar link Google Fonts**

Substituir a linha de fontes atual:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;700&display=swap" rel="stylesheet"/>
```
Por:
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;700&family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;700&display=swap" rel="stylesheet"/>
```

- [ ] **Step 2: Adicionar font families ao tailwind.config**

Dentro de `tailwind.config = { theme: { extend: { "fontFamily": { ... } } } }`, adicionar após as entradas existentes:
```js
"font-bebas": ["Bebas Neue", "sans-serif"],
"font-mono-jb": ["JetBrains Mono", "monospace"],
```

Resultado final do bloco `fontFamily`:
```js
"fontFamily": {
  "headline-md": ["Montserrat"],
  "display-lg": ["Montserrat"],
  "body-lg": ["Inter"],
  "headline-lg-mobile": ["Montserrat"],
  "headline-lg": ["Montserrat"],
  "body-md": ["Inter"],
  "label-bold": ["Inter"],
  "caption": ["Inter"],
  "font-bebas": ["Bebas Neue", "sans-serif"],
  "font-mono-jb": ["JetBrains Mono", "monospace"]
},
```

- [ ] **Step 3: Adicionar classe .dot-grid no bloco `<style>`**

Dentro do `<style>` existente, adicionar ao final (antes do `</style>`):
```css
.dot-grid {
  background-image:
    linear-gradient(rgba(255,215,0,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,215,0,0.025) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

- [ ] **Step 4: Verificar visualmente**

Rodar `npm start` (se não estiver rodando). Abrir `http://localhost:3000`.  
Nada deve mudar visualmente ainda — as novas fontes só afetam quando as classes são usadas.  
Verificar no DevTools → Network → Fonts que `Bebas+Neue` e `JetBrains+Mono` aparecem carregados.

- [ ] **Step 5: Commit**

```bash
git add public/index.html
git commit -m "feat: add Bebas Neue + JetBrains Mono fonts and dot-grid CSS"
```

---

## Task 2: Header — Logo e Nav Brutalist

**Files:**
- Modify: `src/components/Header.js`

- [ ] **Step 1: Substituir conteúdo completo do Header.js**

```jsx
import React from 'react';

export default function Header({ whatsappLink }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center h-16 px-4 md:px-10 max-w-7xl mx-auto w-full">
        <a className="font-font-bebas text-2xl tracking-widest text-on-background" href="#/">
          CAREN<span className="text-primary-container">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a className="font-font-mono-jb text-[10px] uppercase tracking-widest text-primary-container" href="#/">Início</a>
          <a className="font-font-mono-jb text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#servicos">Serviços</a>
          <a className="font-font-mono-jb text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#localizacao">Localização</a>
          <a className="font-font-mono-jb text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#contato">Contato</a>
        </div>
        <a
          className="bg-primary-container text-on-primary-container px-5 py-2 font-font-mono-jb text-[10px] tracking-wider uppercase hover:brightness-110 transition-all"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar Agora
        </a>
      </div>
    </nav>
  );
}
```

> **Nota sobre classes Tailwind + Google Fonts:** Tailwind gera `font-font-bebas` para a chave `"font-bebas"` no config. Confirmar no DevTools se a fonte renderiza corretamente. Se necessário, usar `style={{ fontFamily: "'Bebas Neue', sans-serif" }}` como fallback inline.

- [ ] **Step 2: Verificar no browser**

Logo deve exibir `CAREN.` com ponto dourado. Nav links em fonte monospace uppercase. Botão "Agendar Agora" mantém fundo gold.

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.js
git commit -m "feat: redesign Header with Bebas Neue logo and JetBrains Mono nav"
```

---

## Task 3: Hero — Grid 2 Colunas + Stats Card

**Files:**
- Modify: `src/components/Hero.js`

- [ ] **Step 1: Substituir conteúdo completo do Hero.js**

```jsx
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
              O CUIDADO<br/>QUE SEU<br/>CARRO <span className="text-primary-container">MERECE.</span>
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
```

- [ ] **Step 2: Verificar no browser**

Hero deve mostrar headline grande em Bebas Neue (ou serif genérico como fallback), badge verde com dot animado, botões sem emojis, e card de stats visível no desktop (oculto em mobile).

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.js
git commit -m "feat: redesign Hero with 2-col grid, Bebas Neue headline, stats card"
```

---

## Task 4: SocialProof — Ícones + JetBrains Mono

**Files:**
- Modify: `src/components/SocialProof.js`

- [ ] **Step 1: Substituir conteúdo completo do SocialProof.js**

```jsx
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
```

- [ ] **Step 2: Verificar no browser**

Barra deve mostrar 4 métricas com ícone dourado, valor em Bebas Neue, label uppercase em JetBrains Mono. Separadores verticais entre itens.

- [ ] **Step 3: Commit**

```bash
git add src/components/SocialProof.js
git commit -m "feat: redesign SocialProof with icons and JetBrains Mono labels"
```

---

## Task 5: Services — Remover Emoji, Estilo Brutalist

**Files:**
- Modify: `src/components/Services.js`

- [ ] **Step 1: Substituir conteúdo completo do Services.js**

```jsx
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
```

- [ ] **Step 2: Verificar no browser**

3 cards sem emojis. Badge "Mais Procurado" em Higienização Interna. Features com ícone `chevron_right` verde. Título da moto sem emoji.

- [ ] **Step 3: Commit**

```bash
git add src/components/Services.js
git commit -m "feat: redesign Services cards, remove emoji, brutalist styling"
```

---

## Task 6: Testimonials — Nova Seção

**Files:**
- Create: `src/components/Testimonials.js`

- [ ] **Step 1: Criar arquivo Testimonials.js**

```jsx
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
```

- [ ] **Step 2: Adicionar Testimonials ao App.js**

Em `src/App.js`, adicionar import:
```js
import Testimonials from './components/Testimonials';
```

E dentro do `<main>`, entre `<Services />` e `<CtaSection />`:
```jsx
<Services whatsappLink={whatsappLink} />
<Testimonials />
<CtaSection whatsappLink={whatsappLink} />
```

- [ ] **Step 3: Verificar no browser**

Nova seção de depoimentos entre Serviços e CTA. 3 cards com texto itálico, stars douradas, avatar com iniciais.

- [ ] **Step 4: Commit**

```bash
git add src/components/Testimonials.js src/App.js
git commit -m "feat: add Testimonials section with 3 reviews"
```

---

## Task 7: CtaSection — Layout Split, Sem Desconto

**Files:**
- Modify: `src/components/CtaSection.js`

- [ ] **Step 1: Substituir conteúdo completo do CtaSection.js**

```jsx
import React from 'react';

export default function CtaSection({ whatsappLink }) {
  return (
    <section className="py-20 border-y border-outline-variant/10 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-font-bebas text-5xl md:text-6xl leading-none text-on-background mb-3">
              AGENDE AGORA.<br/><span className="text-primary-container">VAGAS LIMITADAS.</span>
            </h2>
            <p className="font-font-mono-jb text-[10px] text-on-surface-variant uppercase tracking-widest">
              Resposta via WhatsApp em até 2 horas · Seg–Sáb 08h–17h
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-container text-on-primary-container px-10 py-4 font-font-mono-jb text-[11px] uppercase tracking-wider hover:brightness-110 transition-all shadow-xl"
            >
              <span className="material-symbols-outlined text-xl">whatsapp</span>
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

CTA com headline grande em Bebas Neue, botão alinhado à direita no desktop. Sem texto de desconto.

- [ ] **Step 3: Commit**

```bash
git add src/components/CtaSection.js
git commit -m "feat: redesign CtaSection split layout, remove discount text"
```

---

## Task 8: Location — Horários JetBrains Mono + Ícones

**Files:**
- Modify: `src/components/Location.js`

- [ ] **Step 1: Substituir conteúdo completo do Location.js**

```jsx
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
          <div className="font-font-mono-jb text-[9px] text-primary-container/60 uppercase tracking-widest mb-1">// Onde estamos</div>
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
                  Rua General Carneiro, 204<br/>São Francisco — Curitiba, PR
                </p>
              </div>
            </div>
            <div>
              <div className="font-font-mono-jb text-[8px] text-primary-container/60 uppercase tracking-widest mb-3">Horários</div>
              <div className="space-y-0">
                {HOURS.map(({ day, time, closed }) => (
                  <div key={day} className="flex justify-between items-center py-2.5 border-b border-outline-variant/8 last:border-0">
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
```

- [ ] **Step 2: Verificar no browser**

Seção com heading "Onde Estamos", grid mapa + info. Horários em JetBrains Mono, "Domingo / Fechado" em vermelho. Ícone `location_on` dourado.

- [ ] **Step 3: Commit**

```bash
git add src/components/Location.js
git commit -m "feat: redesign Location with JetBrains Mono hours and icon rows"
```

---

## Task 9: Footer — Minimal 1 Linha

**Files:**
- Modify: `src/components/Footer.js`

- [ ] **Step 1: Substituir conteúdo completo do Footer.js**

```jsx
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
```

- [ ] **Step 2: Verificar no browser**

Footer compacto 1 linha: logo desbotado à esquerda, copyright no centro, links à direita.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.js
git commit -m "feat: redesign Footer minimal 1-line layout"
```

---

## Task 10: Verificação Final e Ajustes

**Files:**
- Nenhum arquivo novo

- [ ] **Step 1: Revisão completa no browser**

Percorrer a página inteira verificando:
- [ ] Sem emojis visíveis em nenhuma seção
- [ ] Bebas Neue carregada nos headlines (verificar no DevTools → Elements que a fonte aplicada é "Bebas Neue")
- [ ] JetBrains Mono nos labels/nav (verificar computed styles)
- [ ] Dot grid visível nas seções Hero e Testimonials
- [ ] Mobile (DevTools → toggle device): hero empilha corretamente, stats card oculto, serviços em 1 coluna, depoimentos em 1 coluna
- [ ] Todos os links WhatsApp funcionam (abrem `https://wa.me/message/YAPB4LP252XGK1`)
- [ ] Mobile bottom nav (FloatingButton) ainda funciona

- [ ] **Step 2: Correção da classe Tailwind para fonts customizadas (se necessário)**

Se Bebas Neue não renderizar com `font-font-bebas`, adicionar CSS fallback no `<style>` do `index.html`:
```css
.font-font-bebas { font-family: 'Bebas Neue', sans-serif !important; }
.font-font-mono-jb { font-family: 'JetBrains Mono', monospace !important; }
```

- [ ] **Step 3: Commit final**

```bash
git add -A
git commit -m "feat: complete Caren Car Wash brutalist redesign for conversion"
```

---

## Notas de Implementação

**Classes Tailwind customizadas:** Tailwind CDN gera classes `font-{key}` onde `key` é a chave do objeto `fontFamily`. Para a chave `"font-bebas"`, a classe é `font-font-bebas`. Se isso causar estranheza, usar style inline como fallback.

**Opacidade em Tailwind CDN:** Classes como `bg-primary-container/10` requerem suporte a opacity modifier. Tailwind v3 CDN suporta. Se aparecer cor sólida em vez de transparente, usar `bg-opacity-10` como fallback.

**FloatingButton.js:** Não alterado — já funciona bem com o design atual.
