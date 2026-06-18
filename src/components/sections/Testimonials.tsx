"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Vikram Singhania",
    role: "NRI Investor",
    text: "Malhotra's Estates made purchasing my penthouse in DLF Phase 5 an absolute breeze. Their attention to detail, transparency, and premium service are unmatched in Gurugram.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjali Desai",
    role: "Corporate Executive",
    text: "Finding a luxury villa that met all my family's needs seemed daunting until I met this team. They curated the perfect list of properties and handled the documentation flawlessly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Business Owner",
    text: "I've worked with many real estate consultants, but Malhotra's Estates stands out. Their knowledge of the commercial real estate market helped me secure the perfect office space.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[150px] pointer-events-none" />

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
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Client Stories</span>
            <span className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Hear From Our <span className="italic font-light text-gray-300">Clients</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                  pointerEvents: index === currentIndex ? "auto" : "none"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center text-center p-8 glass rounded-3xl border border-white/5 shadow-2xl"
              >
                <Quote className="w-12 h-12 text-gold/30 mb-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-200 font-serif leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gold text-sm uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-gold w-8" : "bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
