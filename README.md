# GCaddy - Golf Clash Calculator

A React + Vite wind calculator for Golf Clash with LocalStorage persistence.
## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## What’s included

- Club selection (all categories) + level selection with rarity caps
- Wind / elevation / ball power inputs
- Club distance slider (0–100%)
- Rings output (Max/Mid/Min + 25/75 + distance rings)
- Bag save/load (5 bags) backed by LocalStorage
- Tournament notes (3 tournaments, front/back 9)
- Minimal Mode (simplified UI)
- Endbringer School table (wedge percentage table)

All persistence is stored under LocalStorage keys prefixed with `gcaddy:`.

## Linting & Formatting

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```
