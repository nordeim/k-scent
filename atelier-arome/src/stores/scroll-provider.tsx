'use client';

import { createContext, useEffect, useState, useCallback } from 'react';
import { throttle } from '@/lib/utils';

interface ScrollContextType {
  scrollY: number;
  scrollProgress: number;
  isScrolling: boolean;
  direction: 'up' | 'down' | null;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollProgress: 0,
  isScrolling: false,
  direction: null,
});

interface ScrollProviderProps {
  children: React.ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);

  let lastScrollY = 0;
  let scrollTimeout: NodeJS.Timeout;

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;

      setScrollY(currentScrollY);
      setScrollProgress(progress);
      setIsScrolling(true);

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setDirection('up');
      }

      lastScrollY = currentScrollY;

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Set new timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setDirection(null);
      }, 150);
    }, 16), // ~60fps
    []
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set initial values
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  const contextValue: ScrollContextType = {
    scrollY,
    scrollProgress,
    isScrolling,
    direction,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
}

export { ScrollContext };
