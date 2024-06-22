import React from "react";
import localisation from "../assets/icons/localisation.svg";
import phone from "../assets/icons/phone.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import tiktok from "../assets/icons/tiktok.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-24 py-2 h-10 bg-gradient-to-r from-[#59FB67] to-[#2BD2A4]">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <img src={localisation} alt="" className="h-4" />
          <span className="font-normal text-sm text-black hover:underline cursor-pointer">
            Algeria. Algiers. Hydra city
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src={phone} alt="" className="h-4" />
          <span className="font-normal text-sm text-black hover:underline cursor-pointer">
            +1.235.264.956
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src={instagram} alt="" className="h-5 cursor-pointer" />
        <img src={twitter} alt="" className="h-4 cursor-pointer" />
        <img src={tiktok} alt="" className="h-4 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
