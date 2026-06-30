"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "../ui/Button";
import { Search, MapPin, Home, DollarSign, Bed, Trophy, CheckCircle, Star, Building, ChevronDown, Phone } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Using a placeholder premium real estate video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-3965-large.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-main via-black-main/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-main/80 via-transparent to-black-main/80 z-10" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        {[
          { w: 5, h: 5, t: "15%", l: "20%" },
          { w: 3, h: 3, t: "45%", l: "75%" },
          { w: 6, h: 6, t: "80%", l: "15%" },
          { w: 4, h: 4, t: "65%", l: "85%" },
          { w: 7, h: 7, t: "25%", l: "60%" },
          { w: 2, h: 2, t: "85%", l: "50%" }
        ].map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute rounded-full bg-gold shadow-[0_0_15px_#D4AF37]"
            style={{
              width: `${p.w}px`,
              height: `${p.h}px`,
              top: p.t,
              left: p.l,
            }}
          />
        ))}
      </div>

      {/* Floating Info Cards (Parallax Mouse Effect) */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden xl:block">
        <motion.div 
          animate={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
          className="absolute top-[20%] left-[5%] glass-card px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md border-white/10"
        >
          <div className="bg-gold/20 p-2 rounded-lg"><Trophy className="text-gold w-5 h-5" /></div>
          <div>
            <p className="text-white text-sm font-bold">500+</p>
            <p className="text-xs text-gray-300 whitespace-nowrap">Happy Clients</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute top-[25%] right-[5%] glass-card px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md border-white/10"
        >
          <div className="bg-gold/20 p-2 rounded-lg"><Building className="text-gold w-5 h-5" /></div>
          <div>
            <p className="text-white text-sm font-bold">1200+</p>
            <p className="text-xs text-gray-300 whitespace-nowrap">Properties Sold</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ x: mousePosition.x * 1.2, y: mousePosition.y * -1.2 }}
          className="absolute bottom-[35%] left-[5%] glass-card px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md border-white/10"
        >
          <div className="bg-gold/20 p-2 rounded-lg"><CheckCircle className="text-gold w-5 h-5" /></div>
          <p className="text-white text-sm font-medium whitespace-nowrap">Verified Listings</p>
        </motion.div>

        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * 1.5 }}
          className="absolute top-[65%] right-[5%] glass-card px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md border-white/10"
        >
          <div className="bg-gold/20 p-2 rounded-lg"><MapPin className="text-gold w-5 h-5" /></div>
          <p className="text-white text-sm font-medium whitespace-nowrap">Sector 83, Gurugram</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-30 mx-auto px-4 text-center pt-56 md:pt-40"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-black/40 backdrop-blur-sm mb-8"
        >
          <Trophy className="text-gold w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Gurugram's Trusted Real Estate Consultant</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="overflow-hidden"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl max-w-5xl mx-auto">
            Find Your <span className="gold-gradient-text italic pr-2">Dream Property</span> <br />
            with Confidence
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-10 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gold-light mb-2 font-medium tracking-wide">
            Premium Residential • Commercial • Luxury Villas • Investment Opportunities
          </p>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
            Helping families and investors discover verified properties across Gurugram with expert guidance and personalized service.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button size="lg" className="w-full sm:w-auto text-base px-8 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            Explore Properties
          </Button>
          <a href="https://wa.me/919355211735" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full text-base px-8 bg-black/40 backdrop-blur-md">
              Book a Free Consultation
            </Button>
          </a>
          <a href="tel:+919355211735" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full text-base px-6 gap-2 border border-transparent hover:border-white/20">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="max-w-5xl mx-auto glass-card rounded-2xl md:rounded-full p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-40 border-gold/30"
        >
          <div className="grid grid-cols-2 md:flex md:flex-1 w-full gap-4 md:gap-0">
            {/* Location */}
            <div className="flex flex-1 items-center gap-3 text-left border-r border-white/10 px-4">
              <MapPin className="text-gold w-5 h-5 hidden sm:block" />
              <div className="w-full">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Location</p>
                <input type="text" placeholder="Sector 83, Gurugram" className="bg-transparent text-sm text-white w-full outline-none placeholder:text-gray-500 font-medium truncate" />
              </div>
            </div>

            {/* Property Type */}
            <div className="flex flex-1 items-center gap-3 text-left md:border-r border-white/10 px-4">
              <Home className="text-gold w-5 h-5 hidden sm:block" />
              <div className="w-full">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Type</p>
                <select className="bg-transparent text-sm text-white w-full outline-none appearance-none cursor-pointer font-medium">
                  <option className="bg-black-main">Any Type</option>
                  <option className="bg-black-main">Luxury Villa</option>
                  <option className="bg-black-main">Apartment</option>
                  <option className="bg-black-main">Commercial</option>
                </select>
              </div>
            </div>

            {/* Budget */}
            <div className="flex flex-1 items-center gap-3 text-left border-r border-white/10 px-4">
              <DollarSign className="text-gold w-5 h-5 hidden sm:block" />
              <div className="w-full">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Budget</p>
                <select className="bg-transparent text-sm text-white w-full outline-none appearance-none cursor-pointer font-medium">
                  <option className="bg-black-main">Any Budget</option>
                  <option className="bg-black-main">₹1Cr - ₹5Cr</option>
                  <option className="bg-black-main">₹5Cr - ₹10Cr</option>
                  <option className="bg-black-main">₹10Cr+</option>
                </select>
              </div>
            </div>

            {/* Bedrooms */}
            <div className="flex flex-1 items-center gap-3 text-left px-4">
              <Bed className="text-gold w-5 h-5 hidden sm:block" />
              <div className="w-full">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Bedrooms</p>
                <select className="bg-transparent text-sm text-white w-full outline-none appearance-none cursor-pointer font-medium">
                  <option className="bg-black-main">Any</option>
                  <option className="bg-black-main">2 BHK</option>
                  <option className="bg-black-main">3 BHK</option>
                  <option className="bg-black-main">4+ BHK</option>
                </select>
              </div>
            </div>
          </div>

          <Button size="md" className="w-full md:w-auto rounded-xl md:rounded-full h-12 md:h-14 px-8 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] mt-2 md:mt-0">
            <Search size={18} className="mr-2" />
            Search
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase font-medium">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
