import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Portfolio", target: "portfolio" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 max-w-3xl mx-auto rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600">
          SARFARAZ AKRAM
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-white">
          {navLinks.map(({ label, target }) => (
            <Link
              key={target}
              to={target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active-link"
              onClick={() => setIsOpen(false)}
              className="relative group cursor-pointer transition-all"
            >
              {label}
              <span className="absolute bottom-[-4px] left-0 h-[2.5px] w-0 group-hover:w-full group-[.active-link]:w-full transition-all duration-500 bg-gradient-to-r from-blue-400 via-cyan-600 to-green-600 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          aria-label="Toggle navigation"
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 backdrop-blur-xl bg-white/5">
          <nav className="flex flex-col items-center py-4 space-y-4 text-white font-semibold">
            {navLinks.map(({ label, target }) => (
              <Link
                key={target}
                to={target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active-link"
                onClick={() => setIsOpen(false)}
                className="relative group cursor-pointer transition-all"
              >
                {label}
                <span className="absolute bottom-[-4px] left-0 h-[2.5px] w-0 group-hover:w-full group-[.active-link]:w-full transition-all duration-500 bg-gradient-to-r from-blue-400 via-cyan-600 to-green-600 rounded-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
