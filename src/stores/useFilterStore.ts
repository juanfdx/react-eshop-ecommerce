import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LayoutType = 'grid' | 'list';
type SortType = 'newest' | 'lowest' | 'highest' | 'a-z' | 'z-a';

interface FilterStore {
  layout: LayoutType;
  sort: SortType;
  category: string;
  rating: number,
  memory: string | null,
  size: string | null,
  color: string | null,
  min_price: number,
  max_price: number,

  //actions
  setLayout: (layout: LayoutType) => void;
  setSort: (sort: SortType) => void;
  setCategory: (category: string) => void;
  setRating: (rating: number) => void;
  setMemory: (memory: string | null) => void;
  setSize: (size: string | null ) => void;
  setColor: (color: string | null) => void;
  setMinPrice: (min_price: number) => void;
  setMaxPrice: (max_price: number) => void;
  resetFilters: () => void;
}

const initialState = {
  layout: 'grid' as LayoutType,
  sort: 'newest' as SortType,
  category: 'all',
  rating: 0,
  memory: null,
  size: null,
  color: null,
  min_price: 0,
  max_price: 1000000,
}


// Store with persist middleware
export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      ...initialState,
      setLayout: (layout) => set({ layout }),
      setSort: (sort) => set({ sort }),
      setCategory: (category) => set({ category }),
      setRating: (rating) => set({ rating }),
      setMemory: (memory) => set({ memory }),
      setSize: (size) => set({ size }),
      setColor: (color) => set({ color }),
      setMinPrice: (min_price) => set({ min_price }),
      setMaxPrice: (max_price) => set({ max_price }),
      resetFilters: () => set({ ...initialState }),
    }),
    {
      name: 'filter-store', // localStorage key
    }
  )
);