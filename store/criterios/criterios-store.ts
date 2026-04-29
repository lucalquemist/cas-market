import { Criterio2 } from '@/interfaces';
import { initialData } from '@/seed/seed'; //* luego tengo que sacar esto de acá
// codigo de chat gpt
import { create } from "zustand"

//interface Criterio {
    // id: number;
    // title: string;
//}

interface CriterioState {
    // favorites: Record<number, Criterio2>
    favorites: Criterio2[]
    addFavorite: (criterio: Criterio2) => void
    removeFavorite: (id: number) => void

    isFavorite: (id: number) => boolean
    listaFavs: () => Criterio2[]

    incrementRatio: () => void
    decrementRatio: () => void
}

export const useCriteriosStore = create<CriterioState>((set, get) => ({
  //favorites: {},
  favorites: initialData.criterios2,

  addFavorite: (criterio) =>
    set((state) => ({ 
      favorites: [ ...state.favorites, criterio ]
    })),

  removeFavorite: (id) =>
    set((state) => {
      return { favorites: state.favorites.filter(f => f.id !== id) }
    }),

  isFavorite: (id) => {
    return !!get().favorites[id]
  },

  listaFavs: () => {
    return Object.values(get().favorites)
  },

  incrementRatio: () => {
    return
  },

  decrementRatio: () => {
    return
  },


}))

/**
import { Criterio, Criterio2 } from '@/interfaces';
import { initialData } from '@/seed/seed'; //* luego tengo que sacar esto de acá
// codigo de chat gpt
import { create } from "zustand"

//interface Criterio {
    // id: number;
    // title: string;
//}

interface CriterioState {
    // favorites: Record<number, Criterio2>
    favorites: Record<number, Criterio2>
    addFavorite: (criterio: Criterio2) => void
    removeFavorite: (id: number) => void
    isFavorite: (id: number) => boolean
    listaFavs: () => Criterio2[]

    incrementRatio: () => void
    decrementRatio: () => void
}

export const useCriteriosStore = create<CriterioState>((set, get) => ({
  //favorites: {},
  favorites: initialData.criterios2,

  addFavorite: (criterio) =>
    set((state) => ({
      favorites: {
        ...state.favorites,
        [criterio.id]: criterio
      }
    })),

  removeFavorite: (id) =>
    set((state) => {
      const newFavorites = { ...state.favorites }
      delete newFavorites[id]

      return { favorites: newFavorites }
    }),

  isFavorite: (id) => {
    return !!get().favorites[id]
  },

  listaFavs: () => {
    return Object.values(get().favorites)
  },

  incrementRatio: () => {
    return
  },

  decrementRatio: () => {
    return
  },


}))
 */

/*
import { Criterio, Criterio2 } from '@/interfaces';
// codigo de chat gpt
import { create } from "zustand"

//interface Criterio {
    // id: number;
    // title: string;
//}

interface CriterioState {
    favorites: Record<number, Criterio>

    addFavorite: (criterio: Criterio) => void
    removeFavorite: (id: number) => void
    isFavorite: (id: number) => boolean
    listaFavs: () => Criterio[]

    incrementRatio: () => void
    decrementRatio: () => void
}

export const useCriteriosStore = create<CriterioState>((set, get) => ({
  favorites: {},

  addFavorite: (criterio) =>
    set((state) => ({
      favorites: {
        ...state.favorites,
        [criterio.id]: criterio
      }
    })),

  removeFavorite: (id) =>
    set((state) => {
      const newFavorites = { ...state.favorites }
      delete newFavorites[id]

      return { favorites: newFavorites }
    }),

  isFavorite: (id) => {
    return !!get().favorites[id]
  },

  listaFavs: () => {
    return Object.values(get().favorites)
  },

  incrementRatio: () => {
    return
  },

  decrementRatio: () => {
    return
  },


}))
*/
// asi lo hacemos mas avanzado con chat gpt
// https://chatgpt.com/c/69b224ea-f73c-8330-87cc-7c8b55956430