"use client";

import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/Button";

const properties = [
  {
    id: 1,
    title: "Trump Tower Luxury Suite",
    location: "Sector 65, Golf Course Ext. Road",
    price: "₹8.5 Cr",
    beds: 4,
    baths: 5,
    area: "3,500 sq.ft",
    type: "Ready to Move",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "DLF Camellias Penthouse",
    location: "DLF Phase 5, Gurugram",
    price: "₹35.0 Cr",
    beds: 5,
    baths: 6,
    area: "7,400 sq.ft",
    type: "Ready to Move",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "M3M Golfestate Villa",
    location: "Sector 65, Gurugram",
    price: "₹12.0 Cr",
    beds: 4,
    baths: 4,
    area: "4,200 sq.ft",
    type: "Ready to Move",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Sobha City Premium Apartment",
    location: "Sector 108, Dwarka Expressway",
    price: "₹4.2 Cr",
    beds: 3,
    baths: 3,
    area: "2,343 sq.ft",
    type: "Under Construction",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
];

export const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-24 bg-black-main relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Exclusive Listings</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="italic font-light text-gray-300">Properties</span>
            </h2>
            <p className="text-gray-400">Discover our handpicked selection of Gurugram's most prestigious real estate, designed for those who accept only the finest.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button variant="outline" className="hidden md:flex">
              View All Properties <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md rounded-full border border-white/20">
                    {property.type}
                  </span>
                  {property.featured && (
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold text-black-main backdrop-blur-md rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black-main" /> Featured
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 right-4 z-20">
                  <span className="px-4 py-2 text-lg font-bold bg-black/80 text-gold backdrop-blur-md rounded-lg border border-gold/30 shadow-lg">
                    {property.price}
                  </span>
                </div>
              </div>

              <div className="p-6 relative">
                <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{property.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <MapPin className="w-4 h-4 text-gold" />
                  {property.location}
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 mb-6">
                  <div className="flex flex-col items-center justify-center text-center">
                    <Bed className="w-5 h-5 text-gray-300 mb-1" />
                    <span className="text-white font-medium">{property.beds}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Beds</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center border-x border-white/10">
                    <Bath className="w-5 h-5 text-gray-300 mb-1" />
                    <span className="text-white font-medium">{property.baths}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Baths</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <Square className="w-5 h-5 text-gray-300 mb-1" />
                    <span className="text-white font-medium">{property.area}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Area</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">By <span className="text-white font-medium">Malhotra Estates</span></p>
                  <Button variant="ghost" className="text-gold hover:bg-gold/10 p-0 px-4 h-10 group/btn">
                    View Details <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Properties <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
