# UI kit — Site institucional / página da formação

Recriação da superfície pública da marca: a landing da **Arquitetura ARCO™** e o fluxo de aplicação.

- `index.html` — app clicável. Navegação por âncora (Início · Metodologia · Resultados · Dúvidas) e rota separada para a aplicação.
- `Chrome.jsx` — `SiteHeader` (sticky, vidro fosco sobre areia), `SiteFooter` (oliva profundo) e `Photo`, o placeholder de imagem usado onde entram fotos reais.
- `Home.jsx` — Hero, Diagnóstico (seção oliva), Arquitetura ARCO™ (pilares clicáveis), Provas, Oferta, FAQ.
- `Apply.jsx` — formulário de aplicação em duas etapas com estado de sucesso.

Composto inteiramente com os componentes do sistema (`Button`, `Badge`, `Card`, `SectionHeading`, `ArcoPillar`, `StatBlock`, `TestimonialCard`, `Accordion`, `Input`, `Select`, `Textarea`, `Checkbox`, `ProgressBar`). Ícones: Lucide via CDN.

**Placeholders:** todos os retratos e fotos de aula são blocos `Photo` rotulados — não há fotografia da especialista no acervo. Substituir por imagens reais mantendo o véu inferior (`--gradient-protect-bottom`) quando houver texto sobreposto.
