
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, active, children, mobile = false, onClick }: NavLinkProps) => {
  const baseClasses = "transition-colors font-medium";
  
  const desktopClasses = active
    ? "text-cooplix-600 font-semibold px-3 py-2 text-sm"
    : "text-gray-700 hover:text-cooplix-600 px-3 py-2 text-sm";
    
  const mobileClasses = active
    ? "text-cooplix-600 bg-gray-50 block px-3 py-2 rounded-md text-base"
    : "text-gray-700 hover:text-cooplix-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base";
  
  const className = `${baseClasses} ${mobile ? mobileClasses : desktopClasses}`;
  
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
