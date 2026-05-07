"use client";

import { useEffect, useRef, useState } from "react";

import { Criterio2 } from "@/interfaces";
import { useCriteriosStore } from "@/store";

interface Props {
  criterio: Criterio2;
  isOpen: boolean;
  onClose: () => void;
}

export const RatioModal = ({
  criterio,
  isOpen,
  onClose,
}: Props) => {
  const dialogRef =
    useRef<HTMLDialogElement | null>(null);

  const updateFavoriteRatio =
    useCriteriosStore(
      (state) => state.updateFavoriteRatio
    );

  const [value, setValue] = useState(
    criterio.ratio
  );

  useEffect(() => {
    setValue(criterio.ratio);
  }, [criterio]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const increaseD = () => {
    const newValue = Number((value + 0.1).toFixed(1));

    setValue(newValue);
    
    updateFavoriteRatio(criterio.id, newValue);
  };

  const decreaseD = () => {
    const newValue = Number((value - 0.1).toFixed(1));

    setValue(newValue);

    updateFavoriteRatio(criterio.id, newValue);
  };

  const increaseU = () => {
    const newValue = Number((value + 1.0).toFixed(1));

    setValue(newValue);
    
    updateFavoriteRatio(criterio.id, newValue);
  };

  const decreaseU = () => {
    const newValue = Number((value - 1.0).toFixed(1));

    setValue(newValue);

    updateFavoriteRatio(criterio.id, newValue);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      className="p-6 rounded-xl shadow-xl backdrop:bg-black/50"
    >
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-xl font-bold">
          {criterio.title}
        </h2>

        <div className="flex items-center gap-5">
          <button
            onClick={increaseU}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            ↑
          </button>
          <button
            onClick={decreaseU}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            ↓
          </button>

          <span className="text-4xl font-bold">
            {value.toFixed(1)}
          </span>

          <button
            onClick={increaseD}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            ↑
          </button>
          <button
            onClick={decreaseD}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            ↓
          </button>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Cerrar
        </button>
      </div>
    </dialog>
  );
};

/* "use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  ratio: number;
  isOpen: boolean;
  onClose: () => void;
}

export const RatioModal = ({ ratio, isOpen, onClose }: Props) => {

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [value, setValue] = useState(ratio);

  // sincroniza el valor cuando cambia el ratio seleccionado
  useEffect(() => {
    setValue(ratio);
  }, [ratio]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const increase = () => {
    setValue((prev) => Number((prev + 0.1).toFixed(1)));
  };

  const decrease = () => {
    setValue((prev) => Number((prev - 0.1).toFixed(1)));
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      className="p-6 rounded-xl shadow-xl backdrop:bg-black/50"
    >
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-xl font-bold">
          Editar Ratio
        </h2>

        <div className="flex items-center gap-4">
          <button
            onClick={decrease}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            ↓
          </button>

          <span className="text-3xl font-bold">
            {value.toFixed(1)}
          </span>

          <button
            onClick={increase}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            ↑
          </button>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Cerrar
        </button>
      </div>
    </dialog>
  );
}; */


/*"use client";

import { useRef, useEffect, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const RatioModal = ({ isOpen, onClose, children }: ModalProps) => {
  
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
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
        </button>
      </div>
    </dialog>
  );
}*/

/*
* 1. Crear el componente Modal
* Define un estado (isOpen) para controlar la visibilidad y usa el hook useRef para acceder a los métodos nativos del elemento dialog (como showModal() y close()).
*/

/*
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