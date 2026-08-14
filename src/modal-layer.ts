interface InertState {
  hadAttribute: boolean;
}

interface ScrollLockState {
  scrollX: number;
  scrollY: number;
  rootOverflow: string;
  bodyOverflow: string;
  bodyPosition: string;
  bodyTop: string;
  bodyLeft: string;
  bodyWidth: string;
}

const modalStack: HTMLElement[] = [];
const inertStates = new Map<HTMLElement, InertState>();
let bodyObserver: MutationObserver | null = null;
let scrollLockState: ScrollLockState | null = null;

function lockPageScroll() {
  if (scrollLockState || typeof document === 'undefined') return;

  const root = document.documentElement;
  const body = document.body;
  scrollLockState = {
    scrollX: window.scrollX,
    scrollY: window.scrollY,
    rootOverflow: root.style.overflow,
    bodyOverflow: body.style.overflow,
    bodyPosition: body.style.position,
    bodyTop: body.style.top,
    bodyLeft: body.style.left,
    bodyWidth: body.style.width,
  };

  root.style.overflow = 'hidden';
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollLockState.scrollY}px`;
  body.style.left = `-${scrollLockState.scrollX}px`;
  body.style.width = '100%';
}

function unlockPageScroll() {
  if (!scrollLockState || typeof document === 'undefined') return;

  const state = scrollLockState;
  scrollLockState = null;
  const root = document.documentElement;
  const body = document.body;
  root.style.overflow = state.rootOverflow;
  body.style.overflow = state.bodyOverflow;
  body.style.position = state.bodyPosition;
  body.style.top = state.bodyTop;
  body.style.left = state.bodyLeft;
  body.style.width = state.bodyWidth;
  window.scrollTo(state.scrollX, state.scrollY);
}

function applyModalIsolation() {
  if (typeof document === 'undefined') return;

  const activeModal = modalStack.at(-1);
  for (const child of Array.from(document.body.children)) {
    if (!(child instanceof HTMLElement)) continue;
    if (!inertStates.has(child)) {
      inertStates.set(child, { hadAttribute: child.hasAttribute('inert') });
    }
    child.toggleAttribute('inert', child !== activeModal);
  }
}

function restoreBackground() {
  for (const [element, state] of inertStates) {
    element.toggleAttribute('inert', state.hadAttribute);
  }
  inertStates.clear();
}

export function portal(node: HTMLElement) {
  if (typeof document === 'undefined') return;
  document.body.appendChild(node);

  return {
    destroy() {
      node.remove();
    },
  };
}

export function activateModalLayer(root: HTMLElement) {
  if (typeof document === 'undefined') return () => {};

  if (modalStack.length === 0) {
    lockPageScroll();
    bodyObserver = new MutationObserver(applyModalIsolation);
    bodyObserver.observe(document.body, { childList: true });
  }

  modalStack.push(root);
  applyModalIsolation();
  let released = false;

  return () => {
    if (released) return;
    released = true;

    const index = modalStack.lastIndexOf(root);
    if (index >= 0) modalStack.splice(index, 1);

    if (modalStack.length > 0) {
      applyModalIsolation();
      return;
    }

    bodyObserver?.disconnect();
    bodyObserver = null;
    restoreBackground();
    unlockPageScroll();
  };
}
