
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
}

const CTA = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = "bg-cooplix-50",
}: CTAProps) => {
  return (
    <div className={`${backgroundClass} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild
            size="lg"
            className="bg-cooplix-500 hover:bg-cooplix-600 text-white px-8"
          >
            <Link to={primaryButtonLink}>
              {primaryButtonText}
            </Link>
          </Button>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-cooplix-800 hover:bg-gray-100 border-cooplix-200 px-8"
            >
              <Link to={secondaryButtonLink}>
                {secondaryButtonText}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTA;
