import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll down = hide
      } else {
        setShowNavbar(true); // Scroll up = show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#d7d4ca] z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >

      <div className="flex items-center justify-between w-[84%] mx-auto py-2">
        <img
          src="/images/FavLogo.png"
          alt="Logo"
          className="w-[70px] h-auto"
        />
        <ul className="flex space-x-6 font-semibold text-sm">
          <li>
            <Link
              to="/"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/hireme"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              HIRE ME
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
