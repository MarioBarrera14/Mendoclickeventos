import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

// IMPORTA TUS COMPONENTES DE PLANTILLAS (Tendrás que crearlos)
// import TemplateClassic from "@/components/templates/TemplateClassic";
// import TemplateNeon from "@/components/templates/TemplateNeon";

export default async function InvitacionPage({ params }: { params: { slug: string } }) {
  // 1. Buscamos al usuario por su SLUG e incluimos su configuración
  const user = await prisma.user.findUnique({
    where: { slug: params.slug },
    include: { eventConfig: true }
  });

  // 2. Si no existe el link, mandamos al 404
  if (!user) {
    notFound();
  }

  const config = user.eventConfig;

  return (
    <main className="min-h-screen">
      {/* 3. SWITCH DE PLANTILLAS SEGÚN LO QUE GUARDAMOS EN EL DASHBOARD */}
      {user.templateId === "DEMO1" && (
        <div className="p-10 text-center">
          <h1 className="text-4xl font-bold">{config?.eventName}</h1>
          <p className="mt-4">Estás viendo la plantilla: <strong>CLASSIC</strong></p>
          <p>Fecha: {config?.eventDate}</p>
        </div>
      )}

      {user.templateId === "DEMO2" && (
        <div className="p-10 text-center bg-black text-white">
          <h1 className="text-4xl font-bold text-fuchsia-500">{config?.eventName}</h1>
          <p className="mt-4">Estás viendo la plantilla: <strong>NEON PARTY</strong></p>
          <p>Hora: {config?.eventTime}</p>
        </div>
      )}

      {/* Si no hay coincidencia, mostramos una por defecto */}
      {!["DEMO1", "DEMO2"].includes(user.templateId) && (
        <div className="p-10 text-center">
          <h1>Invitación de {user.nombre}</h1>
          <p>Próximamente más detalles...</p>
        </div>
      )}
    </main>
  );
}