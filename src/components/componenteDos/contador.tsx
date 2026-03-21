"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface CountdownProps {
  eventDate?: string | null;
  eventTime?: string | null;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[75px] md:min-w-[120px] relative z-20">
      <motion.span 
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl md:text-7xl font-black italic text-white tracking-tighter drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className="text-[10px] md:text-xs text-purple-200/50 tracking-[0.4em] uppercase mt-2 font-bold">
        {label}
      </span>
    </div>
  );
}

export function Countdown({ eventDate, eventTime }: CountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Ajustado a la fecha de tu evento según el Hero
  const finalDate = eventDate || "2026-10-11";
  const finalTime = eventTime || "21:00";

  const formattedDate = useMemo(() => {
    const dateParts = finalDate.split("-");
    const dateForText = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]));
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return dateForText.toLocaleDateString('es-ES', options).toUpperCase();
  }, [finalDate]);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const target = new Date(`${finalDate}T${finalTime}:00`).getTime();
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [finalDate, finalTime]);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-48 overflow-visible">
      
      {/* FONDO DE GRADIENTE QUE CONTINÚA EL HERO */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #ddd6fe 0%, #c4b5fd 35%, #9333ea 100%)"
        }}
      />

      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-purple-900/40 text-[10px] md:text-xs uppercase font-bold"
          >
            {formattedDate}
          </motion.p>
          <h2 className="text-4xl md:text-7xl font-black italic text-black uppercase tracking-tighter drop-shadow-sm">
            Falta muy poco
          </h2>
          <div className="pt-8 flex flex-col items-center gap-2">
            <div className="h-8 w-[2px] bg-gradient-to-b from-purple-600 to-transparent" />
            <p className="text-purple-700/60 text-[9px] tracking-[0.6em] uppercase font-black italic">Cuenta Regresiva</p>
          </div>
        </div>

        {/* CONTENEDOR DEL CONTADOR */}
        <div className="flex justify-center items-center gap-4 md:gap-12 bg-black/90 backdrop-blur-md py-10 px-6 md:px-12 rounded-[2rem] border border-white/10 shadow-2xl">
          <CountdownUnit value={timeLeft.days} label="Días" />
          <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
          <CountdownUnit value={timeLeft.minutes} label="Minutos" />
          <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
          <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>

    {/* --- DIVISOR ONDULADO (Wave Divider) --- */}
{/* --- DIVISOR ONDULADO (Wave Divider) --- */}

    </section>
  );
}