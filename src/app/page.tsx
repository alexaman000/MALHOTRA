import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PropertySearch } from "@/components/sections/PropertySearch";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Investment } from "@/components/sections/Investment";
import { AboutUs } from "@/components/sections/AboutUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { SmartFeatures } from "@/components/sections/SmartFeatures";
import { FAQ } from "@/components/sections/FAQ";
import { MapSection } from "@/components/sections/MapSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingControls } from "@/components/ui/FloatingControls";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <Services />
      <WhyChooseUs />
      <Investment />
      <AboutUs />
      <ProjectGallery />
      <Process />
      <Testimonials />
      <SmartFeatures />
      <FAQ />
      <MapSection />
      <Footer />
      <FloatingControls />
    </main>
  );
}
