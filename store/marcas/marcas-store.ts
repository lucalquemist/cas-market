
import { Marca2 } from "@/interfaces";
import { create } from "zustand"
//

interface MarcaState {
    categorySelected: Cats
    marcasScore: Marca2[]

    SelectCategory: (category: Cats) => void
    updateMarcasScore: (marcas: Marca2[]) => void
    
}

type Cats = 'Todas' | 'Alimentos' | 'Vestimenta' | 'HigienePersonal' | 'Software' | 'Electrónicos' | 'Servicios' | 'Vehiculos';

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
