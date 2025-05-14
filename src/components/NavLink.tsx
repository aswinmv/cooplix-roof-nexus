
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

const NavLink = ({ to, active, children, mobile = false, onClick, ariaLabel }: NavLinkProps) => {
  const baseClasses = "transition-colors font-medium";
  
  const desktopClasses = active
    ? "text-cooplix-600 font-semibold px-3 py-2 text-sm"
    : "text-gray-700 hover:text-cooplix-600 px-3 py-2 text-sm";
    
  const mobileClasses = active
    ? "text-cooplix-600 bg-gray-50 block px-3 py-2 rounded-md text-base"
    : "text-gray-700 hover:text-cooplix-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base";
  
  const className = `${baseClasses} ${mobile ? mobileClasses : desktopClasses}`;
  
  return (
    <Link to={to} className={className} onClick={onClick} aria-label={ariaLabel || typeof children === 'string' ? children as string : undefined} aria-current={active ? 'page' : undefined}>
      {children}
    </Link>
  );
};

export default NavLink;
