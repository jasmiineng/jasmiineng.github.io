import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsProjectsOpen(false), 150);
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          <NavLink to="/" className="hover:text-yellow-600 transition">
            Jasmine Ng
          </NavLink>
        </h1>
        <div className="flex space-x-6 text-base font-medium relative">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition ${
                isActive ? 'text-yellow-600 font-semibold' : 'text-gray-700'
              } hover:text-yellow-600`
            }
          >
            About
          </NavLink>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `transition ${
                  isActive ? 'text-yellow-600 font-semibold' : 'text-gray-700'
                } hover:text-yellow-600`
              }
            >
              Projects ▾
            </NavLink>
            {isProjectsOpen && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white border border-yellow-200 rounded-2xl shadow-2xl z-50 overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/projects/ClapCounter"
                  className="block px-6 py-3 text-gray-700 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-200 font-medium"
                >
                  Clap Counter
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition ${
                isActive ? 'text-yellow-600 font-semibold' : 'text-gray-700'
              } hover:text-yellow-600`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
