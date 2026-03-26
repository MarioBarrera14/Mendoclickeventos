// Imports dirigidos a la carpeta del segundo diseño: componenteDos
import { FotoCarousel } from "@/components/componenteTres/carrousell";
import { Countdown } from "@/components/componenteTres/contador";
import { Details } from "@/components/componenteTres/detalles";
import { Footer } from "@/components/componenteTres/Foter";
import { Hero } from "@/components/componenteTres/Hero";
import { Location } from "@/components/componenteTres/locacion";
import { Navbar } from "@/components/componenteTres/Nabvar";
import { RSVP } from "@/components/componenteTres/RSVP";

import { prisma } from "@/lib/prisma"; 

export default async function Demo3Page() {
  // Traemos la configuración de la DB (puedes usar el ID 2 si ya lo creaste, o el 1 para pruebas)




 return (
    <main className="min-h-screen bg-[#0a0a0a]">
      
        
        {/* 1. NAVBAR: Ahora recibe el nombre de la DB */}
        <Navbar />
        
        {/* 2. HERO: También usa eventName */}
        <Hero 
        />
        {/* 3. CONTADOR */}
        <Countdown 
        />

        
                {/* 4. CAROUSEL */}
                <FotoCarousel 
                />
                  <Location />
                 <Details/>
                        <RSVP />
                
                    <Footer />
    </main>
  );
}