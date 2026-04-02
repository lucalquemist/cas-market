
import { create } from "zustand"


interface MarcaState {
    categorySelected: Cats

    SelectCategory: (category: Cats) => void
}

type Cats = 'Todas' | 'Alimentos' | 'Vestimenta' | 'HigienePersonal' | 'Software' | 'Electronicos' | 'Servicios' | 'Vehiculos';

export const useMarcaStore = create<MarcaState>((set, get) => ({
    categorySelected: 'Todas',

    SelectCategory: (category) =>
        set((state) => ({ categorySelected: category })),
}))
