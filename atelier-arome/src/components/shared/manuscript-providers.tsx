'use client';

import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import { VialProvider } from '@/stores/vial-provider';
import { RitualProvider } from '@/stores/ritual-provider';
import { ScrollProvider } from '@/stores/scroll-provider';

interface ManuscriptProvidersProps {
  children: React.ReactNode;
}

export function ManuscriptProviders({ children }: ManuscriptProvidersProps) {
  return (
    <SessionProvider>
      <ScrollProvider>
        <RitualProvider>
          <VialProvider>
            {children}
            <Analytics />
          </VialProvider>
        </RitualProvider>
      </ScrollProvider>
    </SessionProvider>
  );
}
