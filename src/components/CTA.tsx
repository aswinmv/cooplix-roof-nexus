
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { memo } from "react";

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
}

// Using memo to prevent unnecessary re-renders
const CTA = memo(({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = "bg-cooplix-50",
}: CTAProps) => {
  return (
    <div className={`${backgroundClass} py-12 sm:py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl mb-3 sm:mb-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Button 
            asChild
            size="lg"
            className="bg-cooplix-500 hover:bg-cooplix-600 text-white px-6 sm:px-8"
          >
            <Link to={primaryButtonLink} aria-label={primaryButtonText}>
              {primaryButtonText}
            </Link>
          </Button>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-cooplix-800 hover:bg-gray-100 border-cooplix-200 px-6 sm:px-8"
            >
              <Link to={secondaryButtonLink} aria-label={secondaryButtonText}>
                {secondaryButtonText}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});

CTA.displayName = "CTA";

export default CTA;
