
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-cooplix-800 text-white overflow-hidden">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-16 sm:py-24 md:py-32 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl mb-4 sm:mb-6 animate-fade-in">
            Professional Roofing Solutions
          </h1>
          <p className="text-lg text-cooplix-100 mb-6 sm:mb-8 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
            Expert in roof estimation, drafting, material ordering, scheduling, documentation, and AppliCad-based estimations for builders and contractors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
            <Button asChild size={isMobile ? "default" : "lg"} className="bg-cooplix-500 hover:bg-cooplix-600 text-white px-6 sm:px-8 py-2 sm:py-6 text-base sm:text-lg">
              <Link to="/contact">Schedule An Estimate</Link>
            </Button>
            <Button asChild variant="outline" size={isMobile ? "default" : "lg"} className="bg-white text-cooplix-800 hover:bg-gray-100 border-cooplix-100 px-6 sm:px-8 py-2 sm:py-6 text-base sm:text-lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
