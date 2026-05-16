'use client';

import { initialData } from '@/seed/seed';
import { useCriteriosStore } from '@/store';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export const CargadorCriterios = () => {

    // suscribirse a todos los criterios
    const allCriterios = initialData.criterios2;
    const addFavorite = useCriteriosStore(state => state.addFavorite)
    
    for (const criterio of allCriterios) {
        addFavorite(criterio);
    }

    console.log('criterios agregados')

    useEffect(() => {
        redirect('/criterios');
    })

    return (
        <div>A</div>
    )
}
