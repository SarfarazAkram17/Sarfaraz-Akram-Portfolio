import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Portfolio", target: "portfolio" },
  { label: "Contact", target: "contact" },
];

function debounce(func, wait = 20) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollTo = (target) => {
    const el = document.getElementById(target);
    const header = document.querySelector("header");

    if (el && header) {
      const headerOffset = header.offsetHeight + 16;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
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
    }, 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 w-full max-w-3xl rounded-xl">
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
        <h1
          onClick={() => handleScrollTo("home")}
          className="cursor-pointer text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600"
        >
          SARFARAZ AKRAM
        </h1>

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
                  activeSection === target ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </nav>

        <div className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
      </div>

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
