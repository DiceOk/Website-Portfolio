import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center w-[84%] mx-auto py-5 relative z-20">
      <img
        src="/images/FavLogo.png"
        alt="Logo"
        className="w-[100px] h-auto absolute top-5 left-5"
      />
      <ul className="flex ml-auto space-x-8 font-bold">
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
    </nav>
  );
}

