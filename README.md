# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run lint      # run Oxlint
```

## Project structure

The code is organized **by feature**, not by file type: everything one feature needs (components, styles, types, data) lives together in its own folder.

```
src/
├── main.tsx                  # Entry point: mounts <App /> into index.html
├── index.css                 # Global styles and theme variables
├── app/                      # App-level setup and page layout
│   ├── App.tsx               # Root component: composes features into the page
│   └── App.css               # Layout-only styles
├── components/               # Shared, generic UI used by 2+ features
│   └── SpriteIcon.tsx
├── features/                 # One folder per feature/domain
│   └── home/
│       ├── index.ts          # Public API: the only file other code imports from
│       ├── types.ts          # Types used within this feature
│       ├── constants.ts      # Static data (link lists)
│       └── components/       # Components used only by this feature
│           ├── Hero.tsx      + Hero.css
│           ├── Counter.tsx   + Counter.css
│           ├── NextSteps.tsx + NextSteps.css
│           ├── LinkPanel.tsx
│           └── LinkIconView.tsx
└── assets/                   # Images and SVGs imported by components
```

As the app grows, you can add more top-level folders when needed, e.g. `hooks/` (shared hooks), `lib/` (configured third-party libraries), `utils/` (pure helpers), `types/` (shared types) or `routes/` (pages, once routing is added).

### Conventions

- **Where does new code go?** If only one feature uses it, it goes inside that feature's folder. Once a second feature needs it, move it to the matching shared folder (`src/components/`, `src/hooks/`, ...).
- **New feature?** Create `src/features/<name>/` with its own `components/` and an `index.ts` that exports what the rest of the app needs.
- **Import features through their `index.ts`** (`@/features/home`), never from deep paths like `@/features/home/components/Hero`. This keeps each feature's internals private and easy to refactor.
- **Colocate files.** A component's styles (and later its tests) sit next to it: `Hero.tsx`, `Hero.css`, `Hero.test.tsx`.
- **One component per file**, named exports, file named after the component (`PascalCase.tsx`).

### Path alias

`@/` points to `src/`, so you don't need long relative paths:

```ts
import { SpriteIcon } from '@/components/SpriteIcon'   // instead of '../../../components/SpriteIcon'
```

Use `@/` for imports that cross folders (shared code, assets, other features). Keep relative imports (`'../types'`) inside a feature. The alias is configured in two places that must stay in sync: `resolve.alias` in `vite.config.ts` (for bundling) and `paths` in `tsconfig.app.json` (for type-checking and the editor).

### Further reading

- [Bulletproof React – Project structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md): the feature-based layout this project follows
- [Robin Wieruch – React folder structure](https://www.robinwieruch.de/react-folder-structure/): how a structure evolves from a single file to features
- [Kent C. Dodds – Colocation](https://kentcdodds.com/blog/colocation): why to keep related files close together
- [Feature-Sliced Design](https://feature-sliced.design/): a stricter, layered take on feature-based architecture for larger teams
- [Vite – `resolve.alias`](https://vite.dev/config/shared-options.html#resolve-alias) and [TypeScript – `paths`](https://www.typescriptlang.org/tsconfig/#paths): path alias configuration

## Vite plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
