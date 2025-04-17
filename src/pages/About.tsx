
import { Award, Users, Wrench, TrendingUp, Check } from "lucide-react";
import CTA from "@/components/CTA";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cooplix-800 text-white py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cooplix</h1>
            <p className="text-xl text-cooplix-100">
              Your trusted partner for professional roofing solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">House of Roofings</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Cooplix, we specialize in providing comprehensive roofing solutions for builders, contractors, and construction managers. With years of industry experience, we've established ourselves as the go-to experts for roof blocking, scheduling, material planning, quantity takeoffs, and AppliCad-based estimations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to streamline the roofing process for construction professionals, ensuring accuracy, efficiency, and cost-effectiveness at every stage of your project. We understand the unique challenges faced by the construction industry and have developed our services to address these specific needs.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're working on residential developments or commercial complexes, our team provides the technical expertise and detailed planning needed to make your roofing projects successful.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
                alt="Cooplix team" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Cooplix</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional service and technical excellence for every roofing project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-cooplix-100 text-cooplix-600 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Expertise</h3>
              <p className="text-gray-600">
                Our team brings specialized knowledge in roofing systems, materials, and construction methods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-cooplix-100 text-cooplix-600 mb-4">
                <Wrench size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Tools</h3>
              <p className="text-gray-600">
                We utilize industry-leading software like AppliCad for precise estimations and 3D modeling.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-cooplix-100 text-cooplix-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-gray-600">
                Our professionals have worked on countless residential and commercial roofing projects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-cooplix-100 text-cooplix-600 mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Efficiency</h3>
              <p className="text-gray-600">
                Our detailed planning helps minimize waste and optimize material usage for cost savings.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Expertise */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white p-8 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
                alt="Roof planning expertise" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Expertise & Tools</h2>
              <p className="text-lg text-gray-700 mb-6">
                We combine technical knowledge with cutting-edge tools to deliver exceptional roofing solutions for construction professionals.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Background</h3>
                  <p className="text-gray-600 mb-4">
                    Our team includes experienced roof designers, structural engineers, and construction specialists who understand the complexities of modern building projects.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tools We Use</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">AppliCad Roof Wizard</span>
                        <p className="text-sm text-gray-600">For precise 3D roof modeling and material estimation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">AutoCAD</span>
                        <p className="text-sm text-gray-600">For detailed technical drawings and plans</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Advanced Project Management Software</span>
                        <p className="text-sm text-gray-600">For scheduling and coordination</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-cooplix-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Material Database Systems</span>
                        <p className="text-sm text-gray-600">For accurate pricing and inventory management</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional roofing solutions for your projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-cooplix-500 text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Project Analysis</h3>
                <p className="text-gray-600">
                  We start by thoroughly analyzing your building plans and project requirements to understand the specific needs of your roofing project.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-cooplix-300 transform translate-x-8"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-cooplix-500 text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Detailed Planning</h3>
                <p className="text-gray-600">
                  Our team develops comprehensive roof blocking plans, schedules, and material lists tailored to your specific project needs.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-cooplix-300 transform translate-x-8"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-cooplix-500 text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Review & Refinement</h3>
                <p className="text-gray-600">
                  We collaborate with your team to review all plans, make necessary adjustments, and ensure everything meets your exact specifications.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-cooplix-300 transform translate-x-8"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-cooplix-500 text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Final Delivery</h3>
                <p className="text-gray-600">
                  We provide finalized roofing documentation, including detailed plans, material lists, and schedules, ready for implementation in your construction project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title="Work With Our Expert Team"
        description="Ready to elevate your roofing projects with professional planning and estimations? Contact us today to get started."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </div>
  );
};

export default About;
