import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex itmes-center justify-between px-24 py-4 shadow-lg shadow-slate-200 fixed z-20 bg-white w-full transition-all duration-500 ease-in-out ${
        isScrolled ? "top-0" : "top-9"
      }`}
    >
      <h1 className="text-4xl font-bold text-slate-700">Logo.</h1>
      <div className="flex items-center gap-8">
        <a
          href=""
          className="text-base font-normal text-slate-700 hover:border-b hover:border-[#0ef18d] hover:text-[#0ef18d] transition-all "
        >
          Home
        </a>
        <a
          href=""
          className="text-base font-normal text-slate-700 hover:border-b hover:border-[#0ef18d] hover:text-[#0ef18d] transition-all "
        >
          About
        </a>
        <a
          href=""
          className="text-base font-normal text-slate-700 hover:border-b hover:border-[#0ef18d] hover:text-[#0ef18d] transition-all "
        >
          Contact
        </a>
        <a
          href=""
          className="text-base font-normal text-slate-700 hover:border-b hover:border-[#0ef18d] hover:text-[#0ef18d] transition-all "
        >
          FAQ
        </a>
      </div>
      <div className="flex items-center pr-20 relative">
        <button className="text-white bg-slate-700 px-5 py-3 rounded-full hover:shadow-md hover:bg-[#0ef18d] hover:shadow-[#0ef18d50] transition-all duration-400 z-10">
          Log In
        </button>
        <button className="text-slate-700 bg-white px-5 pl-10 py-3 rounded-r-full hover:shadow-lg absolute ml-[55px] hover:bg-[#0ef18d] hover:text-white hover:shadow-[#0ef18d50] transition-all duration-400">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
