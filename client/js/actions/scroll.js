export const WINDOW_SCROLLED = 'WINDOW_SCROLLED';


export function scrollWindow(scrollTop, focusedSection) {
  return {
    type: WINDOW_SCROLLED,
    scrollTop,
    focusedSection,
  };
}
