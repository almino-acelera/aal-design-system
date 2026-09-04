const { Badge, ProgressBar, IconButton, Tooltip, Tag } = window.AALDESIGNSYSTEM_2e9d51;

const MENU = [
  { id: "trilha", label: "Arquitetura ARCO™", icon: "target" },
  { id: "aula", label: "Aula atual", icon: "play-circle" },
  { id: "scripts", label: "Scripts", icon: "file-text" },
  { id: "comunidade", label: "Comunidade", icon: "users" },
  { id: "conta", label: "Minha conta", icon: "user" }
];

function Sidebar({ route, go }) {
  return (
    <aside style={{ width: 248, flex: "0 0 248px", background: "var(--gradient-olive-deep)", padding: "var(--space-6) var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-8)", borderRight: "1px solid var(--border-inverse)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 var(--space-2)" }}>
        <img src="../../assets/mark-bow-arrow-light.png" alt="" style={{ width: 28 }} />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: ".08em", lineHeight: 1, whiteSpace: "nowrap", color: "var(--gold-300)" }}>Aline loiola</span>
      </div>
      <nav style={{ display: "grid", gap: 2 }}>
        {MENU.map((m) => {
          const on = route === m.id;
          return (
            <button key={m.id} type="button" onClick={() => go(m.id)}
              style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px 12px", border: 0, borderRadius: "var(--radius-sm)", cursor: "pointer", textAlign: "left", background: on ? "rgba(220,199,154,.12)" : "transparent", color: on ? "var(--gold-200)" : "var(--olive-200)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", fontWeight: on ? 600 : 400, transition: "var(--transition-base)" }}>
              <i data-lucide={m.icon} style={{ width: 16, height: 16 }}></i>
              {m.label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: "auto", padding: "var(--space-4)", border: "1px solid var(--border-inverse)", borderRadius: "var(--radius-sm)" }}>
        <ProgressBar onDark label="Arquitetura ARCO™" value={42} />
        <p style={{ margin: "var(--space-3) 0 0", fontSize: "var(--fs-caption)", color: "var(--olive-300)", maxWidth: "none" }}>10 de 24 aulas concluídas</p>
      </div>
    </aside>
  );
}

function Topbar({ title, eyebrow, onLogout }) {
  return (
    <header style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", padding: "var(--space-5) var(--space-8)", borderBottom: "1px solid var(--border-soft)", background: "var(--surface-card)" }}>
      <div>
        {eyebrow && <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-gold)" }}>{eyebrow}</div>}
        <h2 style={{ margin: "6px 0 0", fontSize: "var(--fs-h3)" }}>{title}</h2>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        <Tooltip content="Notificações"><IconButton label="Notificações" variant="ghost"><i data-lucide="bell" style={{ width: 16, height: 16 }}></i></IconButton></Tooltip>
        <Tooltip content="Sair" placement="left"><IconButton label="Sair" variant="ghost" onClick={onLogout}><i data-lucide="log-out" style={{ width: 16, height: 16 }}></i></IconButton></Tooltip>
        <div style={{ display: "flex", alignItems: "center", gap: 10, paddingLeft: "var(--space-4)", borderLeft: "1px solid var(--border-soft)" }}>
          <span style={{ width: 34, height: 34, borderRadius: "var(--radius-pill)", background: "var(--olive-600)", color: "var(--gold-200)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: 13 }}>CR</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", color: "var(--text-body)" }}>Camila Reis</span>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Sidebar, Topbar, MENU });
