import React from "react";

const GlowBg = () => {
  return (
    <div
      className="fixed animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-[480px] h-[480px] rounded-full 
                 bg-gradient-to-br from-blue-800 via-cyan-800 to-green-800
                 blur-[140px] opacity-30 -z-50 pointer-events-none
                 sm:w-[350px] sm:h-[350px]
                 xs:w-[280px] xs:h-[280px]"
    ></div>
  );
};

export default GlowBg;
