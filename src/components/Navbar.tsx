
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Close mobile menu when route changes - memoized for better performance
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname, isMenuOpen]);

  // Close mobile menu when screen size changes from mobile to desktop - memoized for better performance
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Memoized toggle function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);
  
  // Check if a nav link is active - memoized
  const isActiveLink = useCallback((path) => location.pathname === path, [location.pathname]);
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" aria-label="Cooplix homepage">
              <span className="text-xl sm:text-2xl font-bold text-cooplix-800">
                Cooplix
              </span>
              <span className="ml-2 text-xs sm:text-sm text-cooplix-600 hidden sm:block">
                House of Roofings
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Only render in desktop mode */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-6 lg:space-x-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`transition-colors px-3 py-2 text-sm font-medium ${
                    isActiveLink(link.path) 
                      ? "text-cooplix-600 font-semibold" 
                      : "text-gray-700 hover:text-cooplix-600"
                  }`}
                  aria-label={link.label}
                  aria-current={isActiveLink(link.path) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
          
          {!isMobile && (
            <div className="hidden md:flex">
              <Button asChild className="bg-cooplix-500 hover:bg-cooplix-600 text-white">
                <Link to="/contact" aria-label="Get a free estimate for your roofing project">Get A Free Estimate</Link>
              </Button>
            </div>
          )}
          
          {/* Mobile Navigation Button */}
          {isMobile && (
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cooplix-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cooplix-500"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Optimized with conditional rendering */}
      {isMobile && (
        <div 
          className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? "max-h-[400px] opacity-100" 
              : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
          aria-hidden={!isMenuOpen}
        >
          {isMenuOpen && (
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActiveLink(link.path)
                      ? "text-cooplix-600 bg-gray-50"
                      : "text-gray-700 hover:text-cooplix-500 hover:bg-gray-50"
                  }`}
                  aria-label={link.label}
                  aria-current={isActiveLink(link.path) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="block w-full text-center mt-3 px-4 py-2 rounded-md shadow-sm text-white bg-cooplix-500 hover:bg-cooplix-600"
                aria-label="Get a free estimate for your roofing project"
              >
                Get an Estimate
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
