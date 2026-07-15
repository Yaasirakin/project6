import React from "react";
import get from "../assets/image/get.jpg";

const Section1 = () => {
  return (
    <section className="w-full bg-slate-800 px-6 md:px-10 py-16 flex flex-col md:flex-row items-center justify-center gap-12">

      {/* Mobile Image */}
      <div className="block md:hidden w-full">
        <img
          src={get}
          alt="Family"
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight">
          Humanizing your insurance.
        </h1>

        <p className="text-white/80 mt-6 text-base md:text-lg leading-8">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>

        <button className="mt-8 border-2 border-white px-8 py-3 text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-slate-800 transition">
          View Plans
        </button>
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block w-[450px]">
        <img
          src={get}
          alt="Family"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Section1;