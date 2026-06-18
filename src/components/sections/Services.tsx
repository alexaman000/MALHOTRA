"use client";

import { motion } from "framer-motion";
import { 
  Key, TrendingUp, Building2, Landmark, 
  Home, Map, TreePine, FileText, 
  CreditCard, Briefcase, Scale, KeyRound 
} from "lucide-react";

const services = [
  { title: "Property Buying", icon: Key, desc: "Find your perfect home with our expert guidance." },
  { title: "Property Selling", icon: TrendingUp, desc: "Get the best market value for your premium property." },
  { title: "Investment Consulting", icon: Briefcase, desc: "Strategic advice for high-yield real estate investments." },
  { title: "Commercial Properties", icon: Building2, desc: "Premium office spaces and retail shops." },
  { title: "Luxury Apartments", icon: Home, desc: "Exclusive high-rise luxury living spaces." },
  { title: "Premium Plots", icon: Map, desc: "Prime land in top-tier locations." },
  { title: "Farm Houses", icon: TreePine, desc: "Spacious luxury farmhouses for ultimate privacy." },
  { title: "Documentation", icon: FileText, desc: "Hassle-free legal paperwork and registrations." },
  { title: "Home Loans", icon: CreditCard, desc: "Fast approvals through our banking partners." },
  { title: "Property Management", icon: Landmark, desc: "End-to-end management for NRI investors." },
  { title: "Legal Support", icon: Scale, desc: "Expert legal vetting and due diligence." },
  { title: "Rental Services", icon: KeyRound, desc: "Premium leasing and tenant management." },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-black-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/5 blur-[150px] pointer-events-none rounded-full" />
      
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
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">What We Do</span>
            <span className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Premium <span className="italic font-light text-gray-300">Services</span>
          </h2>
          <p className="text-gray-400">
            Comprehensive real estate solutions tailored to the highest standards of luxury and professionalism.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-8 rounded-2xl glass border border-white/5 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Hover gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-black-main border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
