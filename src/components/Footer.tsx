import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-cooplix-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cooplix</h3>
            <p className="text-gray-300 mb-2">House of Roofings</p>
            <p className="text-gray-300 mb-4">We specialize in outsourcing services to Roofing Industry. Our services include drafting, estimation, ordering, data entry and so on. Are you looking forward for more profit and expansion of your Roofing Business, then you are on the right place.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#roof-blocking" className="text-gray-300 hover:text-white transition-colors">
                  Roof Blocking
                </Link>
              </li>
              <li>
                <Link to="/services#scheduling" className="text-gray-300 hover:text-white transition-colors">
                  Scheduling
                </Link>
              </li>
              <li>
                <Link to="/services#quantity-takeoffs" className="text-gray-300 hover:text-white transition-colors">
                  Quantity Takeoffs
                </Link>
              </li>
              <li>
                <Link to="/services#applicad" className="text-gray-300 hover:text-white transition-colors">
                  AppliCad Expertise
                </Link>
              </li>
              <li>
                <Link to="/services#residential" className="text-gray-300 hover:text-white transition-colors">
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link to="/services#commercial" className="text-gray-300 hover:text-white transition-colors">
                  Commercial Projects
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Calicut ,Kerala -Calicut City, </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-white transition-colors">8848082647</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@cooplix.com" className="text-gray-300 hover:text-white transition-colors">
                  info@cooplix.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Cooplix - House of Roofings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;