const { Button, Card, Badge, IconButton, Tooltip, Switch, ProgressBar, Toast, Tabs, Textarea } = window.AALDESIGNSYSTEM_2e9d51;

const AULAS = [
  { id: "r1", t: "R1 · O que é reformular a percepção", d: "12 min", done: true },
  { id: "r2", t: "R2 · Ouvir o problema que o cliente conta", d: "15 min", done: true },
  { id: "r3", t: "R3 · Reenquadrando o problema em três frases", d: "18 min", current: true },
  { id: "r4", t: "R4 · Precisão sem confronto", d: "14 min" },
  { id: "r5", t: "R5 · Devolvendo o novo enquadramento", d: "11 min" },
  { id: "r6", t: "R6 · Prática guiada", d: "22 min" }
];

function Lesson({ go }) {
  const [playing, setPlaying] = React.useState(false);
  const [auto, setAuto] = React.useState(true);
  const [tab, setTab] = React.useState("notas");
  const [toast, setToast] = React.useState(false);
  return (
    <div style={{ padding: "var(--space-8)", display: "grid", gridTemplateColumns: "1fr 340px", gap: "var(--space-8)", alignItems: "start" }}>
      <div>
        <div style={{ position: "relative", aspectRatio: "16 / 9", background: "var(--gradient-olive-deep)", borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--border-inverse)" }}>
          <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg,rgba(250,248,242,.03) 0 2px,transparent 2px 6px)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pausar" : "Reproduzir"}
              style={{ width: 74, height: 74, borderRadius: "var(--radius-pill)", border: "1px solid var(--gold-500)", background: "rgba(20,20,10,.4)", color: "var(--gold-300)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)" }}>
              <i data-lucide={playing ? "pause" : "play"} style={{ width: 24, height: 24 }}></i>
            </button>
          </div>
          <div style={{ position: "absolute", inset: "auto 0 0 0", padding: "var(--space-5)", background: "var(--gradient-protect-bottom)" }}>
            <div style={{ height: 3, background: "rgba(250,248,242,.2)", borderRadius: 2, marginBottom: "var(--space-4)" }}>
              <div style={{ width: "62%", height: "100%", background: "var(--gold-500)", borderRadius: 2 }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
              <IconButton label="Voltar 10s" variant="onDark" size="sm"><i data-lucide="rotate-ccw" style={{ width: 14, height: 14 }}></i></IconButton>
              <IconButton label={playing ? "Pausar" : "Reproduzir"} variant="onDark" size="sm" onClick={() => setPlaying(!playing)}><i data-lucide={playing ? "pause" : "play"} style={{ width: 14, height: 14 }}></i></IconButton>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", letterSpacing: ".1em", color: "var(--gold-200)" }}>11:07 / 18:02</span>
              <div style={{ marginLeft: "auto", display: "flex", gap: "var(--space-3)" }}>
                <Tooltip content="Legendas"><IconButton label="Legendas" variant="onDark" size="sm"><i data-lucide="captions" style={{ width: 14, height: 14 }}></i></IconButton></Tooltip>
                <Tooltip content="Tela cheia" placement="left"><IconButton label="Tela cheia" variant="onDark" size="sm"><i data-lucide="maximize" style={{ width: 14, height: 14 }}></i></IconButton></Tooltip>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-6)", marginTop: "var(--space-6)" }}>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-gold)" }}>Pilar R · Reformulação da Percepção · Aula 3</div>
            <h3 style={{ margin: "var(--space-3) 0 0", fontSize: "var(--fs-h2)" }}>Reenquadrando o problema em três frases</h3>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: "var(--space-3)" }}>
            <Button variant="outline" iconLeft={<i data-lucide="download" style={{ width: 15, height: 15 }}></i>}>Baixar script</Button>
            <Button onClick={() => setToast(true)} iconLeft={<i data-lucide="check" style={{ width: 15, height: 15 }}></i>}>Marcar concluída</Button>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-8)" }}>
          <Tabs items={[{ value: "notas", label: "Minhas notas" }, { value: "resumo", label: "Resumo" }, { value: "duvidas", label: "Dúvidas", count: 3 }]} value={tab} onChange={setTab} />
          <div style={{ marginTop: "var(--space-6)" }}>
            {tab === "notas" && <Textarea label="Anotações desta aula" rows={5} placeholder="O que você vai testar na próxima reunião?" />}
            {tab === "resumo" && (
              <ol style={{ margin: 0, paddingLeft: 20, fontSize: "var(--fs-body-sm)", color: "var(--text-body)", lineHeight: "var(--lh-body)" }}>
                <li>Repita o problema do cliente com as palavras dele.</li>
                <li>Devolva o mesmo problema com uma precisão que ele não tinha.</li>
                <li>Confirme o novo enquadramento antes de seguir.</li>
              </ol>
            )}
            {tab === "duvidas" && (
              <div style={{ display: "grid", gap: "var(--space-3)" }}>
                {["E quando o cliente discorda do reenquadramento?", "Funciona em venda por WhatsApp?", "Como registrar isso no CRM?"].map((q) => (
                  <Card key={q} padding="var(--space-4)" style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                    <i data-lucide="message-circle" style={{ width: 15, height: 15, color: "var(--gold-700)" }}></i>
                    <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{q}</span>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gap: "var(--space-5)" }}>
        <Card padding="var(--space-5)">
          <ProgressBar label="Pilar R — Reformulação" value={42} />
          <div style={{ display: "grid", gap: 2, marginTop: "var(--space-5)" }}>
            {AULAS.map((a) => (
              <button key={a.id} type="button"
                style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", textAlign: "left", padding: "10px", border: 0, borderRadius: "var(--radius-sm)", cursor: "pointer", background: a.current ? "var(--gold-50)" : "transparent", fontFamily: "var(--font-sans)" }}>
                <i data-lucide={a.done ? "check-circle-2" : a.current ? "play-circle" : "circle"} style={{ width: 16, height: 16, color: a.done ? "var(--success-600)" : a.current ? "var(--gold-700)" : "var(--text-subtle)", flex: "0 0 auto" }}></i>
                <span style={{ flex: 1, fontSize: "var(--fs-caption)", color: a.current ? "var(--olive-800)" : "var(--text-body)", fontWeight: a.current ? 600 : 400 }}>{a.t}</span>
                <span style={{ fontSize: "var(--fs-micro)", color: "var(--text-subtle)" }}>{a.d}</span>
              </button>
            ))}
          </div>
        </Card>
        <Card variant="gold" padding="var(--space-5)">
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-800)" }}>Próximo encontro</div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h4)", color: "var(--text-title)", margin: "var(--space-3) 0 6px" }}>Prática de Análise da Lacuna</div>
          <p style={{ margin: 0, fontSize: "var(--fs-caption)", color: "var(--text-muted)", maxWidth: "none" }}>Quinta, 18h30 · traga uma negociação em aberto.</p>
          <Button variant="outline" size="sm" fullWidth style={{ marginTop: "var(--space-5)" }}>Adicionar à agenda</Button>
        </Card>
        <Switch label="Reprodução automática" checked={auto} onChange={(e) => setAuto(e.target.checked)} />
      </div>

      {toast && (
        <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 50 }}>
          <Toast tone="success" title="Aula marcada como concluída" description="Seu progresso no Pilar R subiu para 50%." icon={<i data-lucide="check" style={{ width: 15, height: 15 }}></i>} onClose={() => setToast(false)} />
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Lesson, AULAS });
