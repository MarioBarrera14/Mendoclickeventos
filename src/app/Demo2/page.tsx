// Imports corregidos para la carpeta compLuzJazmin
import { Countdown } from "@/components/componenteDos/contador";
import { Details } from "@/components/componenteDos/detalles";
import { Footer } from "@/components/componenteDos/Footer";
import { FotoCarousel } from "@/components/componenteDos/galeria";
import { Hero } from "@/components/componenteDos/Hero";
import { RSVP } from "@/components/componenteDos/RSVP";
import { Location } from "@/components/componenteDos/locacion";
import { prisma } from "@/lib/prisma"; 
import { Navbar } from "@/components/componenteDos/Navbar";

export default async function Home() {
  // 1. Traemos la configuración de la DB
  const config = await prisma.eventConfig.findUnique({
    where: { id: 1 },
  });

  // Si no existe la fila con ID 1, mostramos un aviso
  if (!config) return <div className="text-white text-center py-20">No se encontró la configuración en la base de datos.</div>;

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
        
  <Navbar/>
        
        {/* 2. HERO: También usa eventName */}
        <Hero 
          eventName={config.eventName || "Luz Jazmin"} 
          heroImage={config.heroImage} 
        />
        <Countdown/>
        <FotoCarousel/>
        <Location/>
        <Details/>
        <RSVP/>
        <Footer/>
    </main>
  );
}