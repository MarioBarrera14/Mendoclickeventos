"use client";

import Link from "next/link";
import { LayoutDashboard, Users, LogOut, Zap } from "lucide-react"; 
import { useRouter } from "next/navigation";
import { eventConfig as localConfig } from "@/data/event-config";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";

interface NavbarProps {
  eventName?: string | null;
}

export const Navbar = ({ eventName }: NavbarProps) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const displayName = eventName || localConfig.personal.nombre;

  return (
    <nav className="fixed top-0 w-full z-[100] py-4 px-6">
      {/* --- CONTENEDOR FLOTANTE "CRIMINAL" --- */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] px-8 py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        
        {/* LOGO / NOMBRE BRUTALISTA */}
        <Link href="/" className="group flex flex-col">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-purple-500 fill-purple-500 animate-pulse" />
            <h1 className="text-white text-2xl font-black italic tracking-tighter uppercase leading-none transition-all group-hover:text-purple-400 group-hover:skew-x-[-10deg]">
              {displayName}
            </h1>
          </div>
          <span className="text-[8px] uppercase tracking-[0.5em] font-black text-purple-500/60 mt-1 italic">
            // XV Celebration
          </span>
        </Link>

        {/* ACCIONES DE USUARIO */}
        <div className="flex items-center gap-4"> 
          
          {/* BOTÓN LOGIN (UNAUTHENTICATED) */}
          {status === "unauthenticated" && (
            <button 
              onClick={() => router.push("/users")}
              className="group relative flex items-center gap-3 bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-400 rounded-2xl px-5 py-2 transition-all duration-500 shadow-xl"
            >
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-white uppercase tracking-widest italic group-hover:scale-110 transition-transform">
                  Entrar
                </span>
              </div>
              <div className="w-8 h-8 rounded-xl bg-purple-600/20 flex items-center justify-center group-hover:bg-white transition-colors">
                <Users className="w-4 h-4 text-purple-400 group-hover:text-purple-600 transition-colors" />
              </div>
            </button>
          )}

          {/* BOTONES CUANDO ESTÁ LOGUEADA */}
          {status === "authenticated" && (
            <div className="flex items-center gap-3">
              {/* ADMIN DASHBOARD */}
              <button 
                onClick={() => router.push("/admin")}
                className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-2 hover:bg-white hover:text-black transition-all duration-500"
              >
                <span className="text-[10px] font-black uppercase tracking-widest italic hidden md:block">Dashboard</span>
                <LayoutDashboard size={18} className="text-purple-500 group-hover:text-black transition-colors" />
              </button>

              {/* LOGOUT */}
              <button 
                onClick={() => signOut({ callbackUrl: "/" })}
                className="group flex items-center justify-center w-12 h-12 bg-red-600/10 border border-red-500/20 rounded-2xl hover:bg-red-600 hover:border-red-400 transition-all duration-500"
              >
                <LogOut size={18} className="text-red-500 group-hover:text-white transition-colors" />
              </button>
            </div>
          )}

        </div>
      </motion.div>

      {/* GRADIENTE DE APOYO SUPERIOR */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent -z-10 pointer-events-none" />
    </nav>
  );
};