
import { Building, Calendar, BarChart3, LineChart, Home, Building2, Check } from "lucide-react";
import CTA from "@/components/CTA";

const Services = () => {
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
      
      {/* Roof Blocking Section */}
      <section id="roof-blocking" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-cooplix-500 mr-4">
                  <Building size={32} />
                </div>
                <h2 className="text-3xl font-bold">Roof Blocking</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Our expert roof blocking services ensure structural integrity and proper installation for all types of roofing projects. We provide detailed plans that optimize material usage and support your construction timeline.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Precise blocking layouts for all roof types</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Structural calculations to ensure load-bearing capacity</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Material optimization to reduce waste</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Code-compliant designs for all regions</span>
                </li>
              </ul>
              <button className="btn-primary">Get a Blocking Plan</button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
                alt="Roof blocking illustration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Scheduling Section */}
      <section id="scheduling" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white p-8 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
                alt="Project scheduling" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="text-cooplix-500 mr-4">
                  <Calendar size={32} />
                </div>
                <h2 className="text-3xl font-bold">Scheduling</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Our detailed scheduling services help optimize your project timeline and coordinate all roofing activities efficiently. We create comprehensive schedules that account for materials, labor, and weather conditions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Milestone-based project timelines</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Resource allocation and optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Weather contingency planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Integration with overall construction schedule</span>
                </li>
              </ul>
              <button className="btn-primary">Schedule Your Project</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quantity Takeoffs Section */}
      <section id="quantity-takeoffs" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-cooplix-500 mr-4">
                  <BarChart3 size={32} />
                </div>
                <h2 className="text-3xl font-bold">Quantity Takeoffs</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Our precise quantity takeoffs provide accurate material estimations to prevent waste and ensure you have exactly what you need for your project. We analyze plans in detail to deliver comprehensive material lists.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Detailed material specifications and quantities</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Waste factor calculations based on roof geometry</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Cost estimations for budgeting purposes</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Alternative material recommendations for cost savings</span>
                </li>
              </ul>
              <button className="btn-primary">Request a Takeoff</button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="Quantity takeoff illustration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* AppliCad Expertise Section */}
      <section id="applicad" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white p-8 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
                alt="AppliCad modeling" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="text-cooplix-500 mr-4">
                  <LineChart size={32} />
                </div>
                <h2 className="text-3xl font-bold">AppliCad Expertise</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                We provide industry-leading AppliCad-based estimations and 3D modeling for complex roofing projects. Our expertise ensures precision in both design and execution phases.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>3D roof modeling for accurate visualization</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Detailed material lists with cutting patterns</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Sophisticated waste reduction algorithms</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Comprehensive reports for project management</span>
                </li>
              </ul>
              <button className="btn-primary">Get AppliCad Estimates</button>
            </div>
          </div>
        </div>
      </section>
      
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
