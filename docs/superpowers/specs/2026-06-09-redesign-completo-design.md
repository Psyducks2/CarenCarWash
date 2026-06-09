# Caren Car Wash — Redesign Completo para Conversão

**Data:** 2026-06-09  
**Status:** Aprovado  
**Objetivo:** Redesign visual completo focado em conversão. Remover emojis, usar icons Material Symbols. Nova identidade Brutalist Minimal.

---

## Decisões de Design

| Decisão | Escolha |
|---------|---------|
| Direção visual | C — Brutalist Minimal |
| Tipografia display | Bebas Neue |
| Tipografia labels/dados | JetBrains Mono |
| Tipografia corpo | Inter (mantém) |
| Cores | Mantém sistema atual (gold #ffd700, green #4ae176, bg #111317) |
| Depoimentos | Sim — 3 ficcionais (substituir com reais depois) |
| Preços | Não exibir |
| Seção antes/depois | Não |
| CTA com desconto | Não — removido "Ganhe 10% na próxima lavagem" |

---

## Estrutura de Seções (ordem final)

```
01 Header        — sticky, logo "CAREN.", nav JetBrains Mono, CTA Agendar Agora
02 Hero          — grid 2 colunas: headline Bebas Neue + card de stats lateral
03 Social Proof  — barra 4 métricas com ícones Material Symbols
04 Services      — 3 cards, sem preço, sem emojis, destaque em Higienização Interna
05 Testimonials  — NOVA seção, 3 reviews ficcionais
06 CTA           — layout split: headline Bebas Neue + botão WhatsApp
07 Location      — grid: mapa iframe + info com horários em JetBrains Mono
08 Footer        — minimalista, 1 linha
```

---

## Tipografia

- **Bebas Neue** — `font-size` display: headlines H1/H2, logo, números grandes no CTA  
  Carregar via Google Fonts: `family=Bebas+Neue`
- **JetBrains Mono** — labels, badges, horários, nav links, dados numéricos  
  Carregar via Google Fonts: `family=JetBrains+Mono:wght@400;700`
- **Inter** — corpo de texto, descrições (já carregado)

Atualizar `public/index.html` para incluir as duas novas famílias.  
Adicionar `fontFamily` no `tailwind.config` para `font-bebas` e `font-mono-jb`.

---

## Assinatura Visual (CSS global)

Adicionar em `public/index.html`:

- **Dot grid background** — `background-image: linear-gradient(rgba(255,215,0,0.025) 1px, transparent 1px), linear-gradient(90deg, ...)` em seções alternadas
- **Gold hairline** — `border-top: 1px solid rgba(255,215,0,0.1)` nas seções
- **Acento diagonal** — pseudo-elemento `::before` no hero com gradient triangular em gold opacity 0.08
- **Scroll reveal** — `@keyframes float-in` já existente, aplicar via `animate-float-in` nas seções

---

## Componentes a Editar

### `public/index.html`
- Adicionar Bebas Neue + JetBrains Mono ao `<link>` Google Fonts
- Adicionar `font-bebas` e `font-mono-jb` ao `tailwind.config.fontFamily`
- Adicionar `.dot-grid` CSS class para background pattern

### `src/components/Header.js`
- Logo: `CAREN.` com ponto em gold, Bebas Neue
- Nav links: JetBrains Mono uppercase
- CTA button: manter gold

### `src/components/Hero.js`
- Layout: 2 colunas (texto esquerda + stats card direita)
- H1: Bebas Neue, ~58px, `"O cuidado que seu carro merece."`
- Badge de disponibilidade com dot verde animado (já existe lógica)
- Remover emojis 🚗🛵 — substituir por ícone `directions_car` Material Symbols
- Stats card lateral: 3 métricas com ícone + valor + descrição

### `src/components/SocialProof.js`
- Adicionar ícone Material Symbols a cada métrica
- Layout: barra horizontal com separadores `border-right`
- Labels em JetBrains Mono uppercase

### `src/components/Services.js`
- Remover emoji `🛵` do título da moto — usar ícone `motorcycle` (já presente)
- Cards: border mais sutil, badge "Mais Procurado" em gold
- Feature list: trocar `check_circle` por seta `›` estilizada ou manter icon
- Botão card featured: fundo gold sólido

### `src/components/CtaSection.js`
- Layout split: texto esquerda, botão direita (grid 2 colunas)
- Headline em Bebas Neue: `"Agende agora. Vagas limitadas."`
- Subtítulo em JetBrains Mono: horários de funcionamento
- Remover menção a desconto

### `src/components/Location.js`
- Horários em JetBrains Mono
- Ícones Material Symbols nas info rows
- Botão "Como Chegar" mantém icon `directions`

### `src/components/Footer.js`
- Logo `CAREN.` com ponto gold
- Layout 1 linha: logo | copyright | links

### `src/components/FloatingButton.js`
- Sem alterações (já funciona bem)

---

## Novo Componente

### `src/components/Testimonials.js` (NOVO)

3 cards de depoimentos ficcionais. Estrutura:
```
- Stars (★★★★★)
- Texto do depoimento (itálico)
- Avatar (iniciais) + nome + papel (ex: "Avaliação Google")
```

Depoimentos:
1. **Marcos R.** — "Meu carro saiu como novo. O pessoal é cuidadoso, pontual e entregou antes do previsto. Já indiquei pra vários amigos."
2. **Ana C.** — "Higienização interna impecável. Tiraram manchas que achei que eram permanentes. Atendimento via WhatsApp rápido demais."
3. **Felipe P.** — "Levo minha moto todo mês. Serviço especializado, não é qualquer lugar que faz direito. Preço justo pelo resultado."

Adicionar `<Testimonials />` no `src/App.js` entre `<Services />` e `<CtaSection />`.

---

## Fora de Escopo

- Preços nos cards de serviço
- Seção antes/depois
- Animações de scroll complexas (manter float-in existente)
- Mudança de cores base do design system

---

## Ordem de Implementação

1. `public/index.html` — fontes + tailwind config + CSS global
2. `Header.js`
3. `Hero.js`
4. `SocialProof.js`
5. `Services.js`
6. `Testimonials.js` (novo)
7. `CtaSection.js`
8. `Location.js`
9. `Footer.js`
10. `App.js` — adicionar `<Testimonials />`
