import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Importamos los templates
import { NightLights, NeonParty, GoldenBday } from "@/components/templates";

// Tipado de Props (Params es una Promesa en Next.js 15)
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generación de Metadatos Dinámicos (SEO y WhatsApp)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = await prisma.eventConfig.findFirst({
    where: { user: { slug } },
  });

  if (!config) return { title: "Invitacion no encontrada" };

  return {
    title: `Invitacion: ${config.eventName || "Mi Evento"}`,
    description: `Te espero el dia ${config.eventDate || ""} a las ${config.eventTime || ""}. No faltes!`,
    openGraph: {
      images: [config.heroImage || ""],
    },
  };
}

export default async function InvitacionDinamica({ params }: PageProps) {
  const { slug } = await params;

  // Buscamos al usuario con su configuración
  const user = await prisma.user.findUnique({
    where: { slug },
    include: { eventConfig: true },
  });

  if (!user || !user.eventConfig) {
    notFound();
  }

  const config = user.eventConfig;

  // Renderizamos según el template seleccionado
  switch (user.templateId) {
    case "DEMO1":
    case "NIGHT_LIGHTS":
      return (
        <main className="min-h-screen bg-[#0a0a0a]">
          <NightLights.Envelope musicUrl={config.musicUrl || ""}>
            <NightLights.Navbar eventName={config.eventName || "Invitacion"} />
            
            <NightLights.Hero 
              eventName={config.eventName || "Mi Evento"} 
              heroImage={config.heroImage || ""} 
            />

            <NightLights.Countdown 
              eventDate={config.eventDate || "2026-12-19"} 
              eventTime={config.eventTime || "21:00"} 
            />

            <NightLights.FotoCarousel 
              images={config.carruselImages} 
              videoUrl={config.videoUrl}
            />

            <NightLights.Details 
              dressCode={config.dressCode}
              dressDescription={config.dressDescription}
              alias={config.alias}
              cbu={config.cbu}
              bankName={config.bankName}
              holderName={config.holderName}
            />

            <NightLights.Location 
              venueName={config.venueName || "A confirmar"}
              venueAddress={config.venueAddress || ""}
              mapLink={config.mapLink || ""}
            />

            <NightLights.MusicSuggestion eventId={config.id} />    
            <NightLights.RSVP />
            
            <NightLights.Footer />
          </NightLights.Envelope>
        </main>
      );

    case "DEMO2":
    case "NEON_PARTY":
      return (
        <main className="min-h-screen bg-[#0a0a0a]">
          <NeonParty.Navbar />
          <NeonParty.Hero />
          <NeonParty.Countdown />
          <NeonParty.FotoCarousel />
          <NeonParty.Location />
          <NeonParty.Details />
          <NeonParty.RSVP />
          <NeonParty.Footer />
        </main>
      );

    case "DEMO3":
    case "GOLDEN_BDAY":
      return (
        <main className="min-h-screen bg-[#0a0a0a]">
          <GoldenBday.Navbar />
          <GoldenBday.Hero />
          <GoldenBday.Countdown />
          <GoldenBday.FotoCarousel />
          <GoldenBday.Location />
          <GoldenBday.Details />
          <GoldenBday.RSVP />
          <GoldenBday.Footer />
        </main>
      );

    default:
      return (
        <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Invitacion de {user.nombre}</h1>
            <p className="text-zinc-400">Proximamente mas detalles...</p>
          </div>
        </main>
      );
  }
}
