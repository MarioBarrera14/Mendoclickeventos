// Imports corregidos para la carpeta compLuzJazmin
import { Hero } from "@/components/compLuzJazmin/Hero";
import { Countdown } from "@/components/compLuzJazmin/Countdownn"; 
import { Location } from "@/components/compLuzJazmin/Location";
import { Details } from "@/components/compLuzJazmin/Details";
import { RSVP } from "@/components/compLuzJazmin/RSVP";
import { Footer } from "@/components/compLuzJazmin/Footer";
import Envelope from "@/components/compLuzJazmin/Envelope";
import { FotoCarousel } from "@/components/compLuzJazmin/carrousell"; 
import { MusicSuggestion } from "@/components/compLuzJazmin/GuestbookAction";
import { Navbar } from "@/components/compLuzJazmin/Navbar";
import { prisma } from "@/lib/prisma"; 

export default async function Home() {
  // 1. Traemos la configuración de la DB
  const config = await prisma.eventConfig.findUnique({
    where: { id: 1 },
  });

  // Si no existe la fila con ID 1, mostramos un aviso
  if (!config) return <div className="text-white text-center py-20">No se encontró la configuración en la base de datos.</div>;

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Envelope musicUrl={config.musicUrl || ""}>
        
        {/* 1. NAVBAR: Ahora recibe el nombre de la DB */}
        <Navbar eventName={config.eventName} />
        
        {/* 2. HERO: También usa eventName */}
        <Hero 
          eventName={config.eventName || "Luz Jazmin"} 
          heroImage={config.heroImage} 
        />

        {/* 3. CONTADOR */}
        <Countdown 
          eventDate={config.eventDate || "2026-12-19"} 
          eventTime={config.eventTime || "21:00"} 
        />

        {/* 4. CAROUSEL */}
        <FotoCarousel 
          images={config.carruselImages} 
          videoUrl={config.videoUrl} 
        />

        {/* 5. DETALLES: Vestimenta y Regalos */}
        <Details 
          dressCode={config.dressCode}
          dressDescription={config.dressDescription}
          alias={config.alias}
          cbu={config.cbu}
          bankName={config.bankName}
          holderName={config.holderName}
        />

        {/* 6. UBICACIÓN */}
        <Location 
          venueName={config.venueName}
          venueAddress={config.venueAddress}
          mapLink={config.mapLink}
        />

        {/* 7. EXTRAS Y CIERRE */}
        <MusicSuggestion />     
        <RSVP />
        <Footer />
      </Envelope>
    </main>
  );
}