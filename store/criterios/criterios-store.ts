import { Criterio } from '@/interfaces';
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
  }


}))



// este es el codigo que empezaba a hacer
// import { Criterio } from '@/interfaces';
//import { create } from 'zustand';

//interface Criterio {
    //title: string;
//}

//interface CriterioState {

    //criteriosSuscritos: Criterio[];

    //suscribeCriterio: (newSubscription: Criterio) => void; 
//}

//export const useCriteriosStore = create<CriterioState>()((set) => ({
    //criteriosSuscritos: [
        //{
            //title: 'untitulodeuncriterio',
        //}
    //],
    
    //suscribeCriterio: (newSubscription: Criterio) => set((state) => ({
        //criteriosSuscritos: [...state.criteriosSuscritos, newSubscription,]
    //})),



    // suscribeCriterio: (newSubscription: any) => set({criteriosSuscritos: [{a: '1'}]}),
//}));

// asi lo hacemos mas avanzado con chat gpt
// https://chatgpt.com/c/69b224ea-f73c-8330-87cc-7c8b55956430