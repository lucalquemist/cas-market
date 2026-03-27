// importamos los componentes

import { Footer, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({ children }: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
        { /* top */ }    
        <TopMenu />
        { /* sidebar */ }
        <Sidebar />
        {/* <div className='px-0 sm:px-10 flex sm:justify-center'> */}
        <div className='px-0 sm:px-10 sm:flex sm:justify-center'>
        { children }
        </div>
        { /* footer */ }   
        <Footer />

    </main>
  );
}