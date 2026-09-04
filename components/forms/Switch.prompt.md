On/off preference that applies immediately — player autoplay, notification settings inside the members area.

```jsx
<Switch label="Reprodução automática" checked={auto} onChange={e => setAuto(e.target.checked)} />
```

For values submitted with a form, use `Checkbox` instead.
