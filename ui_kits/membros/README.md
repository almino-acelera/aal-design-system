# UI kit — Área de membros (Arquitetura ARCO™)

Superfície logada da formação. Fluxo clicável: **login → painel dos pilares → player de aula**.

- `index.html` — app com estado de sessão e rota lateral.
- `Shell.jsx` — `Sidebar` (oliva profundo, progresso fixo no pé) e `Topbar` (branco, eyebrow + título + avatar).
- `Login.jsx` — split 50/50: painel de marca à esquerda, formulário à direita.
- `Dashboard.jsx` — retomada da aula, 4 métricas, abas Pilares / Materiais / Encontros.
- `Lesson.jsx` — player com véu inferior, controles `IconButton`, lista de aulas do pilar, notas e toast de conclusão.

Telas de Scripts, Comunidade e Minha conta ficam **intencionalmente em branco** com aviso — não havia especificação para elas no material fornecido.
