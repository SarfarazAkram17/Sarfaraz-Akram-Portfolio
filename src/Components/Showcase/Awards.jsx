import { useState } from "react";
import { createPortal } from "react-dom";
import { FaExpand } from "react-icons/fa";
import black_belt from "../../assets/black-belt.png";

const Awards = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-3 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Image wrapper */}
        <div data-aos="fade-up-right" className="relative group cursor-pointer">
          <img src={black_belt} alt="Black Belt" className="w-full" />

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300 flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <FaExpand className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal via Portal */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={black_belt}
                alt="Black Belt"
                className="max-w-full max-h-full object-contain shadow-2xl"
              />

              <button
                className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 
                     rounded-full h-8 w-8 flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Awards;
