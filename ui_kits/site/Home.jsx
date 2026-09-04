const { Button, Badge, Card, SectionHeading, ArcoPillar, StatBlock, TestimonialCard, Accordion, Tag } = window.AALDESIGNSYSTEM_2e9d51;

const PILLARS = [
  { letter: "A", name: "Análise Estratégica da Lacuna™", description: "Diagnosticar a realidade atual, o estado desejado e explicitar o gap com impacto." },
  { letter: "R", name: "Reformulação da Percepção", description: "Reenquadrar o problema para o cliente enxergá-lo de forma mais precisa." },
  { letter: "C", name: "Construção da Decisão", description: "Trabalhar prioridade, risco, objeções e segurança até uma decisão madura." },
  { letter: "O", name: "Organização do Processo", description: "Transformar a decisão em próximos passos claros: prazo, critérios e follow-up." }
];

function Hero({ go }) {
  return (
    <section style={{ background: "var(--surface-page)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--section-y) var(--gutter-inline)", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: "var(--space-16)", alignItems: "center" }}>
        <div>
          <Badge tone="gold" dot>Turma de outubro · 40 vagas</Badge>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem,3.4vw,3rem)", lineHeight: 1.12, letterSpacing: ".02em", color: "var(--olive-800)", margin: "var(--space-6) 0 0" }}>
            Ensino profissionais de vendas a fazerem comissões de 5 dígitos
          </h1>
          <div aria-hidden="true" style={{ height: 1, width: 200, background: "var(--gradient-gold)", margin: "var(--space-6) 0" }} />
          <p style={{ fontSize: "var(--fs-body-lg)", fontWeight: 300, color: "var(--text-muted)", maxWidth: "46ch" }}>
            A <strong>Arquitetura ARCO™</strong> transforma diagnóstico em decisão e decisão em compromisso — com a carteira que você já tem.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-8)", flexWrap: "wrap" }}>
            <Button size="lg" onClick={() => go("aplicar")}>Aplicar para a turma</Button>
            <Button size="lg" variant="outline" onClick={() => go("metodo")}>Ver a metodologia</Button>
          </div>
          <div style={{ display: "flex", gap: "var(--space-8)", marginTop: "var(--space-12)", borderTop: "1px solid var(--border-soft)", paddingTop: "var(--space-6)" }}>
            <StatBlock value="+2.400" label="Profissionais treinados" note="2021–2025" />
            <StatBlock value="R$ 10.000" label="Comissão mensal alvo" note="Meta da Arquitetura ARCO™" />
            <StatBlock value="4" label="Pilares" note="Análise · Reformulação · Construção · Organização" />
          </div>
        </div>
        <Photo src="../../assets/photos/retrato-blazer-laranja.png" label="Aline Loiola" ratio="4 / 5" objectPosition="center 18%" scrim={false} />
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "Você dá desconto para não perder a venda.",
    "O cliente diz “vou pensar” e desaparece.",
    "Você fala mais do que pergunta na reunião.",
    "A meta bate, a comissão não."
  ];
  return (
    <section style={{ background: "var(--gradient-olive-deep)", color: "var(--text-on-dark)" }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "var(--section-y) var(--gutter-inline)" }}>
        <SectionHeading onDark align="center" eyebrow="O diagnóstico" title="O problema não é o seu produto" lead="Na maioria das negociações perdidas, o roteiro quebrou antes da proposta." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--space-4)", marginTop: "var(--space-12)" }}>
          {items.map((t) => (
            <div key={t} style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", padding: "var(--space-5) var(--space-6)", border: "1px solid var(--border-inverse)", borderRadius: "var(--radius-sm)" }}>
              <i data-lucide="x" style={{ width: 16, height: 16, color: "var(--gold-500)" }}></i>
              <span style={{ fontSize: "var(--fs-body-sm)", fontWeight: 300, color: "var(--sand-100)" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method({ active, setActive }) {
  return (
    <section id="metodo" style={{ background: "var(--surface-page)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--section-y) var(--gutter-inline)" }}>
        <SectionHeading align="center" eyebrow="Arquitetura ARCO™" title="Diagnóstico em decisão, decisão em compromisso" lead="Quatro movimentos com postura consultiva transversal. Clique em um pilar para ver o que você treina nele." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--space-4)", marginTop: "var(--space-12)" }}>
          {PILLARS.map((p, i) => (
            <ArcoPillar key={p.letter} {...p} index={i + 1} interactive active={active === i} onClick={() => setActive(i)} />
          ))}
        </div>
        <Card variant="inverse" padding="var(--space-8)" style={{ marginTop: "var(--space-8)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-8)", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 68, lineHeight: .8, color: "var(--gold-500)" }}>{PILLARS[active].letter === "A" ? "A" : PILLARS[active].letter.toLowerCase()}</span>
          <div>
            <div style={{ fontSize: "var(--fs-micro)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-400)" }}>Pilar {active + 1} · o que você treina</div>
            <h3 style={{ color: "var(--sand-50)", margin: "var(--space-3) 0 var(--space-3)" }}>{PILLARS[active].name}</h3>
            <p style={{ margin: 0, fontWeight: 300, color: "var(--olive-200)", maxWidth: "62ch" }}>{PILLARS[active].description}</p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="provas" style={{ background: "var(--sand-100)", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--section-y) var(--gutter-inline)" }}>
        <SectionHeading eyebrow="Resultados" title="O que muda depois da Arquitetura ARCO™" lead="Relatos de alunas e alunos das últimas três turmas." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)", marginTop: "var(--space-10)" }}>
          <TestimonialCard quote="Fechei duas propostas na primeira semana só com a Análise da Lacuna. Parei de dar desconto para ser aceita." name="Camila Reis" role="Consultora imobiliária" result="R$ 14 mil em comissões" />
          <TestimonialCard quote="Minha taxa de fechamento saiu de 18% para 34% em dois meses. A diferença foi reformular a percepção do cliente." name="Rafael Menezes" role="Inside sales · SaaS" result="34% de fechamento" />
          <TestimonialCard quote="Aprendi a conduzir a reunião sem falar de preço nos primeiros 20 minutos. O cliente pediu a proposta." name="Juliana Prado" role="Consultora de seguros" result="Ticket 2,1× maior" />
        </div>
      </div>
    </section>
  );
}

function Offer({ go }) {
  const included = [
    "12 semanas da Arquitetura ARCO™ gravada",
    "Encontro semanal de prática ao vivo",
    "Biblioteca de scripts e perguntas",
    "Revisão de uma negociação real sua",
    "Comunidade fechada de alunos",
    "Certificado após os quatro pilares"
  ];
  return (
    <section style={{ background: "var(--surface-page)" }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "var(--section-y) var(--gutter-inline)", display: "grid", gridTemplateColumns: "1fr .9fr", gap: "var(--space-12)", alignItems: "start" }}>
        <div>
          <SectionHeading eyebrow="A formação" title="Arquitetura ARCO™ · turma de outubro" lead="Doze semanas de treino aplicado nas suas negociações reais." />
          <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-8)" }}>
            {included.map((t) => (
              <div key={t} style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                <i data-lucide="check" style={{ width: 15, height: 15, color: "var(--gold-700)" }}></i>
                <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <Card variant="gold" padding="var(--space-8)">
          <Badge tone="warning">Lote 1 · 40 vagas</Badge>
          <div style={{ marginTop: "var(--space-6)", fontFamily: "var(--font-serif)", fontSize: 44, lineHeight: 1, color: "var(--olive-800)" }}>12× R$ 397</div>
          <div style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)", marginTop: 6 }}>ou R$ 3.970 à vista · acesso por 12 meses</div>
          <div aria-hidden="true" style={{ height: 1, background: "var(--gradient-gold)", margin: "var(--space-6) 0" }} />
          <Button fullWidth size="lg" onClick={() => go("aplicar")}>Aplicar para a turma</Button>
          <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--fs-caption)", color: "var(--text-muted)", maxWidth: "none" }}>
            A aplicação leva 2 minutos. Confirmamos sua vaga por WhatsApp no mesmo dia.
          </p>
        </Card>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" style={{ background: "var(--sand-100)", borderTop: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--container-md)", margin: "0 auto", padding: "var(--section-y) var(--gutter-inline)" }}>
        <SectionHeading align="center" eyebrow="Dúvidas" title="Antes de aplicar" />
        <div style={{ marginTop: "var(--space-8)" }}>
          <Accordion items={[
            { question: "Serve para quem nunca vendeu high ticket?", answer: "Sim. O ARCO começa na Análise da Lacuna, então funciona mesmo para quem está no primeiro mês de carteira." },
            { question: "Quanto tempo por semana eu preciso?", answer: "Cerca de duas horas: uma aula gravada e um encontro de prática ao vivo." },
            { question: "E se eu não vender por telefone?", answer: "A metodologia é de conversa, não de canal. Alunos aplicam em reunião presencial, videochamada e WhatsApp." },
            { question: "Tem garantia?", answer: "Sete dias para pedir reembolso integral, sem justificativa." }
          ]} />
        </div>
      </div>
    </section>
  );
}

function Home({ go }) {
  const [active, setActive] = React.useState(0);
  return (
    <main>
      <Hero go={go} />
      <Problem />
      <Method active={active} setActive={setActive} />
      <Proof />
      <Offer go={go} />
      <Faq />
    </main>
  );
}

Object.assign(window, { Home, PILLARS });
