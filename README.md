# @wornpage/dialog

Accessible Svelte 5 modal dialog with focus trapping, static size presets, and reduced-motion transitions.

Dialogs remain inside dynamic mobile viewports and standalone-display safe areas,
including notches, status bars, landscape edges, and home indicators.

## Delivery contract

- `src/` is the canonical Svelte source used by Svelte-aware consumers.
- `dist/worn-dialog.js` is the deterministic browser-bundle fallback.
- `bun test` verifies hydration, dismissal, focus, sizing, and reduced-motion contracts.
- `bun run build` regenerates `dist/` from `src/`; do not edit `dist/` directly.

```svelte
<script>
  import { Dialog } from '@wornpage/dialog';
  let open = false;
</script>

<Dialog bind:open title="Confirm">Content</Dialog>
```
