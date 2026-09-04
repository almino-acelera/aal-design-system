# Aline Loiola — Design System

**Aline Loiola** é especialista em vendas consultivas. A promessa da marca, literal e imutável:

> ## Ensino profissionais de vendas a fazerem comissões de 5 dígitos

**Regra da promessa.** Ela funciona como slogan: **não se reescreve, não se adapta, não se resume** — nem em anúncio, nem em slide, nem em e-mail, nem em bio. A ÚNICA variação permitida é o trecho numérico, que pode aparecer como `5 dígitos`, `R$ 10.000`, `R$ 10.000 ou mais` ou `dez mil reais`. Tudo o mais permanece palavra por palavra, na primeira pessoa ("Ensino"). Não são versões válidas: "aprenda a fazer comissões de 5 dígitos", "ensinamos profissionais de vendas…", "comissões de 5 dígitos em 90 dias", "profissionais de vendas que faturam 5 dígitos". O ativo central da marca é a metodologia proprietária **Arquitetura ARCO™** — quatro movimentos que cobrem uma negociação inteira, com postura consultiva transversal.

> **Em uma frase:** a Arquitetura ARCO™ transforma diagnóstico em decisão e decisão em compromisso.

| Pilar | Nome | O que resolve |
| --- | --- | --- |
| **A** | Análise Estratégica da Lacuna™ | Diagnosticar a realidade atual, o estado desejado e explicitar o gap com impacto |
| **R** | Reformulação da Percepção | Reenquadrar o problema e ajudar o cliente a enxergá-lo de forma mais precisa |
| **C** | Construção da Decisão | Trabalhar prioridade, risco, objeções e segurança até uma decisão madura |
| **O** | Organização do Processo | Transformar a decisão em próximos passos claros: prazo, critérios e follow-up |

**Adaptação contextual única.** Em vendas de lançamentos e infoprodutos para consumidor final, o **O** pode assumir o sentido de **Organização da Implementação** — ajudar o cliente a visualizar como vai aplicar na rotina o que comprou. Nenhum outro pilar muda de nome em nenhum contexto.

**Como escrever os nomes.** Primeira menção na peça: nome completo com o ™ (`Arquitetura ARCO™`, `Análise Estratégica da Lacuna™`). Menções seguintes e espaços apertados (sidebar, badge, rótulo de progresso): forma curta — Análise da Lacuna · Reformulação · Construção · Organização, ou só a letra. Nunca invente sinônimos ("Raio-X", "Abertura", "Objeções" **não** são nomes de pilar).

## Fontes deste sistema

Não havia codebase, Figma, deck ou site anterior. Tudo foi construído a partir de:

1. **`uploads/AAL logotipo elegante.png`** — o logotipo escolhido pela cliente (arco e flecha sobre wordmark serifado + tagline "ESPECIALISTA EM VENDAS CONSULTIVAS"). Único ativo visual fornecido; os arquivos em `assets/` são recortes e versões com fundo transparente derivados dele por processamento de imagem — **nenhuma marca foi redesenhada**.
2. **Direção verbal da cliente** — cores oficiais `#4e4c29` (verde oliva) e `#a58647` (dourado escuro); paleta de apoio com laranja e marrom claro/escuro; fontes **Cinzel Decorative** e **Montserrat**; preferência por serifadas de alta legibilidade.
3. **Contexto de produto** — a Arquitetura ARCO™ (nomes dos quatro pilares confirmados pela cliente), seu público (profissionais de vendas) e a promessa de comissão.

Os produtos representados aqui (site da formação e área de membros) são **recriações propostas**, não recriações de telas existentes — não havia produto anterior para copiar. Trate-os como a referência de aplicação da marca, não como registro histórico.

---

## CONTENT FUNDAMENTALS

**Voz.** Consultora experiente falando com um par, não guru falando com plateia. Firme, específica, sem hype. A marca vende método, não motivação.

**Pessoa.** "Você" para o leitor, sempre no singular. A promessa e a fala da especialista são em **primeira pessoa** ("Ensino profissionais de vendas…", "Eu perdi dez anos falando mais do que perguntando"); o método aparece em terceira pessoa ("A Arquitetura ARCO™ transforma…"). Nunca "nós" corporativo — a exceção é operacional: "Confirmamos sua vaga por WhatsApp."

**Nomes proprietários.** `Arquitetura ARCO™` e `Análise Estratégica da Lacuna™` levam o ™ na primeira menção de cada peça e são sempre capitalizados. Os quatro pilares nunca aparecem em caixa alta fora de eyebrow.

**Casing.** Títulos em *sentence case* ("Quem pergunta melhor, fecha melhor"), nunca Title Case. Caixa alta só em três lugares: eyebrows, rótulos de botão e micro-labels de métrica.

**Frases.** Curtas. Afirmativas. A estrutura mais recorrente da marca é a antítese: *"O problema não é o seu produto."* · *"Você não precisa de mais leads. Precisa conduzir melhor as conversas que já tem."* · *"Sem desconto e sem pressão."*

**Números.** Sempre concretos e sempre com origem: "R$ 10 mil por mês", "+2.400 profissionais treinados (2021–2025)", "de 18% para 34% em dois meses". Todo `StatBlock` carrega um `note` com fonte ou período. Se não há fonte, o número não entra.

**Depoimentos.** Palavras da própria pessoa, com o número que ela alcançou e o cargo real. Não polir para soar como copy.

**Emoji: não.** Em nenhuma superfície — site, área de membros, slides, e-mail. O ornamento da marca é o fio dourado, não o emoji.

**Palavras a evitar:** "segredo", "gatilho mental", "explodir vendas", "revolucionário", "destrave", "mindset", "insano". Exclamações no máximo uma por página, e de preferência zero.

**Exemplos calibrados**

| Contexto | Escreva | Não escreva |
| --- | --- | --- |
| CTA principal | Aplicar para a turma | GARANTIR MINHA VAGA AGORA!!! |
| Eyebrow | Arquitetura ARCO™ | 🎯 O MÉTODO QUE MUDA TUDO |
| Promessa | Ensino profissionais de vendas a fazerem comissões de 5 dígitos | Aprenda a fazer 5 dígitos em 30 dias |
| Escassez | Lote 1 · 40 vagas | ÚLTIMAS VAGAS! CORRE! |
| Erro de formulário | Preencha para continuar | Ops! Algo deu errado 😅 |

---

## VISUAL FOUNDATIONS

**Cor.** Duas cores institucionais: oliva `#4e4c29` (`--olive-600`, estrutura, texto de título, botão primário) e dourado escuro `#a58647` (`--gold-600`, fios, eyebrows, realces, botão secundário). Apoio: marrom para profundidade em fotografia e superfícies escuras alternativas; **laranja é reservado a um único CTA de urgência por tela** e nunca sobre dourado. Neutros são quentes — areia (`--sand-*`) e tinta (`--ink-*`); cinza puro está proibido. Máximo de dois fundos por peça (areia + oliva profundo é o par padrão; dourado 50 entra como terceiro só em cartão de destaque).

**Tipografia.** Três papéis: **Cinzel Decorative** (`--font-display`) para hero, letras ARCO e capas — nunca em parágrafo nem abaixo de 14px, exceto as letras dos pilares (40px, o único display "pequeno"); **Cinzel** (`--font-serif`) para todos os títulos H1–H4, peso 600, tracking `.04em`; **Montserrat** (`--font-sans`) para corpo, rótulos, botões e interface. Leads em Montserrat 300 — o contraste peso-leve/serifa é a assinatura tipográfica. Medida máxima de 62 caracteres.

**Caixa na Cinzel Decorative.** A fonte tem minúsculas desenhadas como versalete — caixa alta inteira fica pesada e ilegível. Por isso, na display, **apenas o “A” inicial é maiúsculo**: escreva **Aline loiola** e **Arco**, nunca `ALINE LOIOLA` nem `ARCO` — e sim, o “loiola” vai em minúscula mesmo sendo nome próprio. Vale também para as iniciais dos pilares: lidas em sequência elas soletram *Arco*, então só o primeiro glifo é a capital rebuscada — **A · r · c · o**. O componente `ArcoPillar` faz isso sozinho (você passa `letter="R"`, ele renderiza `r`). Em Montserrat e Cinzel (corpo e títulos), o nome segue a grafia normal: *Aline Loiola*, *Arquitetura ARCO™*.

**Assinatura de layout.** Toda seção abre com a mesma sequência de quatro partes: *eyebrow dourado em caixa alta → título em Cinzel → fio dourado (140px à esquerda, 180px centralizado) → lead em Montserrat 300*. É o gesto mais reconhecível do sistema; está encapsulado em `SectionHeading` e não deve ser reordenado.

**Espaçamento.** Base 4px. Ritmo interno de bloco: 16 entre rótulo e título, 24 antes do corpo, 32 antes da ação. Seções verticais em `--section-y` (56–120px, fluido); margem lateral em `--gutter-inline` (20–64px). Containers: 640 / 880 / 1120 / 1320px.

**Fundos.** Superfície padrão é areia lisa — **sem gradiente de fundo, sem malha, sem blob**. Seções de contraste usam `--gradient-olive-deep` (oliva 800 → 950, direção 160°) com uma textura de hachura diagonal a 3–4% de opacidade, discreta o suficiente para ser sentida e não vista. Fotografia é full-bleed em hero e player; texto sobre foto sempre com véu inferior (`--gradient-protect-bottom`), nunca com cápsula sólida atrás do texto.

**Imagem.** O acervo atual é de **estúdio**: fundo cinza-claro sem emenda, luz frontal suave e uniforme, sem sombra dura. O guarda-roupa faz o trabalho de cor — camisa branca, saia **oliva**, blazer **laranja**, tricô marinho — os mesmos tons da paleta, o que permite usar as fotos sobre areia ou oliva sem conflito.

Regras de uso:

- **Recorte 4:5** para retrato em hero e cartões; `object-position: center 18%` mantém o rosto no terço superior. Corpo inteiro (`retrato-corpo-inteiro.png`) só em peça alta ou de página cheia.
- **Tratamento:** `saturate(.92) contrast(1.02)`. Nada de preto e branco, filtro frio, vinheta forte ou grão pesado.
- **Fundo cinza é feature, não bug:** encoste a foto direto na areia (`--sand-50`) sem borda — a transição é praticamente invisível. Sobre oliva, sobreponha o véu `linear-gradient(160deg,rgba(50,49,26,.82),rgba(20,20,10,.92))` e baixe a foto para ~50% de opacidade (ver o painel de login da área de membros).
- **Véu de proteção** (`--gradient-protect-bottom`) só quando houver texto sobre a foto; retrato limpo não leva véu.
- **Ainda faltam:** fotos de palco/aula, cenas de negociação e imagens horizontais (16:9) para capa de vídeo e slide. Enquanto não existirem, o kit usa blocos `Photo` rotulados — placeholders honestos, nunca ilustração inventada.

**Cantos.** 4px é o padrão absoluto (botão, cartão, input, badge). 2px em badges e tooltips. 10–16px apenas em painéis grandes. **Pill só em `Tag`, `Switch` e `ProgressBar`.** Nada de cartão totalmente arredondado.

**Bordas.** A borda característica é o *hairline* dourado: `1px solid rgba(165,134,71,.32)` (`--border-hairline`). Divisores neutros usam `--border-soft` (areia 200). Em fundo escuro, `--border-inverse` (dourado a 24%). Borda de 2px só em estado ativo de aba (dourado, embaixo).

**Sombras.** Quentes e discretas — todas em `rgba(38,25,15,α)`, nunca preto neutro. Cartão em repouso quase não levita (`--shadow-xs`); hover sobe para `--shadow-md`; modal usa `--shadow-lg`. `--shadow-gold-glow` existe para um único elemento de destaque por tela. Sombra interna só como `--shadow-inset-hair` (contorno dourado sutil).

**Cartões.** Fundo branco (ou dourado 50 no variante de destaque), canto 4px, borda hairline, sombra xs. **Nunca com borda colorida só de um lado** — a única exceção sancionada é a barra de 3px do `Toast`, que comunica severidade.

**Hover.** Botão primário escurece (oliva 600 → 800); botão de contorno ganha fundo oliva 50; ghost ganha dourado 50; link troca dourado 700 → oliva 700 e a borda inferior fica sólida. Cartão interativo sobe 2px e ganha sombra md. Nunca aumenta escala, nunca muda de cor de marca para outra.

**Press.** `translateY(1px)` e sombra reduzida para xs. Sem escala, sem ripple.

**Movimento.** Fades e deslizes curtos, sem bounce e sem elástico. Easing padrão `cubic-bezier(.2,.6,.2,1)`; entrada de conteúdo usa `--ease-out`. Durações: 90ms (instantâneo), 160ms (cor/borda), 240ms (hover, lift), 420ms (abrir/fechar), 700ms (revelação em scroll: fade + 16px para cima). Progresso e acordeão são as únicas animações de layout.

**Transparência e blur.** Só em três casos: header fixo (areia a 88% + `blur(14px)`), scrim de modal (tinta a 62% + `blur(3px)`) e botão de play sobre vídeo (`blur(6px)`). Fora disso, superfícies são opacas.

**Elementos fixos.** Header do site é sticky com hairline dourado embaixo; o resto da página rola. Na área de membros a sidebar é fixa e o conteúdo rola. Toast fixo a 24px do canto inferior direito.

**Foco.** Anel dourado de 2px com offset 2px (`--focus-ring`) — visível e parte da estética, nunca removido.

---

## ICONOGRAPHY

Não havia sistema de ícones no material fornecido. **Substituição declarada:** adotamos **Lucide** (`https://unpkg.com/lucide@0.454.0`) por CDN — traço de 1.5–2px, cantos arredondados, geometria aberta, que é o que combina com o hairline dourado e a serifa da marca. Não há ícone-fonte nem sprite proprietário; se a cliente adotar outro set, a troca é de uma linha por arquivo.

Regras:

- **Tamanhos:** 15–16px inline (ao lado de texto), 18–20px em `IconButton`, 24px em controles de player. Nunca acima de 24px como ícone — acima disso, use o símbolo do logo.
- **Cor:** dourado 700 em fundo claro; dourado 300 em fundo escuro; ink-500 quando o ícone é secundário. Ícones nunca são multicoloridos.
- **Nunca:** emoji como ícone, caractere Unicode como ícone (`✓`, `★`, `→`), SVG desenhado à mão, ícone dentro de círculo colorido.
- **Exceção Unicode:** o losango `◆` do divisor ornamental e as aspas curvas `“ ”` do `TestimonialCard` são tipografia herdada do logotipo, não iconografia.
- **Marca como ícone:** o arco e flecha (`assets/mark-bow-arrow.png`) é o único símbolo proprietário — favicon, avatar, selo, estado vazio. Mínimo 32px.

### Assets disponíveis (`assets/`)

| Arquivo | Uso |
| --- | --- |
| `logo-lockup.png` | Lockup completo, fundo claro (fundo transparente) |
| `logo-lockup-light.png` | Lockup em versão clara, para oliva/escuro |
| `wordmark.png` / `wordmark-light.png` | Só o wordmark + tagline |
| `mark-bow-arrow.png` / `mark-bow-arrow-light.png` | Só o símbolo — favicon, avatar, selo |

**Fotografia** (`assets/photos/`) — cinco retratos de estúdio fornecidos pela cliente:

| Arquivo | Enquadramento |
| --- | --- |
| `retrato-sorrindo-camisa-branca.png` | Meio corpo, sorriso aberto — retrato padrão |
| `retrato-mao-no-queixo.png` | Meio corpo, mão no queixo — postura consultiva |
| `retrato-blazer-laranja.png` | Meio corpo, blazer laranja — usado no hero do site |
| `retrato-sentada-blazer-laranja.png` | Sentada no cubo — usado no login da área de membros |
| `retrato-corpo-inteiro.png` | Corpo inteiro, tricô marinho |

Não há ilustração nem textura de imagem no acervo, e ainda faltam imagens horizontais e de palco/aula. Os placeholders `Photo` dos UI kits marcam onde elas entram.

---

## Componentes

Nenhuma fonte definia inventário, então o sistema traz o conjunto padrão, agrupado por função. Todos consomem apenas os tokens CSS.

**`components/core/`** — `Button`, `IconButton`, `Badge`, `Tag`, `Card`
**`components/forms/`** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**`components/feedback/`** — `Dialog`, `Toast`, `Tooltip`, `ProgressBar`
**`components/navigation/`** — `Tabs`, `Accordion`
**`components/brand/`** — `Logo`, `SectionHeading`, `ArcoPillar`, `StatBlock`, `TestimonialCard`

### Adições intencionais

Além do conjunto padrão (Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip):

- **`Textarea`** — os formulários de aplicação dependem de respostas qualitativas.
- **`Accordion`** — FAQ e currículo são estruturas obrigatórias na página da formação.
- **`ProgressBar`** — a área de membros é organizada por progresso na trilha.
- **`Logo`** — encapsula as regras de uso da marca (versão clara vs. escura, tamanho mínimo).
- **`SectionHeading`** — codifica a assinatura de layout de quatro partes para que ela não seja remontada errado.
- **`ArcoPillar`**, **`StatBlock`**, **`TestimonialCard`** — os três blocos de conteúdo que se repetem em toda superfície da marca.

---

## Índice

**Raiz**
- `styles.css` — ponto de entrada único (só `@import`s). Consumidores linkam este arquivo.
- `readme.md` — este guia.
- `SKILL.md` — front-matter para uso como Agent Skill.
- `thumbnail.html` — tile do sistema na home.
- `assets/` — logotipo e símbolo em quatro variações.

**Tokens** (`tokens/`)
`fonts.css` (Google Fonts) · `colors.css` · `typography.css` · `spacing.css` · `radii.css` · `elevation.css` · `motion.css` · `base.css` (reset + `h1–h4`, `a`, `::selection`, foco).

**Cards de fundamento** (`guidelines/`)
Cores: `colors-olive`, `colors-gold`, `colors-support`, `colors-neutrals`, `colors-semantic`, `colors-pairings` · Tipo: `type-display`, `type-headings`, `type-body`, `type-labels`, `type-pairing` · Espaço: `spacing-scale`, `spacing-in-use`, `radii`, `elevation`, `motion` · Marca: `brand-logo`, `brand-logo-dark`, `brand-mark`, `brand-rules`, `brand-surfaces`, `brand-arco`, `brand-promise`, `brand-photography`.

**UI kits**
- `ui_kits/site/` — landing da formação ARCO + fluxo de aplicação em duas etapas. Ver `ui_kits/site/README.md`.
- `ui_kits/membros/` — login, painel da trilha e player de aula. Ver `ui_kits/membros/README.md`.

---

## Pendências e substituições declaradas

1. **Fontes por CDN.** Cinzel Decorative, Cinzel e Montserrat carregam do Google Fonts via `@import` em `tokens/fonts.css`. Não recebemos arquivos `.woff2`/`.ttf`; se houver licença própria, envie os binários e trocamos por `@font-face` local.
2. **Cinzel (não decorativa) foi adicionada.** A cliente citou Cinzel Decorative + Montserrat; usar Decorative em todos os títulos prejudica a legibilidade em corpo médio. Cinzel regular entra como irmã tipográfica para H1–H4 e mantém a Decorative para hero e as letras ARCO.
3. **Fotografia parcial.** Recebemos cinco retratos de estúdio (em `assets/photos/`), já aplicados no hero do site e no login da área de membros. Faltam imagens horizontais (16:9), de palco/aula e fotos de alunos para os depoimentos.
4. **Ícones substituídos** por Lucide (CDN) — ver ICONOGRAPHY.
5. **Nomes dos pilares atualizados** conforme briefing da cliente (set/2026): Análise Estratégica da Lacuna™ · Reformulação da Percepção · Construção da Decisão · Organização do Processo. Versões anteriores do sistema usavam nomes provisórios — se algum material antigo trouxer "Raio-X" ou "Abertura", está desatualizado.
6. **Números de prova são exemplos.** "+2.400 profissionais", "de 18% para 34%", preços e depoimentos são *placeholders realistas* para demonstrar o padrão editorial. Precisam ser substituídos pelos dados reais antes de qualquer publicação.
