import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { PenTool, BarChart3, PackageCheck, FileText, Calendar, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Roof Drafting & Layout Planning",
      description: "Accurate and detailed roof drawings tailored for both residential and commercial projects, ensuring smooth on-site execution.",
      icon: <PenTool size={24} />,
      linkTo: "/services#roof-drafting"
    },
    {
      title: "Estimation & Quantity Takeoffs",
      description: "Precise material takeoffs using advanced tools like AppliCad — helping you quote faster, reduce waste, and stay competitive.",
      icon: <BarChart3 size={24} />,
      linkTo: "/services#estimation"
    },
    {
      title: "Material Ordering Support",
      description: "We handle material ordering and coordination to ensure timely delivery and minimize delays for your construction projects.",
      icon: <PackageCheck size={24} />,
      linkTo: "/services#material-ordering"
    },
    {
      title: "Data Entry & Documentation",
      description: "Leave the admin work to us — we manage all project-related data entry, reporting, and file organization efficiently.",
      icon: <FileText size={24} />,
      linkTo: "/services#data-entry"
    },
    {
      title: "Project Scheduling",
      description: "Structured timelines for roofing jobs that help align labor, deliveries, and site readiness — improving workflow.",
      icon: <Calendar size={24} />,
      linkTo: "/services#scheduling"
    },
    {
      title: "AppliCad Roof Planning",
      description: "We use AppliCad to produce precise roof models, panel layouts, cutting lists, and material estimates — optimized for accuracy.",
      icon: <Laptop size={24} />,
      linkTo: "/services#applicad"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cooplix-800">How We Help Your Business</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized services are designed to streamline your roofing operations, reduce costs, and improve project efficiency.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  linkTo={service.linkTo}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-14 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link 
              to="/services" 
              className="inline-block px-8 py-3 rounded-lg bg-cooplix-500 text-white font-medium hover:bg-cooplix-600 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cooplix-800">Roofing Expertise You Can Trust</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Cooplix, we combine extensive industry knowledge with cutting-edge technology to deliver precise, efficient, and cost-effective roofing solutions.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our team of specialists brings years of experience in roof blocking, material estimation, and AppliCad modeling to every project, ensuring optimal results for builders and contractors.
              </p>
              <Link 
                to="/about" 
                className="inline-block px-8 py-3 rounded-lg bg-cooplix-500 text-white font-medium hover:bg-cooplix-600 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="Cooplix team at work" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cooplix-800/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cooplix-800">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by leading construction companies and contractors across the industry.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                />
              </motion.div>
            ))}
          </motion.div>
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
