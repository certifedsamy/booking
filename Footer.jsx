import React from "react";

const Footer = () => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#0ef18d] to-[#2BD2A4] py-20 px-24 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-white ">
        Book Now,
        <br /> Fly Tomorow.
      </h1>

      <div className="flex flex-col gap-3">
        <div className="font-normal text-lg text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Conditions générales et politique de confidentialité
        </div>
        <div className="font-normal text-lg text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Chaîne d'approvisionnement
        </div>
        <div className="font-normal text-lg text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Politique sur les Cookies et la Confidentialité
        </div>
        <div className="font-normal text-lg text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Paramètres des Cookies
        </div>
      </div>
      <div className="flex flex-col gap-4 relative">
        <span className="text-sm font-normal text-white text-center">
          © 2024 Fly-Better
        </span>
        <input
          type="text"
          className="bg-white outline-none px-6 py-3 rounded-lg pr-10 text-[#2BD2A4]"
          placeholder="Enter Your E-mail"
        />
        <button
          className="px-4 py-2 rounded-lg text-white text-xs flex items-center bg-[#0ef18d] hover:bg-[#0ef18d]/70 tranbsition-all duration-300 hover:shadow-md hover:shadow-[#0ef18d]/20 absolute  
        left-[170px] top-11"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Footer;
