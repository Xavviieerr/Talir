import Button from "../../utils/GetStartedButton";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex justify-center py-3 backdrop-blur-lg">
      <div
        className="w-[90%] md:w-[80%] lg:w-[70%] flex items-center
   justify-between px-6 py-3 rounded-2xl bg-white/20 shadow-lg backdrop-blur-md 
   border border-white/30 md:py-2"
      >
        {/* Left side - logo and name */}
        <div className="flex items-center lg:space-x-2 md:space-x-1">
          <img
            src="/tailr.svg"
            alt="Logo"
            className="w-[10%] h-[90%] lg:w-[10%] lg:h-[90%] cursor-pointer
      md:h-[80%] md:w-[8%] sm:w-[6%] sm:h-[12%]
       rounded-full"
          />
          <span
            className="font-[var(--font-jakarta)] lg:text-md text-blue-700
          md:text-[110%]
           font-semibold  cursor-pointer"
          >
            Tailr
          </span>
        </div>

        {/* Right side - button */}
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
