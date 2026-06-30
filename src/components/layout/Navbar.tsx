"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "#properties" },
  { name: "Services", href: "#services" },
  { name: "Investment", href: "#investment" },
  { name: "Gallery", href: "#gallery" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      {/* Top Main Row */}
      <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img src="https://i.ibb.co/jP3NBv25/MALHOTRAS-IMG.png" alt="Malhotra's Estates Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all shrink-0 rounded-md" />
          <div className="flex flex-col justify-center font-serif font-bold tracking-widest text-white leading-none">
            <span className="text-[13px] md:text-xl">MALHOTRA'S</span>
            <span className="text-gold text-[10px] md:text-sm">ESTATES</span>
          </div>
        </Link>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919355211735">
            <Button variant="outline" size="sm">
              Call Now
            </Button>
          </a>
          <a href="https://wa.me/919355211735" target="_blank" rel="noreferrer">
            <Button size="sm">Book Visit</Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Secondary Quick-Access Menu Bar (Visible on Desktop & Mobile) */}
      <div className="w-full bg-black-main/90 border-y border-white/10 backdrop-blur-md">
        <div className="container mx-auto">
          {/* Horizontal scroll container for mobile, centered for desktop */}
          <nav className="flex items-center gap-2 sm:gap-6 px-4 md:px-6 py-2 overflow-x-auto no-scrollbar lg:justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center text-[13px] sm:text-sm uppercase tracking-wider text-gray-300 hover:text-gold transition-colors whitespace-nowrap px-2 py-1 rounded-md hover:bg-white/5"
              >
                {link.name}
                {/* Optional dropdown icon like the screenshot if we ever add submenus */}
                {['Properties', 'Services', 'Investment'].includes(link.name) && (
                  <ChevronDown className="ml-1 w-3 h-3 opacity-50" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 lg:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-gray-300 hover:text-gold transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <a href="tel:+919355211735" className="w-full">
              <Button variant="outline" className="w-full">Call Now</Button>
            </a>
            <a href="https://wa.me/919355211735" target="_blank" rel="noreferrer" className="w-full">
              <Button className="w-full">Book Visit</Button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
