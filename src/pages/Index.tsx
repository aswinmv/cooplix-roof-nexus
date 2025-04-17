
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import { Building, Calendar, BarChart3, LineChart, Home, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Roof Blocking",
      description: "Precise roof blocking plans for residential and commercial projects, ensuring structural integrity and proper installation.",
      icon: <Building size={24} />,
      linkTo: "/services#roof-blocking"
    },
    {
      title: "Scheduling",
      description: "Detailed scheduling services to optimize your project timeline and coordinate all roofing activities efficiently.",
      icon: <Calendar size={24} />,
      linkTo: "/services#scheduling"
    },
    {
      title: "Quantity Takeoffs",
      description: "Accurate material estimations and quantity takeoffs to prevent waste and ensure you have exactly what you need.",
      icon: <BarChart3 size={24} />,
      linkTo: "/services#quantity-takeoffs"
    },
    {
      title: "AppliCad Expertise",
      description: "Industry-leading AppliCad-based estimations and 3D modeling for complex roofing projects with precision.",
      icon: <LineChart size={24} />,
      linkTo: "/services#applicad"
    },
    {
      title: "Residential Projects",
      description: "Specialized solutions for residential roofing projects of all scales, from single homes to large developments.",
      icon: <Home size={24} />,
      linkTo: "/services#residential"
    },
    {
      title: "Commercial Projects",
      description: "Comprehensive roofing solutions for commercial buildings, warehouses, and industrial complexes.",
      icon: <Building2 size={24} />,
      linkTo: "/services#commercial"
    }
  ];

  const testimonials = [
    {
      quote: "Cooplix provided exceptional roofing plans and material estimations for our development project. Their attention to detail saved us time and money on material waste.",
      author: "John Doe",
      position: "Project Manager",
      company: "ABC Construction"
    },
    {
      quote: "The AppliCad estimations from Cooplix were spot-on. Their team's expertise made our commercial project run smoothly from planning to completion.",
      author: "Sarah Johnson",
      position: "Director",
      company: "Johnson Building Inc."
    },
    {
      quote: "Working with Cooplix transformed our approach to roof scheduling. Their detailed timelines helped us coordinate trades efficiently and complete ahead of schedule.",
      author: "Michael Brown",
      position: "Construction Manager",
      company: "Brown & Associates"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Roofing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive roofing services designed specifically for builders, contractors, and construction managers handling residential and commercial projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                linkTo={service.linkTo}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-block btn-primary"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Roofing Expertise You Can Trust</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Cooplix, we combine extensive industry knowledge with cutting-edge technology to deliver precise, efficient, and cost-effective roofing solutions.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our team of specialists brings years of experience in roof blocking, material estimation, and AppliCad modeling to every project, ensuring optimal results for builders and contractors.
              </p>
              <Link 
                to="/about" 
                className="inline-block btn-primary"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="Cooplix team at work" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-cooplix-500/10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 bg-cooplix-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading construction companies and contractors across the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title="Ready to Start Your Next Roofing Project?"
        description="Get in touch with our team for a free consultation and let us help you plan your next residential or commercial roofing project."
        primaryButtonText="Schedule an Estimate"
        primaryButtonLink="/contact"
        secondaryButtonText="Send Your Plans"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default Index;
