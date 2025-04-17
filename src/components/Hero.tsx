
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-cooplix-800 text-white overflow-hidden">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-24 sm:py-32 md:py-40 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 animate-fade-in">
            Professional Roofing Solutions
          </h1>
          <p className="text-xl text-cooplix-100 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Expert roof drafting, material takeoffs, scheduling, documentation, and AppliCad-based estimations for builders and contractors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              asChild
              size="lg"
              className="bg-cooplix-500 hover:bg-cooplix-600 text-white px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Schedule an Estimate
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-cooplix-800 hover:bg-gray-100 border-cooplix-100 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Send Your Plans
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
