# DHKO

Norwegian network for Digital Humanities and Culture Organization. Built with Next.js 16.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app redirects `/` to `/no` (default locale).

## Build

```bash
npm run build
npm start
```

## Redigere innhold

Innholdet på siden ligger som .md-filer i mappene `content/en` og `content/no`. Siden vil bli oppdatert automatisk hver gang man committer endringer til en branch. Endringer i main branch går i produksjon, mens andre branches blir forhåndsvisninger.

Nummereringen i filnavnene (f.eks. `1.index.md`, `2.about.md`) avgjør rekkefølgen i navigasjonsmenyen.

Når man oppretter nye sider er det viktig at de har samme navn i mappene `content/no` og `content/en`, slik at man vil komme til rett side når man bytter språk.

## Tech

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS**
- **TypeScript**
- Markdown content from `content/{locale}/*.md` with gray-matter + react-markdown
