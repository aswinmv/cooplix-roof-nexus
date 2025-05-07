
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-gradient-to-r from-cooplix-800 to-cooplix-700 text-white overflow-hidden">
      {/* Background pattern/overlay with subtle animation */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742')] bg-cover bg-center opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cooplix-800/60 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20 sm:py-28 md:py-36 z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Professional <span className="text-cooplix-300">Roofing</span> Solutions
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-cooplix-100 mb-8 sm:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Expert in roof estimation, drafting, material ordering, scheduling, documentation, 
            and AppliCad-based estimations for builders and contractors.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button asChild size={isMobile ? "default" : "lg"} className="bg-cooplix-500 hover:bg-cooplix-400 text-white px-8 sm:px-10 py-3 sm:py-7 text-base sm:text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
              <Link to="/contact">Schedule An Estimate</Link>
            </Button>
            <Button asChild variant="outline" size={isMobile ? "default" : "lg"} className="bg-transparent text-white hover:bg-white/10 border-cooplix-300 px-8 sm:px-10 py-3 sm:py-7 text-base sm:text-lg rounded-lg transition-all duration-300 ease-in-out">
              <Link to="/services">View Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="hidden md:block">
        <div className="absolute top-20 left-10 w-24 h-24 border border-cooplix-400/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-cooplix-400/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-cooplix-400/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
