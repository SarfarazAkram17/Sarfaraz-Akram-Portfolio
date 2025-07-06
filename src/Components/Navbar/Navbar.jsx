import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Portfolio", target: "portfolio" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll handler with dynamic header height to prevent extra scroll
  const handleScrollTo = (target) => {
    const el = document.getElementById(target);
    const header = document.querySelector("header"); // get actual header height dynamically

    if (el && header) {
      const headerOffset = header.offsetHeight + 16; // add a little buffer for padding/margin
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(target);
      setIsOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let closest = "";
      let closestOffset = Infinity;
      navLinks.forEach(({ target }) => {
        const el = document.getElementById(target);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (Math.abs(top) < closestOffset) {
            closest = target;
            closestOffset = Math.abs(top);
          }
        }
      });
      setActiveSection(closest);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 max-w-3xl mx-auto rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600">
          SARFARAZ AKRAM
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-8 text-sm font-semibold text-white">
          {navLinks.map(({ label, target }) => (
            <button
              key={target}
              onClick={() => handleScrollTo(target)}
              className={`relative group cursor-pointer transition-all ${
                activeSection === target ? "active-link" : ""
              }`}
            >
              {label}
              <span
                className={`absolute bottom-[-4px] left-0 h-[2.5px] bg-gradient-to-r from-blue-400 via-cyan-600 to-green-600 rounded-full transition-all duration-500 ${
                  activeSection === target
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
       <div className="sm:hidden">
         <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
       </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden border-t border-white/10 backdrop-blur-xl bg-white/5">
          <nav className="flex flex-col items-center py-4 space-y-4 text-white font-semibold">
            {navLinks.map(({ label, target }) => (
              <button
                key={target}
                onClick={() => handleScrollTo(target)}
                className={`relative group cursor-pointer transition-all ${
                  activeSection === target ? "active-link" : ""
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-[-4px] left-0 h-[2.5px] bg-gradient-to-r from-blue-400 via-cyan-600 to-green-600 rounded-full transition-all duration-500 ${
                    activeSection === target
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
