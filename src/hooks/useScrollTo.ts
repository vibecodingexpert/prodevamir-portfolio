'use client';

import { useCallback } from 'react';

export function useScrollTo() {
  const scrollTo = useCallback((href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return scrollTo;
}
