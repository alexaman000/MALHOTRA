"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, MessageCircle, Calendar, Navigation, Clock, Globe } from "lucide-react";
import { Button } from "../ui/Button";

export const MapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={containerRef} className="relative py-24 bg-black-main overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gold" />
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Get In Touch</span>
            <span className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Visit Our <span className="italic font-light text-gray-300">Headquarters</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Floating Glass Information Card (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full glass-card p-8 md:p-10 rounded-3xl border border-gold/30 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Animated Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Malhotra Estates</h2>
              <p className="text-gold-light text-sm tracking-widest uppercase mb-8 font-medium">Headquarters</p>

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                    <MapPin className="text-gold w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-semibold">Address</p>
                    <p className="text-gray-200 font-medium leading-relaxed">Sector 83,<br/>Gurugram, Haryana 122012<br/>India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                    <Phone className="text-gold w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-semibold">Phone</p>
                    <p className="text-gray-200 font-medium">+91 93552 11735</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                    <Globe className="text-gold w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-semibold">Website</p>
                    <p className="text-gray-200 font-medium">www.malhotraestates.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                    <Clock className="text-gold w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-semibold">Hours</p>
                    <p className="text-green-400 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      Open 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-auto">
              <Button size="lg" className="w-full col-span-2 text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              
              <a href="https://wa.me/919355211735" target="_blank" rel="noreferrer" className="w-full">
                <Button variant="outline" size="lg" className="w-full text-sm px-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black-main transition-colors">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
              
              <a href="tel:+919355211735" className="w-full">
                <Button variant="outline" size="lg" className="w-full text-sm px-2 hover:bg-white/10 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>

              <Button variant="ghost" size="lg" className="w-full text-sm col-span-2 hover:bg-white/5 border border-white/10 mt-2">
                <Calendar className="w-4 h-4 mr-2 text-gold" />
                Book Site Visit
              </Button>
            </div>
          </motion.div>

          {/* Map Container (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl"
          >
            {/* We apply CSS filters to the iframe to create a "Dark Mode" luxury look */}
            <iframe 
              src="https://maps.google.com/maps?q=Sector%2083,%20Gurugram,%20Haryana%20122012,%20India&t=m&z=14&output=embed&iwloc=near" 
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
                position: "absolute",
                top: 0,
                left: 0,
                filter: "invert(100%) hue-rotate(180deg) brightness(85%) contrast(105%) saturate(0%)" 
              }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
