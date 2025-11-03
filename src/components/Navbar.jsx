import { useState, useEffect } from 'react';

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
            <a
              href="#home"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              PORTFOLIO
            </a>
          </li>
          <li>
            <a
              href="#hireme"
              className="text-black hover:text-red-500 transition-colors duration-200"
            >
              HIRE ME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
