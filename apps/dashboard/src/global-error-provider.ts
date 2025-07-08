// global-error-listeners.ts
export function initGlobalErrorListeners() {
  window.addEventListener('error', (event) => {
    const target = event?.target as HTMLElement;

    if (target?.tagName === 'SCRIPT') {
      console.error('Script loading error:', target?.getAttribute('src'));
    } else if (target instanceof WebSocket) {
      console.error('WebSocket error:', event);
    } else if ('message' in event) {
      console.error('General error:', event);
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise rejection:', event.reason);
  });
}
