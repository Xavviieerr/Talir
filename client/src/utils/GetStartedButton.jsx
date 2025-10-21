import React from "react";

const Button = () => {
  return (
    <a
      href="/sign-up">
    <button className="group relative flex items-center gap-3 rounded-full border-none bg-blue-600 px-5 py-2 text-white font-medium text-lg shadow-[inset_0_0_1.6em_-0.6em_#0000ff] transition-all duration-300 overflow-hidden">
      Get started

      {/* Icon container */}
      <div className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-[0.1em_0.1em_0.6em_0.2em_#0000ff] transition-all duration-300 group-hover:w-[calc(100%-0.5em)] group-active:scale-95">
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </div>
    </button>
    </a>
  );
};

export default Button;
