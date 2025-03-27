import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const serviceItems = [
    {
      label: "Banking APIs",
      href: "/services/banking-apis",
    },
    {
      label: "B2B Banking Systems",
      href: "/services/b2b-systems",
    },
    {
      label: "Loan Services",
      href: "/services/digital-payments",
    },
    {
      label: "Credit Building Solutions",
      href: "/services/credit-building",
    },
    {
      label: "ATM Machine Installation",
      href: "/services/atm",
    },
    {
      label: "Digital Payment Solutions",
      href: "/services/digital-payments",
    },
    {
      label: "Investment and Wealth Management",
      href: "/services/investment-and-wealth-management",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center hover:text-gray-200 transition-colors"
      >
        Our Services
        {isOpen ? (
          <ChevronUp className="ml-2" size={18} />
        ) : (
          <ChevronDown className="ml-2" size={18} />
        )}
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-80 
                     bg-white shadow-lg rounded-lg 
                     border border-gray-100 
                     z-50 overflow-hidden 
                     transform transition-all duration-300 
                     origin-top-left"
        >
          {serviceItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-5 py-4 
                         hover:bg-gray-50 
                         transition-colors 
                         group"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <div>
                  <h4
                    className="text-gray-800 font-semibold 
                                 group-hover:text-blue-600 
                                 transition-colors"
                  >
                    {item.label}
                  </h4>
                  {/* <p className="text-gray-500 text-sm mt-1">
                    {item.description}
                  </p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
