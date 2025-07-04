import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Portfolio", "Skills", "Contact"];

  return (
    <header className="sticky top-4 z-50 max-w-3xl mx-auto rounded-xl backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-500 via-pink-500 to-red-500">
          SARFARAZ AKRAM
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-80}
              activeClass="active-link"
              onClick={() => setIsOpen(false)}
              className="relative group cursor-pointer font-bold transition-all text-white active-link:text-white"
            >
              {link}
              <span className="absolute bottom-[-4px] left-0 h-[2.5px] w-0 group-hover:w-full group-[.active-link]:w-full transition-all duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white/5 border-b border-white/10">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active-link"
                onClick={() => setIsOpen(false)}
                className="relative group cursor-pointer font-bold transition-all text-white"
              >
                {link}
                <span className="absolute bottom-[-4px] left-0 h-[2.5px] w-0 group-hover:w-full group-[.active-link]:w-full transition-all duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
