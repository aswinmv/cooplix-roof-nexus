
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkTo: string;
}

const ServiceCard = ({ title, description, icon, linkTo }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-cooplix-500 mb-4 w-12 h-12 flex items-center justify-center bg-cooplix-50 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={linkTo} 
        className="inline-flex items-center text-cooplix-600 hover:text-cooplix-700 font-medium"
      >
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
