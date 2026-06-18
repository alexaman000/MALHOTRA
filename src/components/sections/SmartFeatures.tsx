"use client";

import { motion } from "framer-motion";
import { Calculator, Zap, MessageSquareText } from "lucide-react";
import { Button } from "../ui/Button";

export const SmartFeatures = () => {
  return (
    <section className="py-24 bg-black-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gold/5 blur-[120px] pointer-events-none" />

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
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Tech-Enabled Real Estate</span>
            <span className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Smart <span className="italic font-light text-gray-300">Tools</span>
          </h2>
          <p className="text-gray-400">Leverage our intelligent tools to make data-driven investment decisions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-gold/30 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full group-hover:bg-gold/20 transition-colors" />
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 border border-gold/20 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">ROI Calculator</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Estimate your rental yield and capital appreciation over time for any commercial or residential property.
            </p>
            <Button variant="outline" className="w-full text-sm">Calculate ROI</Button>
          </motion.div>

          {/* EMI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-gold/30 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full group-hover:bg-gold/20 transition-colors" />
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 border border-gold/20 group-hover:scale-110 transition-transform">
              <Calculator className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">EMI Calculator</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Plan your finances easily. Calculate your monthly mortgage payments based on current interest rates.
            </p>
            <Button variant="outline" className="w-full text-sm">Calculate EMI</Button>
          </motion.div>

          {/* AI Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent hover:border-gold/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full group-hover:bg-gold/30 transition-colors" />
            <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform">
              <MessageSquareText className="w-6 h-6 text-black-main" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-3">AI Recommendation</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Chat with our AI consultant to get personalized property recommendations tailored exactly to your lifestyle.
            </p>
            <Button className="w-full text-sm shadow-lg">Chat with AI</Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
