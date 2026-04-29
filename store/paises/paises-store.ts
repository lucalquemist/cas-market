

import { Pais } from "@/interfaces";
import { create } from "zustand"


interface PaisesState {
    paisesScore: Pais[]

    updatePaisesScore: (paises: Pais[]) => void
    
}


export const usePaisesStore = create<PaisesState>((set, get) => ({
    
    paisesScore: [],

    updatePaisesScore: (paises) =>
        set((state) => ({
            paisesScore: paises
        })),

}))