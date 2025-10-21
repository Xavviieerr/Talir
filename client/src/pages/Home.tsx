import React from "react";
import Orb from "../utils/orb/Orb";
import GithubButton from "../utils/GithubButton"
import Button from "../utils/GetStartedButton"


const Home = () => {
  return (
    <div className="flex items-center justify-center py-[2%]">
     <div className="m-4 relative z-10 text-center max-w-2xl text-black">
    <h1 className="text-[310%] font-[var(--font-jakarta)] font-extrabold mb-[8%] leading-tight">
        Stop wasting hours tailoring your <span className="underline text-blue-600">CV</span>.
        let AI customize it for every job in <br />
        <span className="underline text-blue-900">seconds</span>
        .
        <br />
    <span className="text-blue-600 ">Just paste your job post.</span>
  </h1>

  <p className="text-gray-800 text-[110%] font-bold mb-6 mt-[5%]">
    Upload your CV and job description — let AI tailor your application in seconds.
    <br /> Save hours, apply smarter, and stand out instantly.
  </p>

  <div className="flex justify-center gap-4">
    <a
      href="/sign-up"
      className="px-6 py-3 bg-blue-600 text-white cursor-pointer rounded-full font-medium hover:bg-blue-700 transition"
    >
      Get Started
    </a>
    
  </div>
</div>
<div className="absolute right-[5%] bottom-[7%]" >
  <GithubButton />
</div>
<img src="/tailr.svg" className="absolute right-10 top-[50%] w-[12%] rotate-3 opacity-80" />
<img src="/robot.jpg" className="absolute left-10 top-[20%] w-[12%] rotate-3 opacity-80" />
<div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/30 blur-3xl rounded-full -z-10"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/30 blur-3xl rounded-full -z-10"></div>
<div className="absolute inset-x-0 top-40 mx-auto w-[80%] h-[40%] bg-white/5 backdrop-blur-md rounded-3xl border border-white/10"></div>

      <div className="absolute inset-0 top-[11%]" style={{ width: "100%", height: "600px", }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </div>
  );
};

export default Home;
