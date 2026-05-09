"use client";

import { useState } from "react";
import { useCriteriosStore } from "@/store";
import { Criterio2 } from "@/interfaces";
import { RatioModal } from "./RatioModal";

export const RatiosPanel = () => {
  const favorites = useCriteriosStore((state) => state.favorites);
  const favoritos = Object.values(favorites);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedFav, setSelectedFav] = useState<Criterio2 | null>(null);

  const handleOpenModal = (fav: Criterio2) => {
    setSelectedFav(fav);
    setIsModalOpen(true);
  };

  return (
    <div className="ml-3 mr-3">
      <div>
        <p>Criterio - Ratio</p>
      </div>

      <div className="p-2 mt-3 rounded-md overflow-hidden fade-in border">
        {favoritos.map((fav) => (
          <div key={fav.id} className="mt-2">
            <div className="flex justify-between items-center">
              <p className="w-xs">{fav.title}</p>

              <span>{fav.ratio.toFixed(1)}</span>

              <button
                onClick={() => handleOpenModal(fav)}
                className="px-6 py-3 ml-3 mr-3 text-white rounded-md bg-blue-600"
              >
                Editar
              </button>
            </div>

            <hr className="border-t-2 border-blue-500 w-full pb-3 mt-5" />
          </div>
        ))}
      </div>

      {selectedFav && (
        <RatioModal
          criterio={selectedFav}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

//* para ocultar y mostrar el panel: 
/**
import React, { useState } from 'react';

function App() {
  // 1. Definimos el estado (por defecto visible)
  const [mostrar, setMostrar] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      2. El botón cambia el estado al valor opuesto 
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'} contenido
      </button>

      3. Renderizado condicional
      {mostrar && (
        <div style={{ 
          marginTop: '10px', 
          padding: '10px', 
          border: '1px solid black' 
        }}>
          ¡Hola! Soy el contenido que aparece y desaparece.
        </div>
      )}
    </div>
  );
}

export default App;

¿Y si quieres animaciones?
Si prefieres que no desaparezca de golpe del HTML sino que solo se oculte visualmente (para usar transiciones de CSS), puedes cambiar el renderizado condicional por una clase dinámica:
jsx
<div className={mostrar ? 'visible' : 'oculto'}>
  Contenido con transiciones
</div>

*/

/* "use client";

import { useState } from "react";

import { useCriteriosStore } from "@/store";
import { Criterio2 } from "@/interfaces";

import { RatioModal } from "../ratios-panel/RatioModal";

export const RatiosPanel = () => {
  const favorites = useCriteriosStore((state) => state.favorites);
  const favoritos = Object.values(favorites);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // criterio seleccionado
  const [selectedFav, setSelectedFav] = useState<Criterio2 | null>(null);

  const handleOpenModal = (fav: Criterio2) => {
    setSelectedFav(fav);
    setIsModalOpen(true);
  };

  return (
    <div className="ml-3 mr-3">
      <div>
        <p>Criterio - Ratio</p>
      </div>

      <div className="p-2 mt-3 rounded-md overflow-hidden fade-in border">
        {favoritos.map((fav) => (
          <div key={fav.id} className="mt-2">
            <div className="flex justify-between items-center">
              <p className="w-xs">{fav.title}</p>

              <span>{fav.ratio.toFixed(1)}</span>

              <div>
                <button
                  onClick={() => handleOpenModal(fav)}
                  className="px-6 py-3 ml-3 mr-3 bg-blue-600 text-white rounded-md"
                >
                  Editar
                </button>
              </div>
            </div>

            <hr className="border-t-2 border-blue-500 w-full pb-3 mt-5" />
          </div>
        ))}
      </div>

      <RatioModal
        ratio={selectedFav?.ratio ?? 0}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
*/

/*"use client"; //

import { useCriteriosStore } from "@/store";
import { Criterio2 } from "@/interfaces";
import { useState } from "react"; //
import { RatioModal } from "../ratios-panel/RatioModal"; //

// al clickear un elemento se resalta y aparecen las flechas en el numero y en el primer decimal arriba y abajo
// se puede hacer igual al menú emergente o como explica el código de abajo


export const RatiosPanel = () => {

  const favorites = useCriteriosStore(state => state.favorites);
  const favoritos = Object.values(favorites);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); //
  // 
  return (


    <div className="ml-3 mr-3">
      <div className="">
        <p>Criterio - Ratio</p>
      </div>
      <div className="p-2 mt-3 rounded-md overflow-hidden fade-in border">
        {
          favoritos.map(fav => (

            <div key={fav.id} className="mt-2">
              <div className="flex justify-between">
                <p className="w-xs">{fav.title}</p>
                <span>{(fav.ratio).toFixed(1)}</span>
                <div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 ml-3 mr-3 bg-blue-600 text-white rounded-md"
                  >
                    Editar
                  </button>
                </div>
              </div>

              <hr className="border-t-2 border-blue-500 w-full pb-3 mt-5" />
            </div>

          )

          )
        }
      </div>



      <RatioModal
        ratio={}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2 className="text-xl font-bold">¡Hola desde el Modal!</h2>
        <p>Este es un ejemplo de ventana emergente en Next.js.</p>
      </RatioModal>
    </div>
  )
}*/
/* <p className="ml-3 mr-3">Lápiz</p> */

// grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10
//p-2 mt-3 rounded-md overflow-hidden fade-in border w-xs

/*
* 1. Crear el componente Modal
* Define un estado (isOpen) para controlar la visibilidad y usa el hook useRef para acceder a los métodos nativos del elemento dialog (como showModal() y close()).
*/

/**
"use client";
import { useRef, useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="p-6 rounded-lg shadow-xl backdrop:bg-black/50"
    >
      <div className="flex flex-col gap-4">
        {children}
        <button 
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Cerrar
        }
        </button>
      </div>
    </dialog>
  );
}
*/

/*
* 2. Usar el Modal en tu página
* En tu archivo de página (ej. page.js), importa el componente y gestiona su estado.
*/

/**
"use client";
import { useState } from "react";
import Modal from "./components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="p-10">
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-md"
      >
        Abrir Ventana Emergente
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold">¡Hola desde el Modal!</h2>
        <p>Este es un ejemplo de ventana emergente en Next.js.</p>
      </Modal>
    </main>
  );
}
*/

/*
* Accesibilidad nativa: La etiqueta <dialog> maneja automáticamente el foco del teclado y el cierre con la tecla Esc.
* Personalización: Puedes usar Tailwind CSS o CSS puro para dar estilo al fondo (usando el pseudo-elemento ::backdrop) y a la propia ventana. 
*/