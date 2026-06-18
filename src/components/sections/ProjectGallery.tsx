"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const gallery = [
  { id: 1, src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop", span: "col-span-1 row-span-1" },
];

export const ProjectGallery = () => {
  return (
    <section className="py-24 bg-black-dark relative overflow-hidden">
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
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Exquisite Spaces</span>
            <span className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Project <span className="italic font-light text-gray-300">Gallery</span>
          </h2>
          <p className="text-gray-400">A visual journey through some of the finest properties we've curated.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 md:grid-rows-3 gap-4 h-[1200px] md:h-[800px]">
          {gallery.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${image.span} border border-white/5`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <img 
                src={image.src} 
                alt="Luxury Property" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
