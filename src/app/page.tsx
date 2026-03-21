"use client";

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiGift, FiMapPin, FiHeart, FiStar, FiCalendar } from 'react-icons/fi';

// --- CONFIGURACIÓN DE DATOS ---
const features = [
  { icon: FiStar, text: "Filtros de Fotos tipo Instagram" },
  { icon: FiHeart, text: "Confirmación de Asistencia (Formulario integrado)" },
  { icon: FiMapPin, text: "Ubicación en Google Maps" },
  { icon: FiCalendar, text: "Integración con Calendario (Google/iCal)" },
  { icon: FiGift, text: "Mesa de Regalos / Sugerencia de Vestimenta" },
];

const steps = [
  { n: "1", title: "Elige tu Diseño", desc: "Explora nuestro catálogo exclusivo y selecciona el estilo que más te guste." },
  { n: "2", title: "Rellena los Datos", desc: "Envíanos la información de tu evento: fecha, hora, lugar, fotos, etc." },
  { n: "3", title: "Recibe y Comparte", desc: "En menos de 48h tendrás tu link listo para compartir por WhatsApp." },
];

const testData = {
  mainTitlePart1: "Celebraciones",
  mainTitlePart2: "Inolvidables.",
  subTitle: "Venta de Invitaciones Digitales Premium",
  heroDescription: "Sorprende a tus invitados desde el primer momento con una invitación digital, moderna e interactiva. Diseños únicos que reflejan tu estilo.",
  ctaButton: "Ver Diseños Exclusivos",
  howItWorksTitle: "Tu Invitación en 3 Pasos Sencillos",
  contactTitle: "¡Hablemos de tu Fiesta!",
  contactDesc: "Cuéntanos qué tienes en mente y te ayudaremos a crear la invitación perfecta. Atendemos por WhatsApp para una atención rápida y personalizada.",
  whatsappLink: "https://wa.me/yourphonenumber", // Cambia por tu número real
  footerText: "© 2026 Tu Marca Invitaciones Digitales. Hecho con ♡ en Argentina.",
};

// --- ANIMACIONES ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>{`Tu Marca | Invitaciones Premium`}</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        body { font-family: 'Plus Jakarta Sans', sans-serif; color: #1a1a1a; background-color: #fcfcfc; scroll-behavior: smooth; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="min-h-screen">
        
        {/* --- NAVBAR --- */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-semibold tracking-tight text-gray-900">
              Mendo<span className="font-light text-rose-500">Click</span>
            </a>
            <div className="flex gap-4 items-center">
              <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-rose-600 transition">Cómo Funciona</a>
              <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#designs" 
                className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase hover:bg-gray-800 transition shadow-sm"
              >
                {testData.ctaButton}
              </motion.a>
            </div>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <header className="relative pt-36 pb-24 md:pt-48 md:pb-36 bg-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full border border-rose-100 mb-6">
                <FiStar className="text-rose-400" />
                <span className="text-xs font-semibold uppercase tracking-wider">{testData.subTitle}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-gray-950 mb-6">
                {testData.mainTitlePart1} <span className="italic text-rose-500">{testData.mainTitlePart2}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light mb-10 max-w-lg leading-relaxed">
                {testData.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#designs" 
                  className="bg-gray-950 text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg shadow-gray-950/20 hover:bg-gray-800 transition w-full sm:w-auto text-center"
                >
                  {testData.ctaButton}
                </motion.a>
                <a href={testData.whatsappLink} target="_blank" className="group text-sm font-medium text-gray-700 flex items-center gap-2 hover:text-rose-600 transition">
                  O consulta por WhatsApp
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[4/3] bg-rose-50 rounded-3xl p-6 border border-rose-100 shadow-inner overflow-hidden flex items-center justify-center"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 h-full w-full overflow-hidden">
                 <img 
                  src="/Demo1.png" 
                  alt="Vista previa invitaciones"
                  className="w-full h-full object-cover rounded-xl"
                 />
              </div>
              <FiHeart className="absolute -top-6 -right-6 text-rose-200 size-24 rotate-12 opacity-50" />
            </motion.div>
          </div>
        </header>

        {/* --- CARACTERÍSTICAS --- */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2 block">Premium</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-950">Más que una invitación, una <span className="italic text-rose-500">experiencia</span></h2>
            </div>
            
            <motion.div 
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-rose-100 hover:shadow-lg transition-all duration-300">
                  <div className="bg-rose-50 size-14 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <feature.icon className="size-6 text-rose-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-800 leading-snug">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CATÁLOGO --- */}
        <section id="designs" className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-gray-950 mb-4">Nuestros Modelos</h2>
              <p className="text-lg text-gray-600 font-light">Estructuras interactivas listas para personalizar.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* --- ESTRUCTURA 1: LUZ JAZMIN --- */}
              <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="aspect-[3/4] bg-rose-50 overflow-hidden relative">
                  <img 
                    src="/Demo1.png" 
                    alt="Modelo Luz Jazmin" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-5">
                    <span className="block text-[10px] font-bold text-rose-400 uppercase tracking-[0.2em] mb-1">Estructura #1</span>
                    <span className="text-xl font-serif text-white">Luz Jazmín Premium</span>
                  </div>
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">Interactivo + Música</span>
                    <span className="text-[11px] text-gray-500 uppercase font-bold tracking-tighter">Disponible Ahora</span>
                  </div>
                  <a href="/Demo1" className="bg-rose-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-rose-600 transition shadow-lg shadow-rose-200">
                    VER DEMO →
                  </a>
                </div>
              </motion.div>

              {/* --- ESTRUCTURA 2: NUEVO DISEÑO --- */}
              <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
                  {/* Aquí puedes poner otra imagen si tienes una para el diseño 2 */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-white/20 font-serif italic text-2xl">
                    Modelo Moderno
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-5">
                    <span className="block text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-1">Estructura #2</span>
                    <span className="text-xl font-serif text-white">Minimalist Dark</span>
                  </div>
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">Elegante + Animado</span>
                    <span className="text-[11px] text-gray-500 uppercase font-bold tracking-tighter">Disponible Ahora</span>
                  </div>
                  <a href="/Demo2" className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-gray-800 transition shadow-lg shadow-gray-200">
                    VER DEMO →
                  </a>
                </div>
              </motion.div>

     
              {/* --- ESTRUCTURA 3: LUXURY GOLD --- */}
              <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="aspect-[3/4] bg-amber-50 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-[#fdfaf1] text-amber-700/20 font-serif italic text-2xl">Golden Luxury</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-5">
                    <span className="block text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] mb-1">Estructura #3</span>
                    <span className="text-xl font-serif text-white">Elegance Gold</span>
                  </div>
                </div>
                <div className="p-6 flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-900">Classic & Royal</span>
                  <a href="/Demo3" className="bg-amber-600 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-amber-700 transition">VER DEMO</a>
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
    </>
  );
}