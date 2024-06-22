import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col py-20  items-center justify-center gap-10 h-[93.5vh] bg-gradient-to-t from-[#0ef18d]/15 to-transparent relative">
      <h1 className="text-6xl text-slate-700 font-bold w-1/4 text-center">
        Book Now, Fly Tomorow.
      </h1>
      <p className="font-normal text-base text-slate-600 w-2/5 text-center">
        ExploreWorld Travel Agency offers{" "}
        <span className="text-[#0ef18d] font-semibold">personalized</span>{" "}
        travel planning for all types of vacations. Whether you're looking for a
        relaxing beach escape, an{" "}
        <span className="text-[#0ef18d] font-semibold">adventurous trek</span> ,
        or a{" "}
        <span className="text-[#0ef18d] font-semibold">cultural journey</span> ,
        we handle all the details. Enjoy seamless travel experiences with our
        expert guidance and{" "}
        <span className="text-[#0ef18d] font-semibold">
          exceptional service
        </span>{" "}
        .
      </p>
      <div className="flex items-center gap-10 w-1/4 justify-center">
        <button className="px-4 py-3 rounded-lg text-white bg-[#0ef18d] hover:bg-[#0ef18d]/70 tranbsition-all duration-300 hover:shadow-md hover:shadow-[#0ef18d]/20">
          Get Started
        </button>
        <button className="px-4 py-3 rounded-lg text-white bg-[#2BD2A4] hover:bg-[#2BD2A4]/70 stransition-all duration-300 hover:shadow-md hover:shadow-[#2BD2A4]/20">
          Any Questions ?
        </button>
      </div>
    </div>
  );
};

export default Description;
