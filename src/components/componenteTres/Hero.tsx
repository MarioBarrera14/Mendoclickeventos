"use client";

import { motion, AnimatePresence } from "framer-motion";
import { eventConfig as localConfig } from "@/data/event-config";

interface HeroProps {
  eventName?: string | null;
  heroImage?: string | null;
}

export function Hero({ eventName, heroImage }: HeroProps) {

  const displayName = eventName || localConfig.personal.nombre;
  const currentImage = heroImage || localConfig.imagenes.hero;

  const floatingBalloon = (delay: number) => ({
    initial: { y: 20, opacity: 0 },
    animate: {
      y: [-20, 20, -20],
      opacity: 1,
      transition: {
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 1, delay }
      }
    }
  });

  return (
    <section
      className="relative w-full min-h-screen flex justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/fon.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CAPA DE DEGRADADO RADIAL ORIGINAL */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(153, 45, 45, 0) 50%, rgba(217, 119, 6, 0.43) 100%)"
        }}
      />

      {/* NUEVA CAPA: DEGRADADO DORADO OSCURO EN EL BORDE INFERIOR */}
      <div 
        className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgb(116, 73, 17) 0%, rgba(69, 39, 0, 0) 100%)"
        }}
      />

      {/* CONTENEDOR PRINCIPAL */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[950px]
          min-h-screen
          flex
          flex-col
          items-center
          justify-between
          py-10
          pt-24 md:pt-30
        "
      >

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-20"
        >
          <p className="tracking-[0.3em] text-[10px] text-amber-900 uppercase">
            You are invited to
          </p>
          <h2 className="text-amber-900 text-6xl md:text-7xl font-serif">
            Birthday
          </h2>
          <h1 className="text-7xl md:text-[110px] font-script -mt-4 text-amber-900">
            Party
          </h1>
        </motion.div>

        {/* CENTRO (FOTO Y GLOBOS) */}
        <div className="relative flex items-center justify-center w-full">
          
          {/* FOTO CENTRAL */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="
              relative
              w-[260px]
              h-[260px]
              md:w-[420px]
              md:h-[420px]
              rounded-full
              border-[8px]
              border-amber-400
              p-3
              bg-white
              z-30 
              shadow-xl
            "
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <AnimatePresence>
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* GLOBOS */}
          <motion.img
            variants={floatingBalloon(0)}
            initial="initial"
            animate="animate"
            src="/Globos.png"
            className="absolute left-0 top-20 w-80 z-10"
          />
          <motion.img
            variants={floatingBalloon(2)}
            initial="initial"
            animate="animate"
            src="/Globos.png"
            className="absolute right-0 bottom-40 w-80 scale-x-[-1] z-10"
          />

          <motion.img
            variants={floatingBalloon(1)}
            initial="initial"
            animate="animate"
            src="/glo1.png"
            className="absolute -left-48 -top-48 w-[320px] z-10"
          />
          <motion.img
            variants={floatingBalloon(2)}
            initial="initial"
            animate="animate"
            src="/glo1.png"
            className="absolute -right-48 -bottom-48 w-[320px] scale-x-[-1] z-10"
          />
        </div>

        {/* FECHA */}
        <div className="text-center pb-12 relative z-30">
          <div className="border-y border-amber-300 py-3 flex gap-3 justify-center bg-white/5 backdrop-blur-sm rounded-lg px-4">
            <span className="text-amber-900">NOV</span>
            <span className="text-4xl text-amber-700 font-bold">23</span>
            <span className="text-amber-900">9:00 AM</span>
          </div>
          <h3 className="tracking-[0.3em] text-xs mt-4 text-amber-900 font-bold">
            {displayName}
          </h3>
          <p className="text-xs text-amber-900/80">
            {localConfig.personal.ubicacion}
          </p>
        </div>

      </div>
    </section>
  );
}