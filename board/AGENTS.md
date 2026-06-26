<!-- intent-skills:start -->
## Skill Loading

Before editing files for a substantial task:
- Run `pnpm dlx @tanstack/intent@latest list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `pnpm dlx @tanstack/intent@latest load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

## Project: `board`

TanStack Start app for project management with JRPG-inspired Quest Board.

### Scaffold command

```sh
npx @tanstack/cli@latest create board --agent --package-manager pnpm --tailwind
```

Scaffolded in scratch dir `/tmp/opencode/scratch-board/board`, then merged into this directory.

### Stack

- **Framework:** React 19
- **Router:** TanStack Router (file-based)
- **SSR:** TanStack Start
- **Styling:** Tailwind CSS v4
- **Drag & Drop:** @dnd-kit/core
- **Animation:** Framer Motion
- **Toolchain:** Vite, TypeScript
- **Package manager:** pnpm

### Post-scaffold setup

```sh
pnpm install
pnpm dlx @tanstack/intent@latest install
pnpm dlx @tanstack/intent@latest list
pnpm generate-routes
pnpm add @dnd-kit/core framer-motion
pnpm remove react-beautiful-dnd @types/react-beautiful-dnd
```

### Available scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start dev server on port 3000 |
| `pnpm build` | Production build (client + SSR) |
| `pnpm preview` | Preview production build |
| `pnpm generate-routes` | Regenerate route tree |
| `pnpm test` | Run vitest |

### Directory structure

```
board/
├── public/
│   ├── logo.png         # App logo
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── BoardLayout.tsx     # Full-screen layout (header + boss + board + hud)
│   │   ├── BoardHeader.tsx     # Dark wood header with menu, breadcrumb, avatar
│   │   ├── BossBanner.tsx      # Boss HUD with animated HP bar, campaign, reward
│   │   ├── QuestBoard.tsx      # DndContext + lanes with drag overlay
│   │   ├── QuestLane.tsx       # Droppable lane with useDroppable
│   │   ├── LaneHeader.tsx      # Lane title + counter
│   │   ├── QuestScroll.tsx     # Draggable quest card (Paper + Steel Frame)
│   │   ├── QuestPortrait.tsx   # Circular placeholder (silhouette/crystal)
│   │   ├── QuestAttributes.tsx # Icon-only mini stats (XP, HP, time, loot)
│   │   ├── QuestScrollFooter.tsx # Assignee avatars, points, priority
│   │   ├── FloatingHUD.tsx     # Bottom-right reserved for combo/loot/notifications
│   │   └── Tooltip.tsx         # Hover tooltip
│   ├── routes/                 # File-based routes (__root, index, about)
│   ├── router.tsx              # Router factory
│   ├── routeTree.gen.ts        # Auto-generated route tree
│   ├── styles.css              # Global styles + design tokens
│   └── types.ts                # Shared types (QuestScroll, Lane, Boss)
├── vite.config.ts
├── tsconfig.json
└── tsr.config.json
```

### Design Tokens

| Token | Usage | Dark Value |
|---|---|---|
| `--night` | Page background | `#0b0e17` |
| `--night-light` | Subtle highlights | `#131725` |
| `--stone` | Surface cards | `#1c2033` |
| `--stone-light` | Hover surfaces | `#262b42` |
| `--magic` | Primary accent | `#4a7cff` |
| `--boss-red` | Danger / Boss | `#ef4444` |
| `--gold` | Rewards | `#f59e0b` |
| `--forest` | Success / HP | `#22c55e` |
| `--parchment` | Primary text | `#e8e4db` |
| `--parchment-dim` | Muted text | `#9a97a8` |
| `--wood` | Header | `#2c1810` |
| `--paper-bg` | Quest Scroll | `#1a1d30` |
| `--steel` | Borders / accents | `#3b3f54` |

### Materials

- **Quest Scroll:** Paper + Steel Frame (`--paper-bg` + `--paper-border`)
- **Boss Banner:** Stone + Gold (`--stone` + `--gold`)
- **Header:** Dark Wood (`--wood` gradient)
- **HUD:** Stone surface (`--stone`)
- **Buttons:** Steel (`--steel`)

### Key architectural decisions

- Filesystem-based routing via `tsr.config.json` (target: react)
- Theme system uses CSS custom properties with light/dark/auto modes
- Logo is a placeholder hexagon PNG generated at scaffold time
- `@dnd-kit/core` for drag-and-drop with `useDraggable`/`useDroppable`
- Framer Motion for hover lift, press scale, drag tilt, and spawn animations
- All components are reusable — page only composes them
- No page-specific CSS — all visual identity comes from tokens and components
- FloatingHUD is a reserved space, not yet functional
- **Quest Inspection Modal** uses scale-up/scale-down animation (not position-based) to avoid layoutId conflicts: modal renders a copy of the card in the overlay, original stays in place. `AnimatePresence` handles mount/unmount. Panels fade in with staggered animation delays via CSS keyframes (`fade-in 500ms ease-out Nms both`).
- QuestScroll's `onClick` vs drag distinction is handled by dnd-kit's `PointerSensor` with `activationConstraint: { distance: 6 }`. Clicks without movement fire `onSelect` normally.
- Inspection data (objectives, comments, history, attachments, links, dependencies, reviewer, guild) lives on the `QuestScroll` type itself to keep data colocated with the scroll it belongs to.

### Environment variables

None required for development. Vite prefix: `VITE_`.

### Next steps

1. Add server functions for quest CRUD via `createServerFn`
2. Implement real boss HP tracking (decrements on quest completion)
3. Connect FloatingHUD to combo/loot/XP notifications
4. Add mobile swipe between lanes
5. Migrate from placeholder silhouettes to actual monster portraits
6. Add transition between lanes when drag finishes (drag-to-reorder scrolls within a lane)
7. Add edit-in-modal support (inline editing of objectives, comments) within inspection modal

### Gotchas

- `@dnd-kit` v6 uses `useDraggable`/`useDroppable` hooks (not `<Draggable>`/`<Droppable>` components)
- Framer Motion `animate` prop replaces Tailwind transition for complex sequences
- The `@tailwindcss/typography` plugin is installed but not used in current pages
- TanStack Start uses `createServerFn` for server-side logic (no manual API routes needed)
- CSS custom properties for light theme are inverted (dark values → light surfaces)
