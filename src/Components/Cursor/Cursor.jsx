import { useEffect } from "react";
import fluidCursor from "../../Hooks/useFluidCursor";

const Cursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-2 pointer-events-none">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  );
};
export default Cursor;
