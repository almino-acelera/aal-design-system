const { Button, Card, Input, Textarea, Select, Checkbox, SectionHeading, Badge, ProgressBar, Toast } = window.AALDESIGNSYSTEM_2e9d51;

function Apply({ go }) {
  const [step, setStep] = React.useState(1);
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ nome: "", email: "", whats: "", ticket: "", travou: "", ok: false });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  return (
    <main style={{ background: "var(--surface-page)", minHeight: "70vh" }}>
      <div style={{ maxWidth: "var(--container-md)", margin: "0 auto", padding: "var(--section-y) var(--gutter-inline)" }}>
        <SectionHeading align="center" eyebrow="Aplicação · turma de outubro" title={sent ? "Aplicação enviada" : "Duas etapas, dois minutos"} lead={sent ? "Nossa equipe confirma sua vaga por WhatsApp hoje mesmo." : "Usamos suas respostas para montar os grupos de prática."} />

        <Card padding="var(--space-8)" style={{ marginTop: "var(--space-10)" }}>
          {sent ? (
            <div style={{ display: "grid", gap: "var(--space-6)", justifyItems: "center", textAlign: "center", padding: "var(--space-6) 0" }}>
              <img src="../../assets/mark-bow-arrow.png" alt="" style={{ width: 74 }} />
              <p style={{ margin: 0, color: "var(--text-muted)" }}>Enviamos um e-mail de confirmação para <strong>{form.email || "seu e-mail"}</strong>.</p>
              <Button variant="outline" onClick={() => go("home")}>Voltar ao início</Button>
            </div>
          ) : (
            <>
              <ProgressBar label={`Etapa ${step} de 2`} value={step === 1 ? 50 : 100} style={{ marginBottom: "var(--space-8)" }} />
              {step === 1 ? (
                <div style={{ display: "grid", gap: "var(--space-5)" }}>
                  <Input label="Nome completo" value={form.nome} onChange={set("nome")} placeholder="Como devemos te chamar" />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
                    <Input label="Seu melhor e-mail" type="email" value={form.email} onChange={set("email")} placeholder="nome@empresa.com" />
                    <Input label="WhatsApp" value={form.whats} onChange={set("whats")} placeholder="(11) 90000-0000" />
                  </div>
                  <Select label="Ticket médio que você vende hoje" value={form.ticket} onChange={set("ticket")} options={["Até R$ 2 mil", "R$ 2 a 10 mil", "R$ 10 a 50 mil", "Acima de R$ 50 mil"]} />
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "var(--space-2)" }}>
                    <Button onClick={() => setStep(2)} iconRight={<i data-lucide="arrow-right" style={{ width: 15, height: 15 }}></i>}>Continuar</Button>
                  </div>
                </div>
              ) : (
                <div style={{ display: "grid", gap: "var(--space-5)" }}>
                  <Textarea label="Qual é a lacuna entre onde seu cliente está e onde ele quer chegar?" rows={5} value={form.travou} onChange={set("travou")} placeholder="Escreva em duas ou três frases — quanto mais concreto, melhor." />
                  <Checkbox label="Aceito receber os avisos da turma no WhatsApp" description="Só avisos da formação. Sem lista de transmissão." checked={form.ok} onChange={set("ok")} />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-2)" }}>
                    <Button variant="ghost" onClick={() => setStep(1)}>Voltar</Button>
                    <Button variant="secondary" onClick={() => setSent(true)}>Enviar aplicação</Button>
                  </div>
                </div>
              )}
            </>
          )}
        </Card>

        <div style={{ display: "flex", gap: "var(--space-6)", justifyContent: "center", marginTop: "var(--space-8)", fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>
          <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i data-lucide="shield-check" style={{ width: 14, height: 14, color: "var(--gold-700)" }}></i> 7 dias de garantia</span>
          <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i data-lucide="lock" style={{ width: 14, height: 14, color: "var(--gold-700)" }}></i> Dados protegidos</span>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { Apply });
