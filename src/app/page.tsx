"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FiGift, FiMapPin, FiHeart, FiStar, FiCalendar } from 'react-icons/fi';
import { IconType } from 'react-icons';

// --- TIPOS ---
interface Feature {
  icon: IconType;
  text: string;
}

interface TestData {
  mainTitlePart1: string;
  mainTitlePart2: string;
  subTitle: string;
  heroDescription: string;
  ctaButton: string;
  whatsappLink: string;
  footerText: string;
}

// --- CONFIGURACIÓN DE DATOS ---
const features: Feature[] = [
  { icon: FiStar, text: "Filtros de Fotos tipo Instagram" },
  { icon: FiHeart, text: "Confirmación de Asistencia (WhatsApp)" },
  { icon: FiMapPin, text: "Ubicación en Google Maps" },
  { icon: FiCalendar, text: "Integración con Calendario" },
  { icon: FiGift, text: "Mesa de Regalos & Dress Code" },
];

const testData: TestData = {
  mainTitlePart1: "Celebraciones",
  mainTitlePart2: "Inolvidables.",
  subTitle: "Venta de Invitaciones Digitales Premium",
  heroDescription: "Sorprende a tus invitados desde el primer momento con una invitación digital, moderna e interactiva. Diseños únicos que reflejan tu estilo.",
  ctaButton: "Ver Diseños Exclusivos",
  whatsappLink: "https://wa.me/tu-numero-aqui", 
  footerText: `© ${new Date().getFullYear()} MendoClick. Hecho con ♡ en Mendoza.`,
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function LandingPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Head>
        <title>MendoClick | Invitaciones Premium</title>
      </Head>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
            Mendo<span className="font-light text-rose-500">Click</span>
          </Link>
          <div className="flex gap-4 items-center">
            <a href="#designs" className="text-sm font-medium text-gray-700 hover:text-rose-600 transition">Diseños</a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={testData.whatsappLink} 
              className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm"
            >
              Comprar
            </motion.a>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="initial" animate="animate" variants={fadeInUp} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full border border-rose-100 mb-6">
              <FiStar className="text-rose-400" />
              <span className="text-xs font-semibold uppercase tracking-wider">{testData.subTitle}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-gray-950 mb-6">
              {testData.mainTitlePart1} <span className="italic text-rose-500">{testData.mainTitlePart2}</span>
            </h1>
            <p className="text-lg text-gray-600 font-light mb-10 max-w-lg">
              {testData.heroDescription}
            </p>
            <Link href="#designs" className="bg-gray-950 text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg hover:bg-gray-800 transition block sm:inline-block text-center">
              {testData.ctaButton}
            </Link>
          </motion.div>
        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200"
>
  <div className="aspect-video sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-video">
    <img 
      src="/prese1.png" 
      className="w-full h-full object-contain md:object-cover bg-gray-50" 
      alt="Hero Demo" 
    />
  </div>
</motion.div>
        </div>
      </header>

      {/* --- CARACTERÍSTICAS --- */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 text-center flex flex-col items-center">
              <f.icon className="size-6 text-rose-500 mb-3" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-800 leading-tight">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CATÁLOGO --- */}
      <section id="designs" className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-950 mb-16 italic">Nuestros Modelos</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            
            {/* MODELO 1: BLANCO Y NEGRO (Ruta Demo1) */}
            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="aspect-[3/4] relative">
                <img src="/Demo1.png" className="w-full h-full object-cover" alt="Black & White" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 text-left">
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Modelo #1</span>
                  <h3 className="text-xl font-serif text-white">Classic Night Lights</h3>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center bg-[#111]">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">Elegante & B&W</span>
                <Link href="/Demo1" className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black hover:bg-rose-500 hover:text-white transition uppercase">
                  Ver Demo
                </Link>
              </div>
            </motion.div>

            {/* MODELO 2: DISCO (Ruta Demo2) */}
            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="aspect-[3/4] relative">
                <img src="/Demos2.png" className="w-full h-full object-cover" alt="Disco Party" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 text-left">
                  <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest">Modelo #2</span>
                  <h3 className="text-xl font-serif text-white">Neon Party XV</h3>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center bg-[#2d1b4d]">
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest italic">Interactivo + Music</span>
                <Link href="/Demo2" className="bg-purple-500 text-white px-6 py-2 rounded-full text-[10px] font-black hover:bg-white hover:text-purple-900 transition uppercase">
                  Ver Demo
                </Link>
              </div>
            </motion.div>

            {/* MODELO 3: DORADO (Ruta Demo3) */}
            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="aspect-[3/4] relative">
                <img src="/Demo3.png" className="w-full h-full object-cover" alt="Gold Luxury" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a3a1e]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 text-left">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Modelo #3</span>
                  <h3 className="text-xl font-serif text-white">Golden Birthday</h3>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center bg-[#fdfaf1]">
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest italic">Classic & Royal</span>
                <Link href="/Demo3" className="bg-amber-600 text-white px-6 py-2 rounded-full text-[10px] font-black hover:bg-amber-700 transition uppercase">
                  Ver Demo
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
        {/* --- FOOTER --- */}
        <footer className="py-20 bg-gray-50 border-t border-gray-100 text-center">
          <div className="container mx-auto px-4">
            <a href="#" className="text-xl font-semibold tracking-tight text-gray-900 mb-4 block">
              Mendo<span className="font-light text-rose-500">Click</span>
            </a>
            <p className="text-sm text-gray-500 font-light max-w-sm mx-auto mb-8">
              Creando invitaciones que quedan en el corazón de tus invitados para siempre.
            </p>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{testData.footerText}</p>
          </div>
        </footer>
      </div>
  );
}