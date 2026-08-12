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
});
