import { create } from 'zustand';


type UIType = 'sidebar'| 'product_filter'| null;

interface UIStore {
  activeUI: UIType;
  isOpen: (type: UIType) => boolean;
  openUI: (type: UIType) => void;
  closeUI: () => void;
}


export const useUIStore = create<UIStore>((set, get) => ({
  activeUI: null,
  isOpen: (type) => get().activeUI === type,
  openUI: (type) => set({ activeUI: type }),
  closeUI: () => set({ activeUI: null }),
}));