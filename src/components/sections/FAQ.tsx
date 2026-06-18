"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you charge brokerage on new developer projects?",
    answer: "No, we strictly operate on a zero brokerage model for all primary bookings (new projects) with developers. We get compensated directly by the developers.",
  },
  {
    question: "What areas in Gurugram do you cover?",
    answer: "We cover the most premium sectors in Gurugram including DLF Phase 1-5, Golf Course Road, Golf Course Extension, Dwarka Expressway, and New Gurugram.",
  },
  {
    question: "Do you help with property documentation and registration?",
    answer: "Yes, our dedicated legal and documentation team handles everything from the initial agreement to final registry, ensuring a completely hassle-free process for you.",
  },
  {
    question: "Can you assist NRIs in buying property in India?",
    answer: "Absolutely. We specialize in NRI investments, offering end-to-end services including digital tours, legal representation, tax advisory, and property management.",
  },
  {
    question: "Do you offer property management services after purchase?",
    answer: "Yes, we offer premium property management including finding corporate tenants, rent collection, maintenance, and regular inspections.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black-main relative overflow-hidden border-t border-white/5">
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
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Common Queries</span>
            <span className="w-12 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="italic font-light text-gray-300">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'border-white/10 hover:border-white/20'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <span className={`font-serif text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold-light'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ml-4 ${isOpen ? 'bg-gold text-black' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
