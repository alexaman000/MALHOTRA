"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ArrowUp, Calendar } from "lucide-react";

export const FloatingControls = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass bg-black/60 flex items-center justify-center text-white hover:text-gold hover:border-gold transition-all"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Book Visit */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="glass-card bg-black/80 px-5 py-3 rounded-full flex items-center gap-2 text-gold font-medium border border-gold/30 hover:border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
      >
        <Calendar size={18} />
        <span className="text-sm">Book Site Visit</span>
      </motion.button>

      {/* Quick Actions Row */}
      <div className="flex gap-3 mt-1">
        {/* Call */}
        <motion.a
          href="tel:+919355211735"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-white shadow-lg relative group"
        >
          <div className="absolute inset-0 rounded-full border border-white/40 group-hover:animate-ping" />
          <Phone size={20} />
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/919355211735"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-500 to-green-400 flex items-center justify-center text-white shadow-[0_0_15px_rgba(34,197,94,0.4)] relative group"
        >
          <div className="absolute inset-0 rounded-full border border-green-400 group-hover:animate-ping" />
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </div>
  );
};
