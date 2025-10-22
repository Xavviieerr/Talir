const Logo = () => {
  return (
    <div className="flex items-center lg:space-x-2 md:space-x-1">
      <img
        src="/tailr.svg"
        alt="Logo"
        className="w-[10%] h-[90%] lg:w-[10%] lg:h-[90%] cursor-pointer
      md:h-[80%] md:w-[8%] sm:w-[6%] sm:h-[12%]
       rounded-full"
      />
      <span
        className="font-[var(--font-jakarta)] lg:text-md text-blue-800
          md:text-[110%]
           font-semibold  cursor-pointer"
      >
        Tailr
      </span>
    </div>
  );
};

export default Logo;
