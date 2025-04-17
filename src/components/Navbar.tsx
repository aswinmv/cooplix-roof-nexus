import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-cooplix-800">
                Cooplix
              </span>
              <span className="ml-2 text-sm text-cooplix-600 hidden sm:block">
                House of Roofings
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-cooplix-600 transition-colors px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-cooplix-600 transition-colors px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-cooplix-600 transition-colors px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-cooplix-600 transition-colors px-3 py-2 text-sm font-medium">
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-cooplix-600 transition-colors px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex">
            <Button asChild className="bg-cooplix-500 hover:bg-cooplix-600 text-white">
              <Link to="/contact">Get A Free Estimate</Link>
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cooplix-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cooplix-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cooplix-500 hover:bg-gray-50" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cooplix-500 hover:bg-gray-50" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cooplix-500 hover:bg-gray-50" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cooplix-500 hover:bg-gray-50" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cooplix-500 hover:bg-gray-50" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/contact" className="block w-full text-center mt-3 px-4 py-2 rounded-md shadow-sm text-white bg-cooplix-500 hover:bg-cooplix-600" onClick={toggleMenu}>
              Get an Estimate
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navbar;