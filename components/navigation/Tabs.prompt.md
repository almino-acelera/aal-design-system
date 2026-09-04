Section switcher. Uppercase Montserrat labels; the active tab gets a 2px gold underline (never a filled background in `underline` mode).

```jsx
<Tabs items={[{value:'aulas',label:'Aulas',count:24},{value:'materiais',label:'Materiais'}]} value={tab} onChange={setTab} />
```

`variant="pill"` for filters inside a panel.
