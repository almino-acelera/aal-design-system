const { Button, Card, Input, Checkbox, Logo } = window.AALDESIGNSYSTEM_2e9d51;

function Login({ onEnter }) {
  const [email, setEmail] = React.useState("camila@imob.com.br");
  const [pass, setPass] = React.useState("••••••••");
  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ background: "var(--olive-900)", padding: "var(--space-16) var(--space-12)", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
        <img src="../../assets/photos/retrato-sentada-blazer-laranja.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%", filter: "saturate(.75)", opacity: .5 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,rgba(50,49,26,.82) 0%,rgba(20,20,10,.92) 100%)" }} />
        <img src="../../assets/logo-lockup-light.png" alt="Aline Loiola" style={{ width: 210, position: "relative" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 46, lineHeight: 1.05, letterSpacing: ".02em", color: "var(--sand-50)" }}>Arco</div>
          <div aria-hidden="true" style={{ height: 1, width: 160, background: "linear-gradient(90deg,#a58647,rgba(165,134,71,0))", margin: "var(--space-5) 0" }} />
          <p style={{ margin: 0, fontWeight: 300, fontSize: "var(--fs-body-lg)", color: "var(--olive-200)", maxWidth: "32ch" }}>
            Análise · Reformulação · Construção · Organização. Diagnóstico em decisão, decisão em compromisso.
          </p>
        </div>
        <span style={{ position: "relative", fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", color: "var(--olive-300)" }}>Arquitetura ARCO™ · turma de outubro</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-12)", background: "var(--surface-page)" }}>
        <div style={{ width: "100%", maxWidth: 380 }}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-gold)" }}>Área de alunos</div>
          <h1 style={{ fontSize: "var(--fs-h2)", margin: "var(--space-4) 0 var(--space-6)" }}>Bem-vinda de volta</h1>
          <form onSubmit={(e) => { e.preventDefault(); onEnter(); }} style={{ display: "grid", gap: "var(--space-5)" }}>
            <Input label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} iconLeft={<i data-lucide="mail" style={{ width: 15, height: 15 }}></i>} />
            <Input label="Senha" type="password" value={pass} onChange={(e) => setPass(e.target.value)} iconLeft={<i data-lucide="lock" style={{ width: 15, height: 15 }}></i>} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Checkbox label="Manter conectada" checked onChange={() => {}} />
              <a href="#recuperar" onClick={(e) => e.preventDefault()} style={{ fontSize: "var(--fs-caption)" }}>Esqueci a senha</a>
            </div>
            <Button type="submit" size="lg" fullWidth>Entrar na formação</Button>
          </form>
          <p style={{ marginTop: "var(--space-8)", fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>
            Ainda não é aluna? <a href="#aplicar" onClick={(e) => e.preventDefault()}>Aplicar para a próxima turma</a>
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Login });
