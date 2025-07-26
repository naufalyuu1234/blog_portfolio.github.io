import React from "react";

interface NavLinkProps extends React.PropsWithChildren {
  to: string;
  onClick?: () => void;
  isActive?: boolean;
}
const NavLink: React.FC<NavLinkProps> = ({
  to,
  onClick,
  children,
  isActive,
}) => {
  // Define styles
  const baseClasses =
    "block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeClasses =
    "bg-gray-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400";
  const inactiveClasses =
    "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700";

  return (
    <li>
      {/* Ganti <Link> jadi <a> untuk scrolling di halaman yang sama */}
      <a
        href={to}
        onClick={onClick}
        className={`${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
        aria-current={isActive ? "page" : undefined} // Bagus untuk aksesibilitas
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;
