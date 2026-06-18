"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Home, IndianRupee } from "lucide-react";
import { Button } from "../ui/Button";

export const PropertySearch = () => {
  return (
    <section id="search" className="py-24 bg-black-main relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gold" />
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Find Your Space</span>
            <span className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced <span className="italic font-light text-gray-300">Property Search</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto glass-card p-6 md:p-8 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Location */}
            <div className="relative group">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Location</label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-4 w-5 h-5 text-gold group-focus-within:text-white transition-colors" />
                <select className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none outline-none focus:border-gold/50 transition-colors cursor-pointer">
                  <option value="">Any Location in Gurugram</option>
                  <option value="dlf-5">DLF Phase 5</option>
                  <option value="golf-course">Golf Course Road</option>
                  <option value="golf-course-ext">Golf Course Extension</option>
                  <option value="dwarka-exp">Dwarka Expressway</option>
                  <option value="new-gurugram">New Gurugram</option>
                </select>
              </div>
            </div>

            {/* Property Type */}
            <div className="relative group">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Property Type</label>
              <div className="relative flex items-center">
                <Home className="absolute left-4 w-5 h-5 text-gold group-focus-within:text-white transition-colors" />
                <select className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none outline-none focus:border-gold/50 transition-colors cursor-pointer">
                  <option value="">All Types</option>
                  <option value="luxury-apartment">Luxury Apartment</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="villa">Independent Villa</option>
                  <option value="commercial">Commercial Office</option>
                  <option value="retail">Retail Shop</option>
                </select>
              </div>
            </div>

            {/* Budget */}
            <div className="relative group">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Budget (₹)</label>
              <div className="relative flex items-center">
                <IndianRupee className="absolute left-4 w-5 h-5 text-gold group-focus-within:text-white transition-colors" />
                <select className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none outline-none focus:border-gold/50 transition-colors cursor-pointer">
                  <option value="">Any Budget</option>
                  <option value="1-5">1 Cr - 5 Cr</option>
                  <option value="5-10">5 Cr - 10 Cr</option>
                  <option value="10-20">10 Cr - 20 Cr</option>
                  <option value="20+">20 Cr +</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <Button size="lg" className="w-full h-[58px] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
