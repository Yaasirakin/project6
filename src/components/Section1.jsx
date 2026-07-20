import React from "react";
import get from "../assets/image/get.jpg";
import mdright from "../assets/image/mdright.svg";
import mdleft from "../assets/image/mdleft.svg";
import right from "../assets/image/right.svg";
import left from "../assets/image/left.svg";

const Section1 = () => {
  return (
    <section className=" w-full bg-slate-800 md:px-20 md:py-[90px] pb-5  flex flex-col 
    md:flex-row items-center justify-between  h-fit relative z-10">
      <div className="hidden md:block absolute top-0 right-0">
      <img src={mdright} alt="" className="w-auto h-[500px] " />
      </div>
      <div className="hidden md:block absolute top-[450px] left-0">
        <img src={mdleft} alt="" className=" w-auto h-[350px] " />
      </div>
  


      {/* Mobile Image */}
      <div className="md:hidden w-full top-[100px] ">
        <img
          src={get}
          alt="Family"
          className="w-full h-[350px] mt- object-cover"
        />
      </div>

      {/* Text */}
      <div className=" max-w-xl mt-6 flex flex-col px-6 items-center md:items-start text-center md:text-left">
       
        <div className="w-32 h-[2px] bg-white mb-10 hidden md:block "></div>

        <h1 className="text-white pt-6 font-bold text-4xl md:text-6xl leading-tight">
          Humanizing your insurance.
        </h1>

        <p className="text-white/80 mt-6 text-base md:text-lg leading-8 ">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>

        <button className="mt-8 border-2 border-white px-8 py-3 text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-slate-800 transition">
          View Plans
        </button>
         <div className="md:hidden absolute top-0 right-0 mt-[700px]">
          <img src={right} alt="" className="w-auto h-[250px] " />

        </div>
        <div className="md:hidden absolute top-0 left-0 mt-[350px] ">
          <img src={left} alt="" className=" w-auto h-[150px] " />
        </div>

      </div>

      {/* Desktop Image */}
      <div className="hidden md:block  h-72 ">
        <img
          src={get}
          alt="Family"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Section1;