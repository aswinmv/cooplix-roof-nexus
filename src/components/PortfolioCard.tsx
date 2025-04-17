
import { Link } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  category: string;
  imageUrl: string;
  linkTo: string;
}

const PortfolioCard = ({ title, category, imageUrl, linkTo }: PortfolioCardProps) => {
  return (
    <Link to={linkTo} className="group block relative overflow-hidden rounded-lg shadow-lg">
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
      <div className="absolute bottom-0 left-0 p-6">
        <span className="inline-block text-sm font-medium text-cooplix-300 mb-2">{category}</span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
    </Link>
  );
};

export default PortfolioCard;
