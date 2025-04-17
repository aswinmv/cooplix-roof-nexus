
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cooplix-800 text-white py-16 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-cooplix-100">
              Get in touch with our team to discuss your roofing project needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cooplix-100 flex items-center justify-center text-cooplix-600">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Our Location</h3>
                    <p className="mt-1 text-gray-600">
                      123 Roofing Way<br />
                      Construction City, CC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cooplix-100 flex items-center justify-center text-cooplix-600">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:info@cooplix.com" className="text-cooplix-600 hover:text-cooplix-800">
                        info@cooplix.com
                      </a>
                    </p>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:sales@cooplix.com" className="text-cooplix-600 hover:text-cooplix-800">
                        sales@cooplix.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cooplix-100 flex items-center justify-center text-cooplix-600">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+11234567890" className="text-cooplix-600 hover:text-cooplix-800">
                        (123) 456-7890
                      </a>
                    </p>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+11234567891" className="text-cooplix-600 hover:text-cooplix-800">
                        (123) 456-7891
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cooplix-100 flex items-center justify-center text-cooplix-600">
                    <Clock size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Business Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">How Can We Help?</h3>
                <p className="text-gray-600 mb-6">
                  Whether you need roof blocking plans, material takeoffs, scheduling assistance, or AppliCad-based estimations, our team is ready to help with your project needs.
                </p>
                <p className="text-gray-600">
                  Fill out the form or contact us directly, and we'll get back to you promptly to discuss your requirements.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (placeholder) */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map component */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Google Maps Integration Here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the information you need about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cooplix-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Residential Services</h3>
              <p className="text-gray-600 mb-4">
                Learn about our solutions for residential roofing projects.
              </p>
              <a href="/services#residential" className="text-cooplix-600 hover:text-cooplix-800 font-medium">
                View Residential Services
              </a>
            </div>
            
            <div className="bg-cooplix-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Commercial Services</h3>
              <p className="text-gray-600 mb-4">
                Discover our solutions for commercial and industrial projects.
              </p>
              <a href="/services#commercial" className="text-cooplix-600 hover:text-cooplix-800 font-medium">
                View Commercial Services
              </a>
            </div>
            
            <div className="bg-cooplix-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Our Portfolio</h3>
              <p className="text-gray-600 mb-4">
                Explore our past projects and success stories.
              </p>
              <a href="/portfolio" className="text-cooplix-600 hover:text-cooplix-800 font-medium">
                Browse Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
