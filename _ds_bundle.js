/* @ds-bundle: {"format":4,"namespace":"AALDESIGNSYSTEM_2e9d51","components":[{"name":"ArcoPillar","sourcePath":"components/brand/ArcoPillar.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/brand/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/ArcoPillar.jsx":"7667ba6a889f","components/brand/Logo.jsx":"3abc560d641c","components/brand/SectionHeading.jsx":"2e3bddc5564f","components/brand/StatBlock.jsx":"1ed9981beed4","components/brand/TestimonialCard.jsx":"6109be1c657a","components/core/Badge.jsx":"a603a0b04b3a","components/core/Button.jsx":"aab54cc2f3d0","components/core/Card.jsx":"7cdde1da14ab","components/core/IconButton.jsx":"2781a4faae4b","components/core/Tag.jsx":"8ce91ccfe6d1","components/feedback/Dialog.jsx":"8333f2b35b8f","components/feedback/ProgressBar.jsx":"2375c51686d5","components/feedback/Toast.jsx":"6762a1d48076","components/feedback/Tooltip.jsx":"654ed19d87e9","components/forms/Checkbox.jsx":"277037e203cc","components/forms/Input.jsx":"dfdc037a76da","components/forms/Radio.jsx":"d480448eeeb8","components/forms/Select.jsx":"baf785f7b5ee","components/forms/Switch.jsx":"7d1fd397cf40","components/forms/Textarea.jsx":"b8e1fb703464","components/navigation/Accordion.jsx":"c86c0aad227e","components/navigation/Tabs.jsx":"1771ca624368","ui_kits/membros/Dashboard.jsx":"dc5e884028e4","ui_kits/membros/Lesson.jsx":"1b933f7e6532","ui_kits/membros/Login.jsx":"390156c8c27f","ui_kits/membros/Shell.jsx":"28c0e54777fa","ui_kits/site/Apply.jsx":"d612e3ee1887","ui_kits/site/Chrome.jsx":"ec91996e61b0","ui_kits/site/Home.jsx":"efb159c27be4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AALDESIGNSYSTEM_2e9d51 = window.AALDESIGNSYSTEM_2e9d51 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ArcoPillar.jsx
try { (() => {
function ArcoPillar({
  letter,
  name,
  description,
  index,
  onDark = false,
  interactive = false,
  active = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && (hover || active);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "flex-start",
      padding: "var(--space-6)",
      borderRadius: "var(--radius-sm)",
      background: onDark ? lift ? "rgba(220,199,154,.07)" : "transparent" : lift ? "var(--white)" : "var(--surface-gold)",
      border: `1px solid ${onDark ? "var(--border-inverse)" : active ? "var(--gold-600)" : "var(--border-hairline)"}`,
      boxShadow: lift && !onDark ? "var(--shadow-md)" : "none",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: .9,
      color: onDark ? "var(--gold-400)" : "var(--gold-600)"
    }
  }, letter === "A" ? "A" : String(letter).toLowerCase()), /*#__PURE__*/React.createElement("div", null, index != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: onDark ? "var(--olive-200)" : "var(--text-muted)",
      marginBottom: 6
    }
  }, "Pilar ", index), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h4)",
      letterSpacing: "var(--ls-heading)",
      color: onDark ? "var(--sand-50)" : "var(--text-title)",
      marginBottom: 6
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-body)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)",
      maxWidth: "42ch"
    }
  }, description)));
}
Object.assign(__ds_scope, { ArcoPillar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ArcoPillar.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Type-set fallback wordmark — used when no image src is supplied. */
function TypeMark({
  tagline,
  onDark,
  size
}) {
  const scale = size / 220;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      textAlign: "center",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 26 * scale * 1.6,
      letterSpacing: ".06em",
      color: onDark ? "var(--gold-300)" : "var(--olive-700)"
    }
  }, "Aline loiola"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "block",
      height: 1,
      margin: `${8 * scale * 1.6}px 0`,
      background: "var(--gradient-gold)"
    }
  }), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: Math.max(7, 8 * scale * 1.6),
      fontWeight: 500,
      letterSpacing: ".2em",
      textTransform: "uppercase",
      color: onDark ? "var(--olive-200)" : "var(--olive-500)"
    }
  }, "Especialista em Vendas Consultivas"));
}
function Logo({
  variant = "lockup",
  src,
  size = 180,
  onDark = false,
  tagline = true,
  style,
  ...rest
}) {
  if (!src) return /*#__PURE__*/React.createElement(TypeMark, {
    tagline: tagline && variant !== "mark",
    onDark: onDark,
    size: size
  });
  const isMark = variant === "mark";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Aline Loiola \u2014 Especialista em Vendas Consultivas",
    style: {
      display: "block",
      width: isMark ? size * 0.55 : size,
      height: "auto",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  onDark = false,
  rule = true,
  level = "h2",
  style
}) {
  const H = level;
  const center = align === "center";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: center ? "var(--container-md)" : "none",
      marginInline: center ? "auto" : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: onDark ? "var(--gold-400)" : "var(--text-gold)",
      marginBottom: "var(--space-4)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement(H, {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-heading)",
      lineHeight: "var(--lh-heading)",
      color: onDark ? "var(--sand-50)" : "var(--text-title)",
      margin: 0
    }
  }, title), rule && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 1,
      width: center ? 180 : 120,
      margin: center ? "var(--space-5) auto" : "var(--space-5) 0",
      background: onDark ? "linear-gradient(90deg,#a58647,rgba(165,134,71,0))" : "var(--gradient-gold)",
      backgroundPosition: center ? "center" : "left"
    }
  }), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-lg)",
      fontWeight: "var(--fw-light)",
      lineHeight: "var(--lh-body)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)",
      maxWidth: "var(--measure)",
      marginInline: center ? "auto" : 0,
      marginBottom: 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  note,
  align = "left",
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "clamp(2.25rem,3.4vw,3rem)",
      lineHeight: 1,
      letterSpacing: "var(--ls-display)",
      color: onDark ? "var(--gold-300)" : "var(--olive-700)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: onDark ? "var(--olive-200)" : "var(--text-muted)"
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      color: onDark ? "var(--olive-300)" : "var(--text-subtle)"
    }
  }, note));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/brand/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  role,
  result,
  avatar,
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      padding: "var(--space-8)",
      borderRadius: "var(--radius-sm)",
      background: onDark ? "var(--surface-inverse-alt)" : "var(--surface-card)",
      border: `1px solid ${onDark ? "var(--border-inverse)" : "var(--border-soft)"}`,
      boxShadow: onDark ? "none" : "var(--shadow-xs)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 34,
      lineHeight: .6,
      color: onDark ? "var(--gold-500)" : "var(--gold-400)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-light)",
      lineHeight: "var(--lh-body)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-body)"
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      borderTop: `1px solid ${onDark ? "var(--border-inverse)" : "var(--border-soft)"}`,
      paddingTop: "var(--space-5)"
    }
  }, avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-pill)",
      objectFit: "cover",
      filter: "saturate(.9)"
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-body-sm)",
      letterSpacing: "var(--ls-heading)",
      color: onDark ? "var(--sand-50)" : "var(--text-title)"
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      color: onDark ? "var(--olive-200)" : "var(--text-muted)"
    }
  }, role)), result && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: onDark ? "var(--gold-300)" : "var(--text-gold)",
      textAlign: "right"
    }
  }, result)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  olive: {
    background: "var(--olive-50)",
    color: "var(--olive-700)",
    border: "var(--olive-200)"
  },
  gold: {
    background: "var(--gold-50)",
    color: "var(--gold-800)",
    border: "var(--gold-300)"
  },
  success: {
    background: "var(--success-100)",
    color: "var(--success-600)",
    border: "rgba(92,122,60,.3)"
  },
  warning: {
    background: "var(--warning-100)",
    color: "var(--warning-600)",
    border: "rgba(165,134,71,.35)"
  },
  danger: {
    background: "var(--danger-100)",
    color: "var(--danger-600)",
    border: "rgba(158,58,42,.28)"
  },
  neutral: {
    background: "var(--sand-100)",
    color: "var(--text-muted)",
    border: "var(--sand-300)"
  },
  onDark: {
    background: "rgba(220,199,154,.12)",
    color: "var(--gold-300)",
    border: "var(--border-inverse)"
  }
};
function Badge({
  children,
  tone = "olive",
  solid = false,
  dot = false,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.olive;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "4px 10px",
      borderRadius: "var(--radius-xs)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      lineHeight: 1.5,
      background: solid ? t.color : t.background,
      color: solid ? "var(--sand-50)" : t.color,
      border: `1px solid ${solid ? "transparent" : t.border}`,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "var(--radius-pill)",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--fw-semibold)",
  textTransform: "uppercase",
  letterSpacing: "var(--ls-button)",
  border: "1px solid transparent",
  borderRadius: "var(--radius-sm)",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard),transform var(--dur-instant) var(--ease-standard)"
};
const sizes = {
  sm: {
    padding: "8px 16px",
    fontSize: "var(--fs-micro)"
  },
  md: {
    padding: "13px 26px",
    fontSize: "var(--fs-caption)"
  },
  lg: {
    padding: "17px 38px",
    fontSize: "var(--fs-body-sm)"
  }
};
const variants = {
  primary: {
    rest: {
      background: "var(--olive-600)",
      color: "var(--sand-50)",
      borderColor: "var(--olive-600)",
      boxShadow: "var(--shadow-sm)"
    },
    hover: {
      background: "var(--olive-800)",
      borderColor: "var(--olive-800)",
      boxShadow: "var(--shadow-md)"
    }
  },
  secondary: {
    rest: {
      background: "var(--gold-600)",
      color: "var(--olive-900)",
      borderColor: "var(--gold-600)",
      boxShadow: "var(--shadow-sm)"
    },
    hover: {
      background: "var(--gold-700)",
      color: "var(--sand-50)",
      borderColor: "var(--gold-700)",
      boxShadow: "var(--shadow-md)"
    }
  },
  outline: {
    rest: {
      background: "transparent",
      color: "var(--olive-700)",
      borderColor: "var(--border-strong)"
    },
    hover: {
      background: "var(--olive-50)",
      color: "var(--olive-800)",
      borderColor: "var(--olive-600)"
    }
  },
  ghost: {
    rest: {
      background: "transparent",
      color: "var(--text-gold)",
      borderColor: "transparent"
    },
    hover: {
      background: "var(--gold-50)",
      color: "var(--gold-800)"
    }
  },
  accent: {
    rest: {
      background: "var(--orange-600)",
      color: "var(--white)",
      borderColor: "var(--orange-600)",
      boxShadow: "var(--shadow-sm)"
    },
    hover: {
      background: "var(--orange-700)",
      borderColor: "var(--orange-700)",
      boxShadow: "var(--shadow-md)"
    }
  },
  onDark: {
    rest: {
      background: "transparent",
      color: "var(--gold-300)",
      borderColor: "var(--border-inverse)"
    },
    hover: {
      background: "rgba(220,199,154,.1)",
      color: "var(--gold-200)",
      borderColor: "var(--gold-400)"
    }
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const css = {
    ...base,
    ...sizes[size],
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? {
      transform: "translateY(1px)",
      boxShadow: "var(--shadow-xs)"
    } : null),
    ...(disabled ? {
      opacity: 0.45,
      cursor: "not-allowed",
      boxShadow: "none"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...style
  };
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: Tag === "button" ? type : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = "default",
  padding = "var(--space-6)",
  interactive = false,
  as = "div",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-soft)",
      boxShadow: "var(--shadow-xs)"
    },
    gold: {
      background: "var(--surface-gold)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "none"
    },
    raised: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-soft)",
      boxShadow: "var(--shadow-md)"
    },
    flat: {
      background: "transparent",
      border: "1px solid var(--border-hairline)",
      boxShadow: "none"
    },
    inverse: {
      background: "var(--surface-inverse-alt)",
      border: "1px solid var(--border-inverse)",
      boxShadow: "none",
      color: "var(--text-on-dark)"
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-sm)",
      padding,
      transition: "var(--transition-base)",
      ...variants[variant],
      ...(interactive ? {
        cursor: "pointer"
      } : null),
      ...(interactive && hover ? {
        boxShadow: "var(--shadow-md)",
        borderColor: "var(--border-hairline)",
        transform: "translateY(-2px)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  children,
  label,
  variant = "outline",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size] || sizes.md;
  const palette = {
    outline: {
      background: "transparent",
      color: "var(--olive-700)",
      borderColor: "var(--border-strong)"
    },
    solid: {
      background: "var(--olive-600)",
      color: "var(--sand-50)",
      borderColor: "var(--olive-600)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      borderColor: "transparent"
    },
    onDark: {
      background: "rgba(250,248,242,.06)",
      color: "var(--gold-300)",
      borderColor: "var(--border-inverse)"
    }
  }[variant];
  const hoverCss = {
    outline: {
      background: "var(--olive-50)",
      borderColor: "var(--olive-600)",
      color: "var(--olive-800)"
    },
    solid: {
      background: "var(--olive-800)",
      borderColor: "var(--olive-800)"
    },
    ghost: {
      background: "var(--sand-100)",
      color: "var(--olive-700)"
    },
    onDark: {
      background: "rgba(220,199,154,.14)",
      color: "var(--gold-200)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "var(--transition-base)",
      ...palette,
      ...(hover && !disabled ? hoverCss : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  icon,
  onRemove,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: ".02em",
      cursor: interactive ? "pointer" : "default",
      background: active ? "var(--olive-600)" : hover && interactive ? "var(--sand-100)" : "transparent",
      color: active ? "var(--sand-50)" : "var(--text-body)",
      border: `1px solid ${active ? "var(--olive-600)" : "var(--border-hairline)"}`,
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), icon, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remover",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: 0,
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      padding: 0,
      lineHeight: 1,
      fontSize: 14,
      opacity: .7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 520,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "var(--overlay-scrim)",
      backdropFilter: "blur(3px)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--space-8)",
      animation: "none",
      position: "relative",
      ...style
    }
  }, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 14,
      right: 16,
      border: 0,
      background: "transparent",
      color: "var(--text-subtle)",
      fontSize: 20,
      lineHeight: 1,
      cursor: "pointer"
    }
  }, "\xD7"), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-gold)",
      marginBottom: "var(--space-3)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h3)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-title)",
      margin: "0 0 var(--space-3)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      lineHeight: "var(--lh-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end",
      marginTop: "var(--space-6)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  label,
  showValue = true,
  onDark = false,
  size = "md",
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  const h = size === "sm" ? 4 : 8;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: onDark ? "var(--olive-200)" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? "var(--gold-300)" : "var(--text-gold)"
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      height: h,
      borderRadius: "var(--radius-pill)",
      background: onDark ? "rgba(250,248,242,.12)" : "var(--sand-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: "linear-gradient(90deg,var(--gold-700),var(--gold-500))",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  success: {
    accent: "var(--success-600)",
    bg: "var(--success-100)"
  },
  info: {
    accent: "var(--olive-600)",
    bg: "var(--olive-50)"
  },
  warning: {
    accent: "var(--gold-700)",
    bg: "var(--gold-50)"
  },
  danger: {
    accent: "var(--danger-600)",
    bg: "var(--danger-100)"
  }
};
function Toast({
  title,
  description,
  tone = "info",
  icon,
  onClose,
  style
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      minWidth: 300,
      maxWidth: 420,
      background: "var(--surface-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      padding: "var(--space-4)",
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "0 auto 0 0",
      width: 3,
      background: t.accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: 28,
      height: 28,
      borderRadius: "var(--radius-xs)",
      background: t.bg,
      color: t.accent,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 3
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-title)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 2,
      lineHeight: 1.5
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      border: 0,
      background: "transparent",
      color: "var(--text-subtle)",
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  placement = "top",
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 40,
      pointerEvents: "none",
      whiteSpace: "nowrap",
      background: "var(--olive-900)",
      color: "var(--sand-100)",
      borderRadius: "var(--radius-xs)",
      padding: "6px 10px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      letterSpacing: ".04em",
      boxShadow: "var(--shadow-sm)",
      opacity: show ? 1 : 0,
      transition: "opacity var(--dur-fast) var(--ease-standard)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: 18,
      height: 18,
      marginTop: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-xs)",
      border: `1px solid ${checked ? "var(--olive-600)" : "var(--sand-300)"}`,
      background: checked ? "var(--olive-600)" : "var(--white)",
      transition: "var(--transition-base)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: "2px solid var(--sand-50)",
      borderBottom: "2px solid var(--sand-50)",
      transform: "rotate(-45deg) translateY(-1px)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      lineHeight: 1.45
    }
  }, label, description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelCss = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--fs-micro)",
  fontWeight: "var(--fw-semibold)",
  letterSpacing: "var(--ls-eyebrow)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-2)"
};
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  iconLeft,
  onDark = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const borderColor = error ? "var(--danger-600)" : focus ? "var(--gold-600)" : onDark ? "var(--border-inverse)" : "var(--sand-300)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      ...labelCss,
      color: onDark ? "var(--text-on-dark-muted)" : labelCss.color
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      display: "flex",
      color: "var(--text-subtle)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-title)",
      background: disabled ? "var(--sand-100)" : onDark ? "rgba(250,248,242,.05)" : "var(--white)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      padding: iconLeft ? "12px 14px 12px 38px" : "12px 14px",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
      transition: "var(--transition-base)",
      opacity: disabled ? .6 : 1
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger-600)" : "var(--text-muted)",
      maxWidth: "none"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: 18,
      height: 18,
      marginTop: 2,
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${checked ? "var(--olive-600)" : "var(--sand-300)"}`,
      background: "var(--white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-base)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "var(--radius-pill)",
      background: "var(--olive-600)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      lineHeight: 1.45
    }
  }, label, description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  value,
  onChange,
  options = [],
  placeholder = "Selecione…",
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-2)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: value ? "var(--text-title)" : "var(--text-subtle)",
      background: disabled ? "var(--sand-100)" : "var(--white)",
      border: `1px solid ${error ? "var(--danger-600)" : focus ? "var(--gold-600)" : "var(--sand-300)"}`,
      borderRadius: "var(--radius-sm)",
      padding: "12px 38px 12px 14px",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
      transition: "var(--transition-base)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-60%) rotate(45deg)",
      width: 7,
      height: 7,
      borderRight: "1.5px solid var(--gold-700)",
      borderBottom: "1.5px solid var(--gold-700)",
      pointerEvents: "none"
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger-600)" : "var(--text-muted)",
      maxWidth: "none"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      gap: "var(--space-3)",
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 42,
      height: 22,
      borderRadius: "var(--radius-pill)",
      padding: 2,
      display: "flex",
      alignItems: "center",
      background: checked ? "var(--olive-600)" : "var(--sand-300)",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      boxShadow: "var(--shadow-xs)",
      transform: `translateX(${checked ? 20 : 0}px)`,
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-2)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      resize: "vertical",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-title)",
      background: disabled ? "var(--sand-100)" : "var(--white)",
      border: `1px solid ${error ? "var(--danger-600)" : focus ? "var(--gold-600)" : "var(--sand-300)"}`,
      borderRadius: "var(--radius-sm)",
      padding: "12px 14px",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
      transition: "var(--transition-base)"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger-600)" : "var(--text-muted)",
      maxWidth: "none"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-soft)",
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-soft)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(on ? -1 : i),
      "aria-expanded": on,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        textAlign: "left",
        padding: "var(--space-5) 0",
        fontFamily: "var(--font-serif)",
        fontSize: "var(--fs-h4)",
        letterSpacing: "var(--ls-heading)",
        color: on ? "var(--olive-800)" : "var(--text-body)",
        transition: "var(--transition-base)"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.question || it.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flex: "0 0 auto",
        width: 22,
        height: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--gold-700)",
        fontSize: 18,
        transform: on ? "rotate(45deg)" : "none",
        transition: "transform var(--dur-base) var(--ease-standard)"
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: on ? 320 : 0,
        overflow: "hidden",
        transition: "max-height var(--dur-slow) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 0 var(--space-5)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-body-sm)",
        color: "var(--text-muted)",
        lineHeight: "var(--lh-body)",
        maxWidth: "var(--measure)"
      }
    }, it.answer || it.children)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  style
}) {
  const active = value ?? (items[0] && (items[0].value || items[0]));
  const norm = items.map(i => typeof i === "string" ? {
    value: i,
    label: i
  } : i);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: variant === "underline" ? "var(--space-6)" : "var(--space-2)",
      borderBottom: variant === "underline" ? "1px solid var(--border-soft)" : "none",
      ...style
    }
  }, norm.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(t.value),
      style: {
        border: 0,
        background: variant === "pill" ? on ? "var(--olive-600)" : "transparent" : "transparent",
        color: on ? variant === "pill" ? "var(--sand-50)" : "var(--olive-800)" : "var(--text-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-caption)",
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
        letterSpacing: "var(--ls-button)",
        textTransform: "uppercase",
        cursor: "pointer",
        padding: variant === "pill" ? "8px 16px" : "0 0 12px",
        borderRadius: variant === "pill" ? "var(--radius-sm)" : 0,
        borderBottom: variant === "underline" ? `2px solid ${on ? "var(--gold-600)" : "transparent"}` : "none",
        marginBottom: variant === "underline" ? -1 : 0,
        transition: "var(--transition-base)"
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        opacity: .6,
        fontWeight: "var(--fw-regular)"
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/membros/Dashboard.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Tabs,
  ProgressBar,
  ArcoPillar,
  StatBlock,
  Accordion
} = window.AALDESIGNSYSTEM_2e9d51;
const TRILHA = [{
  letter: "A",
  name: "Análise Estratégica da Lacuna™",
  description: "Realidade atual, estado desejado e o gap com impacto.",
  done: 6,
  total: 6
}, {
  letter: "R",
  name: "Reformulação da Percepção",
  description: "Reenquadrar o problema com precisão.",
  done: 4,
  total: 6
}, {
  letter: "C",
  name: "Construção da Decisão",
  description: "Prioridade, risco, objeções e segurança.",
  done: 0,
  total: 6
}, {
  letter: "O",
  name: "Organização do Processo",
  description: "Prazo, critérios e follow-up.",
  done: 0,
  total: 6
}];
function Dashboard({
  go
}) {
  const [tab, setTab] = React.useState("trilha");
  const [filtro, setFiltro] = React.useState("todos");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8)",
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "var(--space-8)",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    dot: true
  }, "Aula liberada hoje"), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "var(--sand-50)",
      margin: "var(--space-4) 0 var(--space-2)",
      fontSize: "var(--fs-h2)"
    }
  }, "R3 \xB7 Reenquadrando o problema em tr\xEAs frases"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      color: "var(--olive-200)",
      maxWidth: "56ch"
    }
  }, "Como devolver o problema ao cliente com mais precis\xE3o do que ele o descreveu.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go("aula"),
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "play",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Continuar aula"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      color: "var(--olive-300)"
    }
  }, "18 min \xB7 restam 7 min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-6)",
      padding: "var(--space-6) 0",
      borderTop: "1px solid var(--border-soft)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "42%",
    label: "Forma\xE7\xE3o conclu\xEDda",
    note: "10 de 24 aulas"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "7",
    label: "Dias de ofensiva",
    note: "Sequ\xEAncia atual"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "2",
    label: "Negocia\xE7\xF5es enviadas",
    note: "Para revis\xE3o"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "34%",
    label: "Taxa de fechamento",
    note: "Autodeclarada \xB7 setembro"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "trilha",
      label: "Pilares",
      count: 24
    }, {
      value: "materiais",
      label: "Materiais"
    }, {
      value: "encontros",
      label: "Encontros"
    }],
    value: tab,
    onChange: setTab
  }), tab === "trilha" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, TRILHA.map((p, i) => {
    const pct = Math.round(p.done / p.total * 100);
    return /*#__PURE__*/React.createElement(Card, {
      key: p.letter,
      interactive: true,
      onClick: () => go("aula"),
      padding: "var(--space-6)",
      style: {
        display: "grid",
        gridTemplateColumns: "56px 1fr 200px auto",
        gap: "var(--space-6)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 34,
        lineHeight: .9,
        color: pct === 100 ? "var(--olive-400)" : "var(--gold-600)",
        textAlign: "center"
      }
    }, p.letter === "A" ? "A" : p.letter.toLowerCase()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-micro)",
        fontWeight: 600,
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, "Pilar ", i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--fs-h4)",
        letterSpacing: "var(--ls-heading)",
        color: "var(--text-title)",
        margin: "4px 0"
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--fs-caption)",
        color: "var(--text-muted)",
        maxWidth: "56ch"
      }
    }, p.description)), /*#__PURE__*/React.createElement(ProgressBar, {
      size: "sm",
      label: `${p.done}/${p.total} aulas`,
      value: pct
    }), pct === 100 ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Conclu\xEDdo") : pct > 0 ? /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Em curso") : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Bloqueado"));
  })), tab === "materiais" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginBottom: "var(--space-5)"
    }
  }, ["todos", "análise", "reformulação", "construção", "organização"].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    active: filtro === f,
    onClick: () => setFiltro(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-4)"
    }
  }, [{
    t: "Banco de 40 perguntas de Análise da Lacuna",
    k: "PDF · 6 páginas"
  }, {
    t: "Roteiro de reenquadramento em videochamada",
    k: "PDF · 2 páginas"
  }, {
    t: "Planilha de acompanhamento de propostas",
    k: "XLSX"
  }, {
    t: "Script de contorno: “vou pensar”",
    k: "PDF · 1 página"
  }, {
    t: "Checklist antes de enviar proposta",
    k: "PDF · 1 página"
  }, {
    t: "Modelo de follow-up em 3 toques",
    k: "DOCX"
  }].map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.t,
    interactive: true,
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-text",
    style: {
      width: 18,
      height: 18,
      color: "var(--gold-700)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-body-sm)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-title)",
      margin: "var(--space-4) 0 6px"
    }
  }, m.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, m.k))))), tab === "encontros" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: "Quinta, 18h30 · Prática de Análise da Lacuna",
      answer: "Traga uma negociação em aberto. Vamos explicitar o gap ao vivo, em duplas."
    }, {
      question: "Quinta, 25/09 · Construção da Decisão",
      answer: "Sessão de role-play sobre risco e segurança: as três objeções mais votadas na comunidade."
    }, {
      question: "Gravações anteriores",
      answer: "Doze encontros disponíveis na biblioteca, com marcação por minuto."
    }]
  }))));
}
Object.assign(window, {
  Dashboard,
  TRILHA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/membros/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/membros/Lesson.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  IconButton,
  Tooltip,
  Switch,
  ProgressBar,
  Toast,
  Tabs,
  Textarea
} = window.AALDESIGNSYSTEM_2e9d51;
const AULAS = [{
  id: "r1",
  t: "R1 · O que é reformular a percepção",
  d: "12 min",
  done: true
}, {
  id: "r2",
  t: "R2 · Ouvir o problema que o cliente conta",
  d: "15 min",
  done: true
}, {
  id: "r3",
  t: "R3 · Reenquadrando o problema em três frases",
  d: "18 min",
  current: true
}, {
  id: "r4",
  t: "R4 · Precisão sem confronto",
  d: "14 min"
}, {
  id: "r5",
  t: "R5 · Devolvendo o novo enquadramento",
  d: "11 min"
}, {
  id: "r6",
  t: "R6 · Prática guiada",
  d: "22 min"
}];
function Lesson({
  go
}) {
  const [playing, setPlaying] = React.useState(false);
  const [auto, setAuto] = React.useState(true);
  const [tab, setTab] = React.useState("notas");
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8)",
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 9",
      background: "var(--gradient-olive-deep)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      border: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(45deg,rgba(250,248,242,.03) 0 2px,transparent 2px 6px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPlaying(!playing),
    "aria-label": playing ? "Pausar" : "Reproduzir",
    style: {
      width: 74,
      height: 74,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--gold-500)",
      background: "rgba(20,20,10,.4)",
      color: "var(--gold-300)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": playing ? "pause" : "play",
    style: {
      width: 24,
      height: 24
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      padding: "var(--space-5)",
      background: "var(--gradient-protect-bottom)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: "rgba(250,248,242,.2)",
      borderRadius: 2,
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "62%",
      height: "100%",
      background: "var(--gold-500)",
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Voltar 10s",
    variant: "onDark",
    size: "sm"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "rotate-ccw",
    style: {
      width: 14,
      height: 14
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: playing ? "Pausar" : "Reproduzir",
    variant: "onDark",
    size: "sm",
    onClick: () => setPlaying(!playing)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": playing ? "pause" : "play",
    style: {
      width: 14,
      height: 14
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      letterSpacing: ".1em",
      color: "var(--gold-200)"
    }
  }, "11:07 / 18:02"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Legendas"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Legendas",
    variant: "onDark",
    size: "sm"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "captions",
    style: {
      width: 14,
      height: 14
    }
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Tela cheia",
    placement: "left"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Tela cheia",
    variant: "onDark",
    size: "sm"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "maximize",
    style: {
      width: 14,
      height: 14
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-6)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-gold)"
    }
  }, "Pilar R \xB7 Reformula\xE7\xE3o da Percep\xE7\xE3o \xB7 Aula 3"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "var(--space-3) 0 0",
      fontSize: "var(--fs-h2)"
    }
  }, "Reenquadrando o problema em tr\xEAs frases")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "download",
      style: {
        width: 15,
        height: 15
      }
    })
  }, "Baixar script"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setToast(true),
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 15,
        height: 15
      }
    })
  }, "Marcar conclu\xEDda"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "notas",
      label: "Minhas notas"
    }, {
      value: "resumo",
      label: "Resumo"
    }, {
      value: "duvidas",
      label: "Dúvidas",
      count: 3
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, tab === "notas" && /*#__PURE__*/React.createElement(Textarea, {
    label: "Anota\xE7\xF5es desta aula",
    rows: 5,
    placeholder: "O que voc\xEA vai testar na pr\xF3xima reuni\xE3o?"
  }), tab === "resumo" && /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingLeft: 20,
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      lineHeight: "var(--lh-body)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "Repita o problema do cliente com as palavras dele."), /*#__PURE__*/React.createElement("li", null, "Devolva o mesmo problema com uma precis\xE3o que ele n\xE3o tinha."), /*#__PURE__*/React.createElement("li", null, "Confirme o novo enquadramento antes de seguir.")), tab === "duvidas" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, ["E quando o cliente discorda do reenquadramento?", "Funciona em venda por WhatsApp?", "Como registrar isso no CRM?"].map(q => /*#__PURE__*/React.createElement(Card, {
    key: q,
    padding: "var(--space-4)",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-circle",
    style: {
      width: 15,
      height: 15,
      color: "var(--gold-700)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, q))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Pilar R \u2014 Reformula\xE7\xE3o",
    value: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      marginTop: "var(--space-5)"
    }
  }, AULAS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    type: "button",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      textAlign: "left",
      padding: "10px",
      border: 0,
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      background: a.current ? "var(--gold-50)" : "transparent",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": a.done ? "check-circle-2" : a.current ? "play-circle" : "circle",
    style: {
      width: 16,
      height: 16,
      color: a.done ? "var(--success-600)" : a.current ? "var(--gold-700)" : "var(--text-subtle)",
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: "var(--fs-caption)",
      color: a.current ? "var(--olive-800)" : "var(--text-body)",
      fontWeight: a.current ? 600 : 400
    }
  }, a.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-micro)",
      color: "var(--text-subtle)"
    }
  }, a.d))))), /*#__PURE__*/React.createElement(Card, {
    variant: "gold",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-800)"
    }
  }, "Pr\xF3ximo encontro"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--fs-h4)",
      color: "var(--text-title)",
      margin: "var(--space-3) 0 6px"
    }
  }, "Pr\xE1tica de An\xE1lise da Lacuna"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      maxWidth: "none"
    }
  }, "Quinta, 18h30 \xB7 traga uma negocia\xE7\xE3o em aberto."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    fullWidth: true,
    style: {
      marginTop: "var(--space-5)"
    }
  }, "Adicionar \xE0 agenda")), /*#__PURE__*/React.createElement(Switch, {
    label: "Reprodu\xE7\xE3o autom\xE1tica",
    checked: auto,
    onChange: e => setAuto(e.target.checked)
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Aula marcada como conclu\xEDda",
    description: "Seu progresso no Pilar R subiu para 50%.",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 15,
        height: 15
      }
    }),
    onClose: () => setToast(false)
  })));
}
Object.assign(window, {
  Lesson,
  AULAS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/membros/Lesson.jsx", error: String((e && e.message) || e) }); }

// ui_kits/membros/Login.jsx
try { (() => {
const {
  Button,
  Card,
  Input,
  Checkbox,
  Logo
} = window.AALDESIGNSYSTEM_2e9d51;
function Login({
  onEnter
}) {
  const [email, setEmail] = React.useState("camila@imob.com.br");
  const [pass, setPass] = React.useState("••••••••");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--olive-900)",
      padding: "var(--space-16) var(--space-12)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/retrato-sentada-blazer-laranja.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 25%",
      filter: "saturate(.75)",
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(160deg,rgba(50,49,26,.82) 0%,rgba(20,20,10,.92) 100%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-light.png",
    alt: "Aline Loiola",
    style: {
      width: 210,
      position: "relative"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 46,
      lineHeight: 1.05,
      letterSpacing: ".02em",
      color: "var(--sand-50)"
    }
  }, "Arco"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 1,
      width: 160,
      background: "linear-gradient(90deg,#a58647,rgba(165,134,71,0))",
      margin: "var(--space-5) 0"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: "var(--fs-body-lg)",
      color: "var(--olive-200)",
      maxWidth: "32ch"
    }
  }, "An\xE1lise \xB7 Reformula\xE7\xE3o \xB7 Constru\xE7\xE3o \xB7 Organiza\xE7\xE3o. Diagn\xF3stico em decis\xE3o, decis\xE3o em compromisso.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      color: "var(--olive-300)"
    }
  }, "Arquitetura ARCO\u2122 \xB7 turma de outubro")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-12)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-gold)"
    }
  }, "\xC1rea de alunos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h2)",
      margin: "var(--space-4) 0 var(--space-6)"
    }
  }, "Bem-vinda de volta"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onEnter();
    },
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "mail",
      style: {
        width: 15,
        height: 15
      }
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Senha",
    type: "password",
    value: pass,
    onChange: e => setPass(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "lock",
      style: {
        width: 15,
        height: 15
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Manter conectada",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("a", {
    href: "#recuperar",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: "var(--fs-caption)"
    }
  }, "Esqueci a senha")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Entrar na forma\xE7\xE3o")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "Ainda n\xE3o \xE9 aluna? ", /*#__PURE__*/React.createElement("a", {
    href: "#aplicar",
    onClick: e => e.preventDefault()
  }, "Aplicar para a pr\xF3xima turma")))));
}
Object.assign(window, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/membros/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/membros/Shell.jsx
try { (() => {
const {
  Badge,
  ProgressBar,
  IconButton,
  Tooltip,
  Tag
} = window.AALDESIGNSYSTEM_2e9d51;
const MENU = [{
  id: "trilha",
  label: "Arquitetura ARCO™",
  icon: "target"
}, {
  id: "aula",
  label: "Aula atual",
  icon: "play-circle"
}, {
  id: "scripts",
  label: "Scripts",
  icon: "file-text"
}, {
  id: "comunidade",
  label: "Comunidade",
  icon: "users"
}, {
  id: "conta",
  label: "Minha conta",
  icon: "user"
}];
function Sidebar({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: "0 0 248px",
      background: "var(--gradient-olive-deep)",
      padding: "var(--space-6) var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      borderRight: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-bow-arrow-light.png",
    alt: "",
    style: {
      width: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: ".08em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      color: "var(--gold-300)"
    }
  }, "Aline loiola")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gap: 2
    }
  }, MENU.map(m => {
    const on = route === m.id;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      type: "button",
      onClick: () => go(m.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "10px 12px",
        border: 0,
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        textAlign: "left",
        background: on ? "rgba(220,199,154,.12)" : "transparent",
        color: on ? "var(--gold-200)" : "var(--olive-200)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-body-sm)",
        fontWeight: on ? 600 : 400,
        transition: "var(--transition-base)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": m.icon,
      style: {
        width: 16,
        height: 16
      }
    }), m.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "var(--space-4)",
      border: "1px solid var(--border-inverse)",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    onDark: true,
    label: "Arquitetura ARCO\u2122",
    value: 42
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 0",
      fontSize: "var(--fs-caption)",
      color: "var(--olive-300)",
      maxWidth: "none"
    }
  }, "10 de 24 aulas conclu\xEDdas")));
}
function Topbar({
  title,
  eyebrow,
  onLogout
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      padding: "var(--space-5) var(--space-8)",
      borderBottom: "1px solid var(--border-soft)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-gold)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "6px 0 0",
      fontSize: "var(--fs-h3)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Notifica\xE7\xF5es"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifica\xE7\xF5es",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell",
    style: {
      width: 16,
      height: 16
    }
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Sair",
    placement: "left"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Sair",
    variant: "ghost",
    onClick: onLogout
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "log-out",
    style: {
      width: 16,
      height: 16
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      paddingLeft: "var(--space-4)",
      borderLeft: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-pill)",
      background: "var(--olive-600)",
      color: "var(--gold-200)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-serif)",
      fontSize: 13
    }
  }, "CR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-body)"
    }
  }, "Camila Reis"))));
}
Object.assign(window, {
  Sidebar,
  Topbar,
  MENU
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/membros/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Apply.jsx
try { (() => {
const {
  Button,
  Card,
  Input,
  Textarea,
  Select,
  Checkbox,
  SectionHeading,
  Badge,
  ProgressBar,
  Toast
} = window.AALDESIGNSYSTEM_2e9d51;
function Apply({
  go
}) {
  const [step, setStep] = React.useState(1);
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    whats: "",
    ticket: "",
    travou: "",
    ok: false
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value
  });
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--surface-page)",
      minHeight: "70vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-md)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter-inline)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Aplica\xE7\xE3o \xB7 turma de outubro",
    title: sent ? "Aplicação enviada" : "Duas etapas, dois minutos",
    lead: sent ? "Nossa equipe confirma sua vaga por WhatsApp hoje mesmo." : "Usamos suas respostas para montar os grupos de prática."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      marginTop: "var(--space-10)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "center",
      textAlign: "center",
      padding: "var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-bow-arrow.png",
    alt: "",
    style: {
      width: 74
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)"
    }
  }, "Enviamos um e-mail de confirma\xE7\xE3o para ", /*#__PURE__*/React.createElement("strong", null, form.email || "seu e-mail"), "."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("home")
  }, "Voltar ao in\xEDcio")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProgressBar, {
    label: `Etapa ${step} de 2`,
    value: step === 1 ? 50 : 100,
    style: {
      marginBottom: "var(--space-8)"
    }
  }), step === 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome completo",
    value: form.nome,
    onChange: set("nome"),
    placeholder: "Como devemos te chamar"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Seu melhor e-mail",
    type: "email",
    value: form.email,
    onChange: set("email"),
    placeholder: "nome@empresa.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    value: form.whats,
    onChange: set("whats"),
    placeholder: "(11) 90000-0000"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Ticket m\xE9dio que voc\xEA vende hoje",
    value: form.ticket,
    onChange: set("ticket"),
    options: ["Até R$ 2 mil", "R$ 2 a 10 mil", "R$ 10 a 50 mil", "Acima de R$ 50 mil"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(2),
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 15,
        height: 15
      }
    })
  }, "Continuar"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Qual \xE9 a lacuna entre onde seu cliente est\xE1 e onde ele quer chegar?",
    rows: 5,
    value: form.travou,
    onChange: set("travou"),
    placeholder: "Escreva em duas ou tr\xEAs frases \u2014 quanto mais concreto, melhor."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Aceito receber os avisos da turma no WhatsApp",
    description: "S\xF3 avisos da forma\xE7\xE3o. Sem lista de transmiss\xE3o.",
    checked: form.ok,
    onChange: set("ok")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, "Voltar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(true)
  }, "Enviar aplica\xE7\xE3o"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      justifyContent: "center",
      marginTop: "var(--space-8)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check",
    style: {
      width: 14,
      height: 14,
      color: "var(--gold-700)"
    }
  }), " 7 dias de garantia"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "lock",
    style: {
      width: 14,
      height: 14,
      color: "var(--gold-700)"
    }
  }), " Dados protegidos"))));
}
Object.assign(window, {
  Apply
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Apply.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Chrome.jsx
try { (() => {
const {
  IconButton,
  Button,
  Logo,
  Tag
} = window.AALDESIGNSYSTEM_2e9d51;
const NAV = [{
  id: "home",
  label: "Início"
}, {
  id: "metodo",
  label: "Metodologia"
}, {
  id: "provas",
  label: "Resultados"
}, {
  id: "faq",
  label: "Dúvidas"
}];
function SiteHeader({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(250,248,242,.88)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "14px var(--gutter-inline)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      borderBottom: 0,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-bow-arrow.png",
    alt: "",
    style: {
      width: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: ".08em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      color: "var(--olive-700)"
    }
  }, "Aline loiola")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginLeft: "auto"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      borderBottom: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      fontWeight: 600,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: route === n.id ? "var(--olive-800)" : "var(--text-muted)"
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("aplicar")
  }, "Aplicar para a turma")));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--gradient-olive-deep)",
      color: "var(--text-on-dark-muted)",
      padding: "var(--space-16) var(--gutter-inline) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-light.png",
    alt: "Aline Loiola",
    style: {
      width: 190
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: 300,
      color: "var(--olive-200)",
      maxWidth: "34ch"
    }
  }, "Forma\xE7\xE3o em vendas consultivas para quem quer fechar mais com a carteira que j\xE1 tem.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-micro)",
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      marginBottom: "var(--space-4)"
    }
  }, "Navegar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, NAV.concat([{
    id: "aplicar",
    label: "Aplicar"
  }]).map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      borderBottom: 0,
      color: "var(--olive-200)",
      fontSize: "var(--fs-body-sm)"
    }
  }, n.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-micro)",
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-400)",
      marginBottom: "var(--space-4)"
    }
  }, "Contato"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--olive-200)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "contato@alineloiola.com.br"), /*#__PURE__*/React.createElement("span", null, "@alineloiola")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "var(--space-12) auto 0",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid var(--border-inverse)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--fs-caption)",
      color: "var(--olive-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Aline Loiola \xB7 Especialista em Vendas Consultivas"), /*#__PURE__*/React.createElement("span", null, "CNPJ 00.000.000/0001-00")));
}
function Photo({
  label,
  src,
  ratio = "3 / 4",
  tone = "olive",
  objectPosition = "center 20%",
  scrim = true,
  style
}) {
  const bg = tone === "olive" ? "linear-gradient(150deg,#4e4c29,#22210f)" : "linear-gradient(150deg,#6b4b32,#26190f)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: bg,
      borderRadius: "var(--radius-sm)",
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition,
      filter: "saturate(.92) contrast(1.02)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(45deg,rgba(250,248,242,.045) 0 2px,transparent 2px 5px)"
    }
  }), scrim && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-protect-bottom)",
      opacity: src ? .55 : 1
    }
  }), label && !src && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 14,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-300)"
    }
  }, label));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Photo,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  ArcoPillar,
  StatBlock,
  TestimonialCard,
  Accordion,
  Tag
} = window.AALDESIGNSYSTEM_2e9d51;
const PILLARS = [{
  letter: "A",
  name: "Análise Estratégica da Lacuna™",
  description: "Diagnosticar a realidade atual, o estado desejado e explicitar o gap com impacto."
}, {
  letter: "R",
  name: "Reformulação da Percepção",
  description: "Reenquadrar o problema para o cliente enxergá-lo de forma mais precisa."
}, {
  letter: "C",
  name: "Construção da Decisão",
  description: "Trabalhar prioridade, risco, objeções e segurança até uma decisão madura."
}, {
  letter: "O",
  name: "Organização do Processo",
  description: "Transformar a decisão em próximos passos claros: prazo, critérios e follow-up."
}];
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter-inline)",
      display: "grid",
      gridTemplateColumns: "1.15fr .85fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    dot: true
  }, "Turma de outubro \xB7 40 vagas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2rem,3.4vw,3rem)",
      lineHeight: 1.12,
      letterSpacing: ".02em",
      color: "var(--olive-800)",
      margin: "var(--space-6) 0 0"
    }
  }, "Ensino profissionais de vendas a fazerem comiss\xF5es de 5 d\xEDgitos"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 1,
      width: 200,
      background: "var(--gradient-gold)",
      margin: "var(--space-6) 0"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      fontWeight: 300,
      color: "var(--text-muted)",
      maxWidth: "46ch"
    }
  }, "A ", /*#__PURE__*/React.createElement("strong", null, "Arquitetura ARCO\u2122"), " transforma diagn\xF3stico em decis\xE3o e decis\xE3o em compromisso \u2014 com a carteira que voc\xEA j\xE1 tem."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginTop: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("aplicar")
  }, "Aplicar para a turma"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => go("metodo")
  }, "Ver a metodologia")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      marginTop: "var(--space-12)",
      borderTop: "1px solid var(--border-soft)",
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "+2.400",
    label: "Profissionais treinados",
    note: "2021\u20132025"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "R$ 10.000",
    label: "Comiss\xE3o mensal alvo",
    note: "Meta da Arquitetura ARCO\u2122"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "4",
    label: "Pilares",
    note: "An\xE1lise \xB7 Reformula\xE7\xE3o \xB7 Constru\xE7\xE3o \xB7 Organiza\xE7\xE3o"
  }))), /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/retrato-blazer-laranja.png",
    label: "Aline Loiola",
    ratio: "4 / 5",
    objectPosition: "center 18%",
    scrim: false
  })));
}
function Problem() {
  const items = ["Você dá desconto para não perder a venda.", "O cliente diz “vou pensar” e desaparece.", "Você fala mais do que pergunta na reunião.", "A meta bate, a comissão não."];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-olive-deep)",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter-inline)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    align: "center",
    eyebrow: "O diagn\xF3stico",
    title: "O problema n\xE3o \xE9 o seu produto",
    lead: "Na maioria das negocia\xE7\xF5es perdidas, o roteiro quebrou antes da proposta."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "var(--space-4)",
      marginTop: "var(--space-12)"
    }
  }, items.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      padding: "var(--space-5) var(--space-6)",
      border: "1px solid var(--border-inverse)",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 16,
      height: 16,
      color: "var(--gold-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: 300,
      color: "var(--sand-100)"
    }
  }, t))))));
}
function Method({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "metodo",
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter-inline)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Arquitetura ARCO\u2122",
    title: "Diagn\xF3stico em decis\xE3o, decis\xE3o em compromisso",
    lead: "Quatro movimentos com postura consultiva transversal. Clique em um pilar para ver o que voc\xEA treina nele."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "var(--space-4)",
      marginTop: "var(--space-12)"
    }
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement(ArcoPillar, _extends({
    key: p.letter
  }, p, {
    index: i + 1,
    interactive: true,
    active: active === i,
    onClick: () => setActive(i)
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "var(--space-8)",
    style: {
      marginTop: "var(--space-8)",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 68,
      lineHeight: .8,
      color: "var(--gold-500)"
    }
  }, PILLARS[active].letter === "A" ? "A" : PILLARS[active].letter.toLowerCase()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-micro)",
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-400)"
    }
  }, "Pilar ", active + 1, " \xB7 o que voc\xEA treina"), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "var(--sand-50)",
      margin: "var(--space-3) 0 var(--space-3)"
    }
  }, PILLARS[active].name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      color: "var(--olive-200)",
      maxWidth: "62ch"
    }
  }, PILLARS[active].description)))));
}
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    id: "provas",
    style: {
      background: "var(--sand-100)",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter-inline)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Resultados",
    title: "O que muda depois da Arquitetura ARCO\u2122",
    lead: "Relatos de alunas e alunos das \xFAltimas tr\xEAs turmas."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Fechei duas propostas na primeira semana s\xF3 com a An\xE1lise da Lacuna. Parei de dar desconto para ser aceita.",
    name: "Camila Reis",
    role: "Consultora imobili\xE1ria",
    result: "R$ 14 mil em comiss\xF5es"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Minha taxa de fechamento saiu de 18% para 34% em dois meses. A diferen\xE7a foi reformular a percep\xE7\xE3o do cliente.",
    name: "Rafael Menezes",
    role: "Inside sales \xB7 SaaS",
    result: "34% de fechamento"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Aprendi a conduzir a reuni\xE3o sem falar de pre\xE7o nos primeiros 20 minutos. O cliente pediu a proposta.",
    name: "Juliana Prado",
    role: "Consultora de seguros",
    result: "Ticket 2,1\xD7 maior"
  }))));
}
function Offer({
  go
}) {
  const included = ["12 semanas da Arquitetura ARCO™ gravada", "Encontro semanal de prática ao vivo", "Biblioteca de scripts e perguntas", "Revisão de uma negociação real sua", "Comunidade fechada de alunos", "Certificado após os quatro pilares"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter-inline)",
      display: "grid",
      gridTemplateColumns: "1fr .9fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "A forma\xE7\xE3o",
    title: "Arquitetura ARCO\u2122 \xB7 turma de outubro",
    lead: "Doze semanas de treino aplicado nas suas negocia\xE7\xF5es reais."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)"
    }
  }, included.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 15,
      height: 15,
      color: "var(--gold-700)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    variant: "gold",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Lote 1 \xB7 40 vagas"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      fontFamily: "var(--font-serif)",
      fontSize: 44,
      lineHeight: 1,
      color: "var(--olive-800)"
    }
  }, "12\xD7 R$ 397"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 6
    }
  }, "ou R$ 3.970 \xE0 vista \xB7 acesso por 12 meses"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 1,
      background: "var(--gradient-gold)",
      margin: "var(--space-6) 0"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => go("aplicar")
  }, "Aplicar para a turma"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      maxWidth: "none"
    }
  }, "A aplica\xE7\xE3o leva 2 minutos. Confirmamos sua vaga por WhatsApp no mesmo dia."))));
}
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      background: "var(--sand-100)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-md)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter-inline)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "D\xFAvidas",
    title: "Antes de aplicar"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: "Serve para quem nunca vendeu high ticket?",
      answer: "Sim. O ARCO começa na Análise da Lacuna, então funciona mesmo para quem está no primeiro mês de carteira."
    }, {
      question: "Quanto tempo por semana eu preciso?",
      answer: "Cerca de duas horas: uma aula gravada e um encontro de prática ao vivo."
    }, {
      question: "E se eu não vender por telefone?",
      answer: "A metodologia é de conversa, não de canal. Alunos aplicam em reunião presencial, videochamada e WhatsApp."
    }, {
      question: "Tem garantia?",
      answer: "Sete dias para pedir reembolso integral, sem justificativa."
    }]
  }))));
}
function Home({
  go
}) {
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Problem, null), /*#__PURE__*/React.createElement(Method, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Offer, {
    go: go
  }), /*#__PURE__*/React.createElement(Faq, null));
}
Object.assign(window, {
  Home,
  PILLARS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArcoPillar = __ds_scope.ArcoPillar;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
