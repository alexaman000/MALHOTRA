"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

// Helper component for animated numbers
const AnimatedCounter = ({ from = 0, to, duration = 2, inView }: { from?: number, to: number, duration?: number, inView: boolean }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (to - from) + from);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [to, from, duration, inView]);

  return <span>{count}</span>;
};

const stats = [
  { label: "Happy Clients", value: 500, suffix: "+", icon: Users },
  { label: "Properties Sold", value: 1200, suffix: "+", icon: CheckCircle2 },
  { label: "Years Experience", value: 10, suffix: "+", icon: Award },
  { label: "Verified Properties", value: 100, suffix: "%", icon: Shield },
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-black-main border-t border-white/5 relative overflow-hidden" ref={ref}>
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
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Trust & Excellence</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="italic font-light text-gray-300">Malhotra Estates</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              With over a decade of experience in the luxury real estate market, we pride ourselves on offering unmatched expertise, absolute transparency, and a client-first approach. We don't just sell properties; we build lifelong relationships.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['100% Transparent Documentation', 'Zero Brokerage on Builder Floors', 'End-to-End Assistance', 'Curated Premium Listings'].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-3xl text-center flex flex-col items-center justify-center border border-white/10 hover:border-gold/40 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
                    <AnimatedCounter to={stat.value} inView={isInView} />
                    <span className="text-gold">{stat.suffix}</span>
                  </h3>
                  <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
