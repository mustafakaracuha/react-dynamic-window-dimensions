import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const nowSizeWith = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", nowSizeWith);

    // Clean up 🤌🏼
    return () => {
      window.removeEventListener("resize", nowSizeWith);
    };
  });

  return (
    <div className=" w-full h-screen bg-amber-500 flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-bold">
        The actual size of the window is
      </h1>
      <p className="text-[90px] font-bold mt-4 text-amber-800">{windowWidth}<span className="text-[35px]">px</span></p>
    </div>
  );
}

export default App;
