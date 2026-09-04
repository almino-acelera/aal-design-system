const { Button, Card, Badge, Tag, Tabs, ProgressBar, ArcoPillar, StatBlock, Accordion } = window.AALDESIGNSYSTEM_2e9d51;

const TRILHA = [
  { letter: "A", name: "Análise Estratégica da Lacuna™", description: "Realidade atual, estado desejado e o gap com impacto.", done: 6, total: 6 },
  { letter: "R", name: "Reformulação da Percepção", description: "Reenquadrar o problema com precisão.", done: 4, total: 6 },
  { letter: "C", name: "Construção da Decisão", description: "Prioridade, risco, objeções e segurança.", done: 0, total: 6 },
  { letter: "O", name: "Organização do Processo", description: "Prazo, critérios e follow-up.", done: 0, total: 6 }
];

function Dashboard({ go }) {
  const [tab, setTab] = React.useState("trilha");
  const [filtro, setFiltro] = React.useState("todos");
  return (
    <div style={{ padding: "var(--space-8)", display: "grid", gap: "var(--space-8)" }}>
      <Card variant="inverse" padding="var(--space-8)" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--space-8)", alignItems: "center" }}>
        <div>
          <Badge tone="onDark" dot>Aula liberada hoje</Badge>
          <h3 style={{ color: "var(--sand-50)", margin: "var(--space-4) 0 var(--space-2)", fontSize: "var(--fs-h2)" }}>R3 · Reenquadrando o problema em três frases</h3>
          <p style={{ margin: 0, fontWeight: 300, color: "var(--olive-200)", maxWidth: "56ch" }}>
            Como devolver o problema ao cliente com mais precisão do que ele o descreveu.
          </p>
        </div>
        <div style={{ display: "grid", gap: "var(--space-3)", justifyItems: "end" }}>
          <Button variant="secondary" size="lg" onClick={() => go("aula")} iconLeft={<i data-lucide="play" style={{ width: 16, height: 16 }}></i>}>Continuar aula</Button>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", color: "var(--olive-300)" }}>18 min · restam 7 min</span>
        </div>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--space-6)", padding: "var(--space-6) 0", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
        <StatBlock value="42%" label="Formação concluída" note="10 de 24 aulas" />
        <StatBlock value="7" label="Dias de ofensiva" note="Sequência atual" />
        <StatBlock value="2" label="Negociações enviadas" note="Para revisão" />
        <StatBlock value="34%" label="Taxa de fechamento" note="Autodeclarada · setembro" />
      </div>

      <div>
        <Tabs items={[{ value: "trilha", label: "Pilares", count: 24 }, { value: "materiais", label: "Materiais" }, { value: "encontros", label: "Encontros" }]} value={tab} onChange={setTab} />
        {tab === "trilha" && (
          <div style={{ display: "grid", gap: "var(--space-4)", marginTop: "var(--space-6)" }}>
            {TRILHA.map((p, i) => {
              const pct = Math.round((p.done / p.total) * 100);
              return (
                <Card key={p.letter} interactive onClick={() => go("aula")} padding="var(--space-6)" style={{ display: "grid", gridTemplateColumns: "56px 1fr 200px auto", gap: "var(--space-6)", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, lineHeight: .9, color: pct === 100 ? "var(--olive-400)" : "var(--gold-600)", textAlign: "center" }}>{p.letter === "A" ? "A" : p.letter.toLowerCase()}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>Pilar {i + 1}</div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h4)", letterSpacing: "var(--ls-heading)", color: "var(--text-title)", margin: "4px 0" }}>{p.name}</div>
                    <p style={{ margin: 0, fontSize: "var(--fs-caption)", color: "var(--text-muted)", maxWidth: "56ch" }}>{p.description}</p>
                  </div>
                  <ProgressBar size="sm" label={`${p.done}/${p.total} aulas`} value={pct} />
                  {pct === 100 ? <Badge tone="success">Concluído</Badge> : pct > 0 ? <Badge tone="gold">Em curso</Badge> : <Badge tone="neutral">Bloqueado</Badge>}
                </Card>
              );
            })}
          </div>
        )}
        {tab === "materiais" && (
          <div style={{ marginTop: "var(--space-6)" }}>
            <div style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-5)" }}>
              {["todos", "análise", "reformulação", "construção", "organização"].map((f) => (
                <Tag key={f} active={filtro === f} onClick={() => setFiltro(f)}>{f}</Tag>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-4)" }}>
              {[
                { t: "Banco de 40 perguntas de Análise da Lacuna", k: "PDF · 6 páginas" },
                { t: "Roteiro de reenquadramento em videochamada", k: "PDF · 2 páginas" },
                { t: "Planilha de acompanhamento de propostas", k: "XLSX" },
                { t: "Script de contorno: “vou pensar”", k: "PDF · 1 página" },
                { t: "Checklist antes de enviar proposta", k: "PDF · 1 página" },
                { t: "Modelo de follow-up em 3 toques", k: "DOCX" }
              ].map((m) => (
                <Card key={m.t} interactive padding="var(--space-5)">
                  <i data-lucide="file-text" style={{ width: 18, height: 18, color: "var(--gold-700)" }}></i>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-body-sm)", letterSpacing: "var(--ls-heading)", color: "var(--text-title)", margin: "var(--space-4) 0 6px" }}>{m.t}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-subtle)" }}>{m.k}</div>
                </Card>
              ))}
            </div>
          </div>
        )}
        {tab === "encontros" && (
          <div style={{ marginTop: "var(--space-6)" }}>
            <Accordion items={[
              { question: "Quinta, 18h30 · Prática de Análise da Lacuna", answer: "Traga uma negociação em aberto. Vamos explicitar o gap ao vivo, em duplas." },
              { question: "Quinta, 25/09 · Construção da Decisão", answer: "Sessão de role-play sobre risco e segurança: as três objeções mais votadas na comunidade." },
              { question: "Gravações anteriores", answer: "Doze encontros disponíveis na biblioteca, com marcação por minuto." }
            ]} />
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard, TRILHA });
