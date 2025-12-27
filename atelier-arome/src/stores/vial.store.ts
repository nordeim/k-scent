import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';

interface VialItem {
  id: string;
  commonName: string;
  latinName: string;
  price: number;
  volumeMl: number;
  image?: string;
  quantity: number;
}

interface VialState {
  items: VialItem[];
  isOpen: boolean;
  isLoading: boolean;
  
  // Computed values
  getItemCount: () => number;
  getSubtotal: () => number;
  getLiquidLevel: () => number;
  
  // Actions
  addItem: (item: Omit<VialItem, 'quantity'>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearVial: () => void;
  toggleVial: () => void;
  openVial: () => void;
  closeVial: () => void;
}

export const useVialStore = create<VialState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isLoading: false,

      // Computed values
      getItemCount: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        const state = get();
        return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },

      getLiquidLevel: () => {
        const state = get();
        const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
        return Math.min(itemCount * 0.1, 1); // 10% per item, max 100%
      },

      // Actions
      addItem: (item) => {
        const state = get();
        const existingItem = state.items.find((i) => i.id === item.id);

        if (existingItem) {
          // Update quantity if item already exists
          set({
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          // Add new item
          set({
            items: [...state.items, { ...item, quantity: 1 }],
          });
        }

        // Trigger ritual feedback
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
          navigator.vibrate([50, 50, 50]); // Triple pulse for adding essence
        }
      },

      removeItem: (itemId) => {
        const state = get();
        set({
          items: state.items.filter((item) => item.id !== itemId),
        });

        // Trigger ritual feedback
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
          navigator.vibrate([100]); // Single pulse for removal
        }
      },

      updateQuantity: (itemId, quantity) => {
        const state = get();
        
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          get().removeItem(itemId);
          return;
        }

        set({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        });
      },

      clearVial: () => {
        set({ items: [] });

        // Trigger ritual feedback
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
          navigator.vibrate([200, 100, 200]); // Distinctive pattern for clearing
        }
      },

      toggleVial: () => {
        const state = get();
        set({ isOpen: !state.isOpen });
      },

      openVial: () => {
        set({ isOpen: true });
      },

      closeVial: () => {
        set({ isOpen: false });
      },
    }),
    {
      name: 'atelier-vial',
      storage: createJSONStorage(() => localStorage),
      version: 1,
      migrate: (persistedState: any, version: number) => {
        // Handle migrations between versions if needed
        if (version === 0) {
          // Migration logic for version 0 -> 1
          return {
            ...persistedState,
            isLoading: false, // Add new property
          };
        }
        return persistedState;
      },
    }
  )
);

// Selectors for computed values
export const selectVialItemCount = (state: VialState) => 
  state.items.reduce((total, item) => total + item.quantity, 0);

export const selectVialSubtotal = (state: VialState) => 
  state.items.reduce((total, item) => total + (item.price * item.quantity), 0);

export const selectVialLiquidLevel = (state: VialState) => {
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  return Math.min(itemCount * 0.1, 1);
};

export const selectIsItemInVial = (itemId: string) => (state: VialState) => 
  state.items.some((item) => item.id === itemId);

export const selectItemQuantity = (itemId: string) => (state: VialState) => {
  const item = state.items.find((item) => item.id === itemId);
  return item ? item.quantity : 0;
};
