import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const nowSizeWith = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", nowSizeWith);

    // Clean up
    return () => {
      window.removeEventListener("resize", nowSizeWith);
    };
  });

  return (
    <div className=" w-full h-screen bg-gray-300 flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-bold text-gray-600 selection:text-amber-600">
        The actual size of the window is
      </h1>
      <p className="text-[90px] font-bold mt-4 text-gray-700 transition-all duration-300 hover:rotate-6 hover:scale-125 hover:text-amber-600  selection:text-amber-600 cursor-pointer">{windowWidth}<span className="text-[35px] text-amber-600">px</span></p>
    </div>
  );
}

export default App;
