import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LayoutType = 'grid' | 'list';
export type SortType = 'newest' | 'top_rated' | 'price_lowest' | 'price_highest' | 'name_asc' | 'name_desc';

interface FilterStore {
  layout: LayoutType;
  sort: SortType;
  category: string;
  brand: string;
  rating: number,
  memory: string | null,
  size: string | null,
  baseColor: string | null,
  min_price: number | null,
  max_price: number | null,
  page: number,

  //actions
  setLayout: (layout: LayoutType) => void;
  setSort: (sort: SortType) => void;
  setCategory: (category: string) => void;
  setBrand: (brand: string) => void;
  setRating: (rating: number) => void;
  setMemory: (memory: string | null) => void;
  setSize: (size: string | null ) => void;
  setBaseColor: (baseColor: string | null) => void;
  setMinPrice: (min_price: number | null) => void;
  setMaxPrice: (max_price: number | null) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;
}

const initialState = {
  layout: 'grid' as LayoutType,
  sort: 'newest' as SortType,
  category: 'all',
  brand: 'all',
  rating: 0,
  memory: null,
  size: null,
  baseColor: null,
  min_price: null,
  max_price: null,
  page: 1,
}


// Store with persist middleware
export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      ...initialState,
      setLayout: (layout) => set({ layout }),
      setSort: (sort) => set({ sort }),
      setCategory: (category) => set({ category }),
      setBrand: (brand) => set({ brand }),
      setRating: (rating) => set({ rating }),
      setMemory: (memory) => set({ memory }),
      setSize: (size) => set({ size }),
      setBaseColor: (baseColor) => set({ baseColor }),
      setMinPrice: (min_price) => set({ min_price }),
      setMaxPrice: (max_price) => set({ max_price }),
      setPage: (page) => set({ page }),
      resetFilters: () => set({ ...initialState }),
    }),
    {
      name: 'filter-store', // localStorage key
    }
  )
);