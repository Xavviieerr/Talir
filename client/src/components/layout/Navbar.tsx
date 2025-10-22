import Button from "../../utils/GetStartedButton";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex justify-center py-3 backdrop-blur-lg">
      <div
        className="w-[90%] md:w-[80%] lg:w-[70%] flex items-center
   justify-between px-6 py-3 rounded-2xl bg-white/20 shadow-lg backdrop-blur-md 
   border border-white/30 md:py-2"
      >
        {/* Left side - logo and name */}
        <Logo />

        {/* Right side - button */}
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
