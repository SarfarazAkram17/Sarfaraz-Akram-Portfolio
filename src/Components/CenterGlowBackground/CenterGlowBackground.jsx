const CenterGlowBackground = () => {
  return (
    <div
      className="fixed animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-[480px] h-[480px] rounded-full 
                 bg-gradient-to-br from-blue-400 via-cyan-600 to-green-600
                 blur-[140px] opacity-30 -z-10 pointer-events-none
                 sm:w-[350px] sm:h-[350px]
                 xs:w-[280px] xs:h-[280px]"
    ></div>
  );
};

export default CenterGlowBackground;
