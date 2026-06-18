"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, Landmark, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const opportunities = [
  {
    title: "Commercial Retail Spaces",
    roi: "8-10%",
    duration: "Long Term",
    desc: "Pre-leased retail assets in high-footfall zones of Gurugram.",
    icon: Landmark,
  },
  {
    title: "Luxury SCO Plots",
    roi: "12-15%",
    duration: "Medium Term",
    desc: "Shop-cum-office plots with extremely high appreciation potential.",
    icon: TrendingUp,
  },
  {
    title: "Fractional Ownership",
    roi: "9-11%",
    duration: "Flexible",
    desc: "Invest in Grade-A commercial properties starting at just ₹25 Lacs.",
    icon: PieChart,
  },
];

export const Investment = () => {
  return (
    <section className="py-24 bg-black-main relative border-y border-white/5 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Grow Your Wealth</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Exclusive <span className="italic font-light text-gray-300">Investment</span> Opportunities
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Real estate in Gurugram offers some of the highest ROI in the country. Our investment experts curate high-yield, secure assets tailored to multiply your wealth.
            </p>
            
            <a href="https://wa.me/919355211735?text=Hello%2C%20I%20would%20like%20to%20consult%20an%20expert%20regarding%20investment%20opportunities." target="_blank" rel="noreferrer" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                Consult an Expert <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>

          <div className="flex flex-col gap-6">
            {opportunities.map((opp, index) => {
              const Icon = opp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-gold/40 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute right-0 top-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none group-hover:bg-gold/10 transition-colors" />
                  
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-black-main border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <h3 className="text-xl font-serif font-bold text-white">{opp.title}</h3>
                        <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-xs font-bold rounded-full uppercase tracking-wider w-fit">
                          Expected ROI: {opp.roi}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{opp.desc}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                        {opp.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
