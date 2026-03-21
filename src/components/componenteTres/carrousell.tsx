"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX, Play, Pause, Film, Camera, Sparkles } from "lucide-react";
import { eventConfig as localConfig } from "@/data/event-config";

const floatingConfetti = (delay: number) => ({
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 45, -45, 0],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 5 + Math.random() * 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

interface FotoCarouselProps {
  images?: string | null;
  videoUrl?: string | null;
}

export function FotoCarousel({ images, videoUrl }: FotoCarouselProps) {
  const { imagenes: localImagenes } = localConfig;
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Efecto Parallax para las filas
  const yOdd = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yEven = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const fotos = (() => {
    try {
      if (images) {
        const urls = JSON.parse(images);
        return urls.map((url: string, i: number) => ({
          id: i,
          url: url || localImagenes.hero,
        }));
      }
    } catch (e) { console.error(e); }
    return [
      { id: 1, url: localImagenes.hero },
      { id: 2, url: "/img/foto2.jpg" },
      { id: 3, url: "/img/foto3.jpg" },
    ];
  })();

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={containerRef} className="relative py-32 bg-[#fdfdfd] overflow-hidden">
      
      {/* Capas de fondo */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(153, 45, 45, 0) 50%, rgba(217, 119, 6, 0.1) 100%)" }} />

      {/* --- ADORNO: CONFETI DORADO --- */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          variants={floatingConfetti(i * 0.5)}
          animate="animate"
          className="absolute z-10 text-amber-400/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <Sparkles size={Math.random() * 20 + 10} fill="currentColor" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-30">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-2">
            <Camera className="text-amber-600/40 mb-2" size={32} strokeWidth={1} />
            <span className="text-[11px] tracking-[0.6em] text-amber-800/60 uppercase font-bold">
              Galería de Momentos
            </span>
            <h3 className="text-5xl md:text-7xl font-serif italic text-amber-950 mt-2">
              Recuerdos Eternos
            </h3>
            <div className="w-16 h-[2px] bg-amber-200 mt-6" />
          </motion.div>
        </div>

        {/* Grid dinámico: Se ajusta según la cantidad de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 max-w-7xl mx-auto">
          {fotos.map((foto, i) => (
            <motion.div
              key={foto.id}
              style={{ y: i % 2 === 0 ? yOdd : yEven }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative group cursor-pointer transition-all duration-700`}
            >
              {/* Marco estilo Editorial/Polaroid */}
              <div className="bg-white p-4 pb-14 shadow-xl shadow-amber-900/5 border border-amber-100/30 transform transition-transform group-hover:scale-[1.02] group-hover:-rotate-1">
                <div className="aspect-[4/5] overflow-hidden relative bg-amber-50">
                  <img 
                    src={foto.url} 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000" 
                    alt={`Foto ${i + 1}`}
                  />
                </div>
                {/* Detalle decorativo abajo de cada foto */}
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <div className="text-[10px] font-serif italic text-amber-900/40 tracking-widest uppercase">
                    Captured Moment {i + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- VIDEO EXPERIENCE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-48 group"
        >
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(116,73,17,0.4)] border-[10px] border-white bg-neutral-900">
            {videoUrl ? (
              <>
                <video 
                  ref={videoRef} 
                  src={videoUrl} 
                  className="w-full h-full object-cover" 
                  loop muted={isMuted} autoPlay playsInline 
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
                
                <button 
                  onClick={togglePlay}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-amber-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
                >
                  {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                </button>

                <div className="absolute bottom-0 left-0 w-full p-10 flex items-end justify-between text-white">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-amber-400 font-bold">
                      <span className="w-8 h-[1px] bg-amber-400" /> Cinema Mode
                    </div>
                    <h4 className="text-3xl font-serif italic">Nuestra Película</h4>
                  </div>
                  <button 
                    onClick={toggleMute} 
                    className="p-5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-amber-600 transition-all"
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-amber-50/20 italic text-amber-900/40 uppercase tracking-[0.3em] text-xs">
                Video en preparación...
              </div>
            )}
          </div>
        </motion.div>
      </div>
      {/* SVG Ondas final */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-50 transform translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-32" style={{ transform: 'rotate(180deg)' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fdfaf1" />
        </svg>
      </div>
     
    </section>
  );
}