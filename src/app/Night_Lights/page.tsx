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
import { notFound } from "next/navigation";
import { Metadata } from "next";

// 1. Tipado de Props (Params es una Promesa en Next.js 15)
interface PageProps {
  params: Promise<{ slug: string }>;
}

// 2. Generación de Metadatos Dinámicos (SEO y WhatsApp)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = await prisma.eventConfig.findFirst({
    where: { user: { slug } },
  });

  if (!config) return { title: "Invitación no encontrada" };

  return {
    title: `Invitación: ${config.eventName || "Mi Evento"}`,
    description: `Te espero el día ${config.eventDate || ""} a las ${config.eventTime || ""}. ¡No faltes!`,
    openGraph: {
      images: [config.heroImage || ""],
    },
  };
}

export default async function InvitacionDinamica({ params }: PageProps) {
  // 3. Resolvemos la promesa de params
  const { slug } = await params;

  // 4. Buscamos la configuración en la base de datos
  const config = await prisma.eventConfig.findFirst({
    where: {
      user: {
        slug: slug
      }
    },
  });

  // 5. Si el slug no existe, 404
  if (!config) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Envelope envuelve todo para manejar la apertura del sobre 
        y disparar el play del musicUrl.
      */}
      <Envelope musicUrl={config.musicUrl || ""}>
        
        <Navbar eventName={config.eventName || "Invitación"} />
        
        <Hero 
          eventName={config.eventName || "Mi Evento"} 
          heroImage={config.heroImage || ""} 
        />

        <Countdown 
          eventDate={config.eventDate || "2026-12-19"} 
          eventTime={config.eventTime || "21:00"} 
        />

        {/* Pasamos el JSON string de imágenes y el videoUrl. 
          El componente FotoCarousel debe hacer el JSON.parse internamente.
        */}
        <FotoCarousel 
          images={config.carruselImages} 
          videoUrl={config.videoUrl}
        />

   <Details 
        dressCode={config.dressCode}
        dressDescription={config.dressDescription}
        alias={config.alias}
        cbu={config.cbu}
        bankName={config.bankName}
        holderName={config.holderName}
      />

        <Location 
          venueName={config.venueName || "A confirmar"}
          venueAddress={config.venueAddress || ""}
          mapLink={config.mapLink || ""}
        />

        {/* Pasamos el config.id para que las sugerencias y el RSVP 
          queden vinculados a este evento específico en la base de datos.
        */}
        <MusicSuggestion/>    
        <RSVP />
        
        <Footer />
      </Envelope>
    </main>
  );
}