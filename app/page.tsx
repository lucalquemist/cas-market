import { FaqList } from '@/components';
import { initialData } from '@/seed/seed';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface SeedFAQ {
    id: number;
    pregunta: string;
    respuesta: string;
}

export default function Home() {

  redirect('/criterios');

  const faqs = initialData.faqs as SeedFAQ[];
  console.log(faqs);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className='flex gap-7'>
          <h1>Preguntas Frecuentes</h1>
          <Link 
            href="/criterios"
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/.04 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
          >
            Ir al Sitio Web
          </Link>
        </div>
        <FaqList
          faqs = {faqs}
        />

        {/*  */}

        <Link 
          href="/criterios"
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/.04 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
        >
          Ir al Sitio Web
        </Link>
      </main>
    </div>
  );
}
/**
 * <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
 */