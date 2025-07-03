const CenterGlowBackground = () => {
  return (
    <div
      className="fixed animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[450px] h-[450px] rounded-full 
                    bg-gradient-to-br from-purple-500 via-pink-500 to-red-500
                    blur-[130px] opacity-30 -z-10 pointer-events-none"
    ></div>
  );
};

export default CenterGlowBackground;
