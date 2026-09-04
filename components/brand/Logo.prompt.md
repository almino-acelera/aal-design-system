Renders the identity. Always point `src` at a file in `assets/` — the type-set fallback exists only for contexts where the image can't be reached.

```jsx
<Logo variant="lockup" src="assets/logo-lockup.png" size={200} />
<Logo variant="mark" src="assets/mark-bow-arrow-light.png" onDark size={120} />
```

**Casing:** in Cinzel Decorative only the leading A is capital — the type-set fallback renders “Aline loiola”, never “ALINE LOIOLA”. On olive/dark backgrounds use the `-light` asset and set `onDark`. Minimum lockup width 140px; minimum clear space equals the height of the wordmark's cap. Never recolor, outline, rotate or place the mark on a busy photo without a scrim.
