"use client";

import { motion } from "framer-motion";
import { Search, FileCheck, Key, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    desc: "We understand your unique requirements, budget, and lifestyle preferences to curate the perfect property portfolio.",
    icon: Search,
  },
  {
    number: "02",
    title: "Property Viewing",
    desc: "Experience guided tours of short-listed premium properties with our luxury real estate experts.",
    icon: Key,
  },
  {
    number: "03",
    title: "Legal & Documentation",
    desc: "Our legal team ensures 100% transparency, vetting all documents to guarantee a secure transaction.",
    icon: FileCheck,
  },
  {
    number: "04",
    title: "Closing & Handover",
    desc: "Seamless negotiation, finalization, and key handover to your new luxury estate.",
    icon: Handshake,
  },
];

export const Process = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gold" />
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">How It Works</span>
            <span className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Seamless <span className="italic font-light text-gray-300">Process</span>
          </h2>
          <p className="text-gray-400">A structured, hassle-free approach to acquiring your dream property.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-black-main border border-white/10 flex items-center justify-center mb-6 relative group-hover:border-gold/50 transition-colors shadow-2xl">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <Icon className="w-10 h-10 text-gold relative z-10" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-black-main font-bold flex items-center justify-center text-sm border-2 border-black-main">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
