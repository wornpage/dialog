<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';

	interface Props {
		open?: boolean;
		title?: string;
		onclose?: () => void;
		children?: any;
		size?: 'sm' | 'md' | 'lg';
	}
	let { open = $bindable(false), title, onclose, children, size = 'md' }: Props = $props();

	const componentId = $props.id();
	const titleId = `worn-dialog-title-${componentId}`;
	let dialogEl = $state<HTMLElement | null>(null);

	// Focus the dialog when it opens; hand focus back where it was on close.
	$effect(() => {
		if (open && dialogEl) {
			if (typeof document !== 'undefined') {
				const previous = document.activeElement as HTMLElement | null;
				dialogEl.focus();
				return () => previous?.focus?.();
			}
		}
	});

	function focusables(): HTMLElement[] {
		if (!dialogEl) return [];
		return Array.from(
			dialogEl.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
			)
		);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!open) return;
		if (e.key === 'Escape') {
			open = false;
			onclose?.();
			return;
		}
		if (e.key === 'Tab') {
			const items = focusables();
			if (!items.length) {
				e.preventDefault();
				return;
			}
			const first = items[0];
			const last = items[items.length - 1];
			const activeEl = typeof document !== 'undefined' ? document.activeElement : null;
			if (e.shiftKey && (activeEl === first || activeEl === dialogEl)) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && activeEl === last) {
				e.preventDefault();
				first.focus();
			}
		}
	}

	function handleBackdrop(e: MouseEvent) {
		if (e.target === e.currentTarget) { open = false; onclose?.(); }
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="worn-dialog-backdrop" role="presentation" transition:fade={{ duration: prefersReducedMotion.current ? 0 : 200 }} onclick={handleBackdrop}>
		<div
			class="worn-dialog"
			class:is-sm={size === 'sm'}
			class:is-lg={size === 'lg'}
			role="dialog"
			aria-modal="true"
			aria-labelledby={title ? titleId : undefined}
			tabindex="-1"
			bind:this={dialogEl}
			transition:fly={{ y: prefersReducedMotion.current ? 0 : 12, duration: prefersReducedMotion.current ? 0 : 280 }}
		>
			<div class="worn-dialog-head">
				{#if title}<h2 class="worn-dialog-title" id={titleId}>{title}</h2>{/if}
				<button type="button" class="worn-dialog-close" onclick={() => { open = false; onclose?.(); }} aria-label="Close"></button>
			</div>
			<div class="worn-dialog-body">
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}

<style>
	.worn-dialog-backdrop {
		position: fixed;
		inset: 0;
		height: 100vh;
		height: 100dvh;
		box-sizing: border-box;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0,0,0,0.35);
		backdrop-filter: blur(2px);
		padding: calc(24px + env(safe-area-inset-top, 0px)) calc(24px + env(safe-area-inset-right, 0px)) calc(24px + env(safe-area-inset-bottom, 0px)) calc(24px + env(safe-area-inset-left, 0px));
	}
	.worn-dialog {
		box-sizing: border-box;
		background: var(--cockpit-surface);
		border: 1px solid var(--cockpit-border);
		border-radius: var(--cockpit-radius);
		box-shadow: 0 16px 48px rgba(0,0,0,0.15);
		width: 460px;
		max-width: 100%;
		max-height: 100%;
		overflow-y: auto;
		overscroll-behavior: contain;
		-webkit-overflow-scrolling: touch;
		position: relative;
	}
	/* CSP-safe: no unsafe-inline for style-src, so size is a static class
	   (a fixed preset) rather than an inline CSS var. */
	.worn-dialog.is-sm { width: 360px; }
	.worn-dialog.is-lg { width: 640px; }
	.worn-dialog-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 18px 20px 0;
	}
	.worn-dialog-title {
		font-family: var(--font-family-display);
		font-size: 18px;
		font-weight: 680;
		color: var(--cockpit-text);
		margin: 0;
		min-width: 0;
		overflow-wrap: anywhere;
	}
	.worn-dialog-close { min-width: 44px; min-height: 44px;
		position: relative;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 0;
		background: transparent;
		color: var(--cockpit-text-muted);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		touch-action: manipulation;
	}
	.worn-dialog-close::before,
	.worn-dialog-close::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		width: 12px;
		height: 1.5px;
		border-radius: 1px;
		background: currentColor;
	}
	.worn-dialog-close::before { transform: translate(-50%, -50%) rotate(45deg); }
	.worn-dialog-close::after { transform: translate(-50%, -50%) rotate(-45deg); }
	.worn-dialog-close:hover {
		background: var(--cockpit-hover-bg);
	}
	.worn-dialog-close:focus-visible {
		outline: 2px dashed var(--cockpit-accent);
		outline-offset: 2px;
	}
	.worn-dialog-body {
		min-width: 0;
		padding: 12px 20px 20px;
	}
	@media (max-width: 480px) {
		.worn-dialog-backdrop {
			padding: calc(8px + env(safe-area-inset-top, 0px)) calc(8px + env(safe-area-inset-right, 0px)) calc(8px + env(safe-area-inset-bottom, 0px)) calc(8px + env(safe-area-inset-left, 0px));
		}
	}
</style>
