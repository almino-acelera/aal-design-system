const { IconButton, Button, Logo, Tag } = window.AALDESIGNSYSTEM_2e9d51;

const NAV = [
  { id: "home", label: "Início" },
  { id: "metodo", label: "Metodologia" },
  { id: "provas", label: "Resultados" },
  { id: "faq", label: "Dúvidas" }
];

function SiteHeader({ route, go }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(250,248,242,.88)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "14px var(--gutter-inline)", display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ borderBottom: 0, display: "flex", alignItems: "center", gap: 10 }}>
          <img src="../../assets/mark-bow-arrow.png" alt="" style={{ width: 30 }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: ".08em", lineHeight: 1, whiteSpace: "nowrap", color: "var(--olive-700)" }}>Aline loiola</span>
        </a>
        <nav style={{ display: "flex", gap: "var(--space-6)", marginLeft: "auto" }}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}
              onClick={(e) => { e.preventDefault(); go(n.id); }}
              style={{ borderBottom: 0, fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: route === n.id ? "var(--olive-800)" : "var(--text-muted)" }}>
              {n.label}
            </a>
          ))}
        </nav>
        <Button size="sm" onClick={() => go("aplicar")}>Aplicar para a turma</Button>
      </div>
    </header>
  );
}

function SiteFooter({ go }) {
  return (
    <footer style={{ background: "var(--gradient-olive-deep)", color: "var(--text-on-dark-muted)", padding: "var(--space-16) var(--gutter-inline) var(--space-8)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "var(--space-12)", alignItems: "start" }}>
        <div>
          <img src="../../assets/logo-lockup-light.png" alt="Aline Loiola" style={{ width: 190 }} />
          <p style={{ marginTop: "var(--space-6)", fontSize: "var(--fs-body-sm)", fontWeight: 300, color: "var(--olive-200)", maxWidth: "34ch" }}>
            Formação em vendas consultivas para quem quer fechar mais com a carteira que já tem.
          </p>
        </div>
        <div>
          <div style={{ fontSize: "var(--fs-micro)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: "var(--space-4)" }}>Navegar</div>
          <div style={{ display: "grid", gap: "var(--space-3)" }}>
            {NAV.concat([{ id: "aplicar", label: "Aplicar" }]).map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); go(n.id); }} style={{ borderBottom: 0, color: "var(--olive-200)", fontSize: "var(--fs-body-sm)" }}>{n.label}</a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: "var(--fs-micro)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: "var(--space-4)" }}>Contato</div>
          <div style={{ display: "grid", gap: "var(--space-3)", fontSize: "var(--fs-body-sm)", color: "var(--olive-200)" }}>
            <span>contato@alineloiola.com.br</span>
            <span>@alineloiola</span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "var(--container-xl)", margin: "var(--space-12) auto 0", paddingTop: "var(--space-6)", borderTop: "1px solid var(--border-inverse)", display: "flex", justifyContent: "space-between", fontSize: "var(--fs-caption)", color: "var(--olive-300)" }}>
        <span>© 2026 Aline Loiola · Especialista em Vendas Consultivas</span>
        <span>CNPJ 00.000.000/0001-00</span>
      </div>
    </footer>
  );
}

function Photo({ label, src, ratio = "3 / 4", tone = "olive", objectPosition = "center 20%", scrim = true, style }) {
  const bg = tone === "olive"
    ? "linear-gradient(150deg,#4e4c29,#22210f)"
    : "linear-gradient(150deg,#6b4b32,#26190f)";
  return (
    <div style={{ aspectRatio: ratio, background: bg, borderRadius: "var(--radius-sm)", position: "relative", overflow: "hidden", ...style }}>
      {src
        ? <img src={src} alt={label || ""} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition, filter: "saturate(.92) contrast(1.02)" }} />
        : <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg,rgba(250,248,242,.045) 0 2px,transparent 2px 5px)" }} />}
      {scrim && <div style={{ position: "absolute", inset: 0, background: "var(--gradient-protect-bottom)", opacity: src ? .55 : 1 }} />}
      {label && !src && (
        <div style={{ position: "absolute", left: 16, bottom: 14, fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-300)" }}>
          {label}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, Photo, NAV });
