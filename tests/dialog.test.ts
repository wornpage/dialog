import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/WornDialog.svelte', import.meta.url), 'utf8');

describe('hydration and interaction contract', () => {
  test('uses a hydration-stable component id without browser crypto', () => {
    expect(source).toContain('const componentId = $props.id();');
    expect(source).not.toContain('crypto.randomUUID');
  });

  test('keeps keyboard, backdrop, and close-button dismissal', () => {
    expect(source).toContain("if (e.key === 'Escape')");
    expect(source).toContain('if (e.target === e.currentTarget)');
    expect(source).toContain('aria-label="Close"');
  });

  test('keeps static size classes and reduced-motion behavior', () => {
    expect(source).toContain('class:is-sm');
    expect(source).toContain('class:is-lg');
    expect(source).toContain('prefersReducedMotion.current');
  });

  test('owns the dynamic viewport and standalone-display safe areas', () => {
    expect(source).toContain('height: 100dvh;');
    expect(source).toContain('padding: calc(24px + env(safe-area-inset-top, 0px))');
    expect(source).toContain('padding: calc(8px + env(safe-area-inset-top, 0px))');
    expect(source).toContain('max-height: 100%;');
    expect(source).toContain('overscroll-behavior: contain;');
  });

  test('contains long titles and keeps touch dismissal responsive', () => {
    expect(source).toContain('overflow-wrap: anywhere;');
    expect(source).toContain('touch-action: manipulation;');
  });
});
