import React from "react";
import Button from "../../utils/GetStartedButton"

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex justify-center py-3 backdrop-blur-lg">
  <div className="w-[90%] md:w-[80%] lg:w-[70%] flex items-center justify-between px-6 py-3 rounded-2xl bg-white/20 shadow-lg backdrop-blur-md border border-white/30">
    {/* Left side - logo and name */}
    <div className="flex items-center space-x-2">
      <img src="/tailr.svg" alt="Logo" className="w-[10%] h-[90%] cursor-pointer rounded-full" />
      <span className="font-[var(--font-jakarta)] text-xl text-blue-700 font-semibold  cursor-pointer">Tailr</span>
    </div>

    {/* Right side - button */}
    <Button />

  </div>
</div>

  );
};

export default Navbar;
