import React from "react";
import Marque from "react-fast-marquee";
import takata from "../assets/icons/takata.png";
import arc from "../assets/icons/arc.png";
import qatar from "../assets/icons/qatar.png";
import sparco from "../assets/icons/sparco.png";
import agv from "../assets/icons/agv.png";

const Sponsors = () => {
  return (
    <Marque
      speed={100}
      
      className="bg-[#0ef18d]/15 max-h-[20vh] overflow-y-hidden flex items-center "
    >
      <div>
        <img src={takata} alt="" className="pt-10" />
      </div>
      <div>
        <img src={qatar} alt="" />
      </div>
      <div>
        <img src={arc} alt="" />
      </div>
      <div>
        <img src={agv} alt="" />
      </div>
      <div>
        <img src={sparco} alt="" />
      </div>
    </Marque>
  );
};

export default Sponsors;
