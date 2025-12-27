'use client';

import { createContext, useEffect, useState } from 'react';

interface RitualProviderProps {
  children: React.ReactNode;
}

export function RitualProvider({ children }: RitualProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize ritual engine
    const initializeRituals = async () => {
      // Check for user preferences
      if (typeof window !== 'undefined') {
        const preferences = localStorage.getItem('ritual-preferences');
        if (preferences) {
          try {
            const prefs = JSON.parse(preferences);
            // Apply user ritual preferences
            if (prefs.reducedMotion) {
              document.documentElement.style.setProperty('--animation-duration', '0.01ms');
            }
          } catch (error) {
            console.warn('Failed to parse ritual preferences:', error);
          }
        }

        // Initialize haptic feedback if supported
        if ('vibrate' in navigator) {
          console.log('Haptic feedback available');
        }

        // Initialize Web Audio API if supported
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
          console.log('Web Audio API available');
        }
      }

      setIsInitialized(true);
    };

    initializeRituals();
  }, []);

  // Don't render children until rituals are initialized
  if (!isInitialized) {
    return null;
  }

  return <>{children}</>;
}
