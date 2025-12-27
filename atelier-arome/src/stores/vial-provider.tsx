'use client';

import { createContext, useEffect } from 'react';
import { useVialStore } from './vial.store';

interface VialProviderProps {
  children: React.ReactNode;
}

export function VialProvider({ children }: VialProviderProps) {
  // Initialize vial store hydration
  const hasHydrated = useVialStore.persist.hasHydrated();

  useEffect(() => {
    // Rehydrate the store on mount
    useVialStore.persist.rehydrate();
  }, []);

  // Show loading state while hydrating
  if (!hasHydrated) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
