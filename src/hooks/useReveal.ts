import { useCallback, useRef } from 'react';

/**
 * Returns a callback ref that adds the `in` class the first time the element
 * scrolls into view. Pair with the `.reveal` class for the fade/blur-up.
 */
export function useReveal() {
  const observer = useRef<IntersectionObserver | null>(null);

  return useCallback((el: HTMLElement | null) => {
    observer.current?.disconnect();
    observer.current = null;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    observer.current = io;
  }, []);
}
