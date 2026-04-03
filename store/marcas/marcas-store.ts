
import { Marcas } from "@/interfaces";
import { create } from "zustand"
//

interface MarcaState {
    categorySelected: Cats
    marcasScore: Marcas

    SelectCategory: (category: Cats) => void
    updateMarcasScore: (marcas: Marcas) => void
    
}

type Cats = 'Todas' | 'Alimentos' | 'Vestimenta' | 'HigienePersonal' | 'Software' | 'Electronicos' | 'Servicios' | 'Vehiculos';

export const useMarcaStore = create<MarcaState>((set, get) => ({
    categorySelected: 'Todas',
    marcasScore: [],

    SelectCategory: (category) =>
        set((state) => ({ categorySelected: category })),
    
    updateMarcasScore: (marcas) =>
        set((state) => ({
            marcasScore: marcas
        })),
}))
