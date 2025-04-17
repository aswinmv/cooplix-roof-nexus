
import { 
  Building, Calendar, BarChart3, LineChart, 
  Home, Building2, Check, PenTool, PackageCheck, 
  FileText, Clock, Laptop 
} from "lucide-react";
import CTA from "@/components/CTA";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      id: "roof-drafting",
      title: "Roof Drafting & Layout Planning",
      description: "Accurate and detailed roof drawings tailored for both residential and commercial projects, ensuring smooth on-site execution and material clarity.",
      icon: <PenTool size={24} />,
      features: [
        "Precise blocking layouts for all roof types",
        "Structural calculations to ensure load-bearing capacity",
        "Material optimization to reduce waste",
        "Code-compliant designs for all regions"
      ],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      buttonText: "Get Drafting Services"
    },
    {
      id: "estimation",
      title: "Estimation & Quantity Takeoffs",
      description: "Precise material takeoffs using advanced tools and software like AppliCad — helping you quote faster, reduce waste, and stay competitive.",
      icon: <BarChart3 size={24} />,
      features: [
        "Detailed material specifications and quantities",
        "Waste factor calculations based on roof geometry",
        "Cost estimations for budgeting purposes",
        "Alternative material recommendations for cost savings"
      ],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      buttonText: "Request a Takeoff"
    },
    {
      id: "material-ordering",
      title: "Material Ordering Support",
      description: "We handle material ordering and coordination to ensure timely delivery and minimize delays, so your crew can focus on what they do best.",
      icon: <PackageCheck size={24} />,
      features: [
        "Vendor coordination and management",
        "Just-in-time delivery scheduling",
        "Material quality verification",
        "Order tracking and status updates"
      ],
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      buttonText: "Get Material Support"
    },
    {
      id: "data-entry",
      title: "Data Entry & Project Documentation",
      description: "Leave the admin work to us — we manage all project-related data entry, reporting, and file organization to keep your operations running efficiently.",
      icon: <FileText size={24} />,
      features: [
        "Comprehensive project documentation",
        "Digital file organization and storage",
        "Progress reporting and documentation",
        "Material usage tracking and reporting"
      ],
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      buttonText: "Outsource Documentation"
    },
    {
      id: "scheduling",
      title: "Project Scheduling",
      description: "Structured timelines for roofing jobs that help align labor, deliveries, and site readiness — improving job flow and reducing downtime.",
      icon: <Calendar size={24} />,
      features: [
        "Milestone-based project timelines",
        "Resource allocation and optimization",
        "Weather contingency planning",
        "Integration with overall construction schedule"
      ],
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      buttonText: "Schedule Your Project"
    },
    {
      id: "applicad",
      title: "AppliCad Roof Planning",
      description: "We use AppliCad to produce precise roof models, panel layouts, cutting lists, and material estimates — optimized for accuracy and performance.",
      icon: <Laptop size={24} />,
      features: [
        "3D roof modeling for accurate visualization",
        "Detailed material lists with cutting patterns",
        "Sophisticated waste reduction algorithms",
        "Comprehensive reports for project management"
      ],
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      buttonText: "Get AppliCad Estimates"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cooplix-800 text-white py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Roofing Services</h1>
            <p className="text-xl text-cooplix-100">
              Comprehensive roofing solutions designed for builders, contractors, and construction professionals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help Your Business</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized services are designed to streamline your roofing operations, reduce costs, and improve project efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                linkTo={`/services#${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section id={service.id} key={service.id} className={`py-16 md:py-24 px-4 ${index % 2 !== 0 ? 'bg-gray-50' : ''}`}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="text-cooplix-500 mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-primary">{service.buttonText}</button>
              </div>
              <div className={`${index % 2 !== 0 ? 'order-1 lg:order-2 bg-white p-8 rounded-lg shadow-lg' : 'bg-gray-100 p-8 rounded-lg'}`}>
                <img 
                  src={service.image}
                  alt={`${service.title} illustration`} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Project Types Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Types We Handle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're building single-family homes or large commercial complexes, our roofing solutions are tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Residential Projects */}
            <div id="residential" className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
                  alt="Residential roofing project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cooplix-800/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center text-white mb-2">
                    <Home size={24} className="mr-2" />
                    <h3 className="text-2xl font-bold">Residential Projects</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Our residential roofing solutions cover everything from single homes to large developments. We provide detailed plans, accurate material lists, and scheduling for all types of residential roofing projects.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Single-family homes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Multi-family residences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Townhouse developments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Custom home projects</span>
                  </li>
                </ul>
                <button className="btn-primary">Residential Services</button>
              </div>
            </div>
            
            {/* Commercial Projects */}
            <div id="commercial" className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                  alt="Commercial roofing project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cooplix-800/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center text-white mb-2">
                    <Building2 size={24} className="mr-2" />
                    <h3 className="text-2xl font-bold">Commercial Projects</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Our commercial roofing services address the unique challenges of larger structures. We deliver comprehensive solutions for commercial buildings, warehouses, and industrial complexes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Office buildings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Retail centers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Warehouses and industrial buildings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Institutional facilities</span>
                  </li>
                </ul>
                <button className="btn-primary">Commercial Services</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title="Ready to Get Started?"
        description="Contact us today to discuss your roofing project needs and discover how our services can save you time and money."
        primaryButtonText="Schedule an Estimate"
        primaryButtonLink="/contact"
        secondaryButtonText="Send Your Plans"
        secondaryButtonLink="/contact"
        backgroundClass="bg-cooplix-50"
      />
    </div>
  );
};

export default Services;
