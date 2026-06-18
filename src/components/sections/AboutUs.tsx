"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/Button";

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-black-dark relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Video Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
              alt="Luxury Real Estate Developer" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold text-white transition-all group-hover:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <Play className="w-8 h-8 ml-1" />
              </button>
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-8 left-8 z-30 glass p-6 rounded-2xl border border-white/10 shadow-2xl"
            >
              <p className="text-4xl font-serif font-bold text-gold mb-1">10+</p>
              <p className="text-white text-sm font-medium uppercase tracking-wider">Years of<br/>Excellence</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">About Malhotra's</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Redefining <span className="italic font-light text-gray-300">Luxury</span> Real Estate in Gurugram
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Founded on the principles of trust, transparency, and tailored service, Malhotra's Estates has grown to become Gurugram's most respected luxury real estate consultancy.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We specialize in curating exclusive residential and commercial spaces for discerning clients. Our deep understanding of the market, coupled with an extensive network of top-tier developers like DLF, M3M, and Emaar, ensures that you always get the best properties at the best value.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10 pb-10 border-b border-white/10">
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-gray-500 text-sm">To provide a transparent, seamless, and luxurious property buying experience.</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Our Vision</h4>
                <p className="text-gray-500 text-sm">To be the undisputed leader in India's premium real estate sector.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <img src="https://ui-avatars.com/api/?name=Hemant+Malhotra&background=D4AF37&color=000" alt="Founder" className="w-16 h-16 rounded-full border-2 border-gold p-1" />
              <div>
                <p className="text-white font-bold text-lg">Hemant Malhotra</p>
                <p className="text-gold text-sm uppercase tracking-wider">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
