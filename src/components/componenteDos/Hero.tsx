"use client";

import { motion } from "framer-motion";
import { eventConfig as localConfig } from "@/data/event-config";

interface HeroProps {
  eventName?: string | null;
  heroImage?: string | null;
}

export function Hero({ eventName, heroImage }: HeroProps) {
  const displayName = eventName || localConfig.personal.nombre;
  const currentImage = heroImage || "/img/ChicaLuces.png";

  return (
    <section 
      className="relative w-full h-screen flex flex-col items-center justify-center font-sans overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #9333ea 0%, #9333ea 35%, #c4b5fd 65%, #ddd6fe 100%)"
      }}
    >
      
      {/* --- DECORACIÓN DE FONDO --- */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-400/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/20 blur-[100px] rounded-full" />

{/* Partículas animadas - Cantidad aumentada para efecto inmersivo */}
{[...Array(40)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute bg-white rounded-full pointer-events-none"
    style={{
      // Mezcla de tamaños para dar profundidad (unas más lejos que otras)
      width: Math.random() * 3 + 1 + 'px',
      height: Math.random() * 3 + 1 + 'px',
    }}
    initial={{ 
      top: `${Math.random() * 100}%`, 
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.1,
      scale: Math.random()
    }}
    animate={{ 
      // Movimiento errático sutil
      y: [0, -(Math.random() * 50 + 20), 0],
      x: [0, (Math.random() * 20 - 10), 0],
      opacity: [0.1, 0.8, 0.1],
      scale: [1, 1.3, 1]
    }}
    transition={{ 
      duration: 4 + Math.random() * 6, 
      repeat: Infinity,
      delay: Math.random() * 5,
      ease: "easeInOut"
    }}
  />
))}
        {/* Código de barras */}
        <div className="absolute bottom-32 right-10 z-10 mix-blend-multiply opacity-60">
          <img 
            src="/cod.png" 
            alt="Ticket Code" 
            className="w-24 md:w-44 grayscale"
          />
        </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-20 flex flex-col items-center text-center text-white px-4 w-full max-w-2xl">
        
        {/* Cabecera */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="bg-black/80 text-white px-6 py-1 tracking-widest text-[10px] md:text-[12px] font-bold uppercase rounded-full shadow-lg backdrop-blur-sm">
            ¡Gracias por acompañarme!
          </div>
        </motion.div>

        {/* --- FOTO CENTRAL Y XV --- */}
        <div className="relative flex flex-col items-center w-full my-4">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: [0, -15, 0], opacity: 1 }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8 }
            }}
            className="z-30 mb-[-50px] md:mb-[-80px]"
          >
            <img 
              src="/xv.png" 
              alt="XV" 
              className="w-40 md:w-64 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
            />
          </motion.div>

          <div className="relative w-[300px] md:w-[420px] aspect-[4/5] z-20">
            <div 
              className="absolute inset-0 bg-black/40 blur-lg translate-x-4 translate-y-5"
              style={{ clipPath: "polygon(0% 15%, 85% 0%, 100% 85%, 10% 100%)" }}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-full z-20"
            >
              <div 
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 md:w-40 h-10 z-40 rotate-[-2deg] bg-white/20 backdrop-blur-md border-x border-white/30 shadow-sm"
                style={{ clipPath: "polygon(2% 0%, 98% 2%, 100% 95%, 0% 100%)" }}
              />

              <div 
                className="absolute inset-0 bg-white shadow-xl"
                style={{ clipPath: "polygon(5% 0, 100% 5%, 95% 100%, 0% 95%)" }} 
              />
              
              <div 
                className="absolute inset-3 overflow-hidden bg-neutral-100"
                style={{ clipPath: "polygon(5% 0, 100% 5%, 95% 100%, 0% 95%)" }} 
              >
                <img 
                  src={currentImage} 
                  className="w-full h-full object-cover" 
                  alt="Foto" 
                  style={{
                    maskImage: "radial-gradient(circle, black 65%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(circle, black 65%, transparent 100%)"
                  }}
                />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,1)] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Nombre y Fecha */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase drop-shadow-2xl mt-12 text-black"
        >
          {displayName}
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-6"
        >
          <div className="bg-black text-white px-6 py-2 inline-block text-lg md:text-2xl font-mono tracking-widest rounded-md font-bold shadow-xl">
            11 / 10 / 2026
          </div>
        </motion.div>

      </div>

    </section>
  );
}