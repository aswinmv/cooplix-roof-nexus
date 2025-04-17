
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/PortfolioCard";
import CTA from "@/components/CTA";

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const projects = [
    {
      id: 1,
      title: "Lakeside Residential Development",
      category: "residential",
      description: "Comprehensive roof blocking and material planning for a 25-unit residential development.",
      imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      linkTo: "/portfolio/1"
    },
    {
      id: 2,
      title: "Downtown Office Complex",
      category: "commercial",
      description: "AppliCad-based estimation and scheduling for a multi-building office complex.",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      linkTo: "/portfolio/2"
    },
    {
      id: 3,
      title: "Custom Home Project",
      category: "residential",
      description: "Detailed roof blocking and quantity takeoffs for a luxury custom home with complex roof geometry.",
      imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      linkTo: "/portfolio/3"
    },
    {
      id: 4,
      title: "Industrial Warehouse Facility",
      category: "commercial",
      description: "Material planning and scheduling for a large industrial warehouse with specialized roofing requirements.",
      imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      linkTo: "/portfolio/4"
    },
    {
      id: 5,
      title: "Multi-Family Housing Complex",
      category: "residential",
      description: "Comprehensive roofing solutions for a 50-unit apartment complex with varied roof types.",
      imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      linkTo: "/portfolio/5"
    },
    {
      id: 6,
      title: "Retail Shopping Center",
      category: "commercial",
      description: "Detailed scheduling and quantity takeoffs for a shopping center with multiple building phases.",
      imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      linkTo: "/portfolio/6"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cooplix-800 text-white py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-cooplix-100">
              Explore our past projects and see how we've helped builders and contractors with their roofing needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              className={filter === "all" ? "bg-cooplix-500 hover:bg-cooplix-600" : ""}
              onClick={() => setFilter("all")}
            >
              All Projects
            </Button>
            <Button 
              variant={filter === "residential" ? "default" : "outline"}
              className={filter === "residential" ? "bg-cooplix-500 hover:bg-cooplix-600" : ""}
              onClick={() => setFilter("residential")}
            >
              Residential
            </Button>
            <Button 
              variant={filter === "commercial" ? "default" : "outline"}
              className={filter === "commercial" ? "bg-cooplix-500 hover:bg-cooplix-600" : ""}
              onClick={() => setFilter("commercial")}
            >
              Commercial
            </Button>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                title={project.title}
                category={project.category === "residential" ? "Residential" : "Commercial"}
                imageUrl={project.imageUrl}
                linkTo={project.linkTo}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No projects found with the selected filter.</p>
            </div>
          )}
          
          {/* Case Studies Preview */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Detailed explorations of how our roofing solutions have addressed specific challenges and delivered results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                      alt="Commercial complex case study" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold mb-2">Large-Scale Commercial Complex</h3>
                    <p className="text-gray-700 mb-4">
                      How we optimized material usage and scheduling for a multi-building commercial project, resulting in 15% cost savings.
                    </p>
                    <Button 
                      asChild
                      className="bg-cooplix-500 hover:bg-cooplix-600"
                    >
                      <a href="#case-study-1">Read Case Study</a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
                      alt="Residential development case study" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold mb-2">Residential Development Project</h3>
                    <p className="text-gray-700 mb-4">
                      How our detailed roof blocking plans and AppliCad estimations streamlined construction for a 50-unit housing development.
                    </p>
                    <Button 
                      asChild
                      className="bg-cooplix-500 hover:bg-cooplix-600"
                    >
                      <a href="#case-study-2">Read Case Study</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA
        title="Ready to Start Your Project?"
        description="Contact us today to discuss how our roofing solutions can help with your next construction project."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-cooplix-50"
      />
    </div>
  );
};

export default Portfolio;
