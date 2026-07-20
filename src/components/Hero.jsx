import React from "react";
import snappy from "../assets/image/snappy.svg";
import price from "../assets/image/price.svg";
import people from "../assets/image/people.svg";
import mdhow from "../assets/image/mdhow.svg";
import mobilehow from "../assets/image/mobilehow.svg";

const Hero = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <section className="min-h-screen flex items-center justify-center px-6 md:px-20 md:mt-36 py-16 md:py-20">
        <div className="max-w-6xl w-full">

          <h1 className="font-serif-custom text-4xl md:text-6xl text-[#1a1a1a] font-bold text-center md:text-left mb-16">
            We're different
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-16">
            {/* Card 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6">
                <img src={snappy} alt="Snappy Process" />
              </div>

              <h3 className="font-serif-custom text-2xl font-bold text-[#1a1a1a] mb-3">
                Snappy Process
              </h3>

              <p className="text-[#4a4a4a] leading-relaxed text-sm md:text-base max-w-xs mx-auto md:mx-0">
                Our application process can be completed in minutes, not hours.
                Don't get stuck filling in tedious forms.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6">
                <img src={price} alt="Affordable Prices" />
              </div>

              <h3 className="font-serif-custom text-2xl font-bold text-[#1a1a1a] mb-3">
                Affordable Prices
              </h3>

              <p className="text-[#4a4a4a] leading-relaxed text-sm md:text-base max-w-xs mx-auto md:mx-0">
                We don't want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6">
                <img src={people} alt="People First" />
              </div>

              <h3 className="font-serif-custom text-2xl font-bold text-[#1a1a1a] mb-3">
                People First
              </h3>

              <p className="text-[#4a4a4a] leading-relaxed text-sm md:text-base max-w-xs mx-auto md:mx-0">
                Our plans aren't full of conditions and clauses to prevent
                payouts. We make sure you're covered when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="px-2 md:px-[70px] pb-16">
        <div className="bg-[#2D2640] flex flex-col md:flex-row items-center justify-between text-center md:text-left px-10 md:px-12 py-10 gap-8 relative z-10 h-fit">
          <div className="hidden md:block absolute top-0 right-0">
            <img src={mdhow} alt="How We Work" className="w-auto h-[130px]" />
          </div>
          <div className="md:hidden absolute top-0 right-0">
            <img src={mobilehow} alt="How We Work" className="w-auto h-[200px]" />

          </div>
          <h1 className="font-serif-custom text-white text-3xl md:text-5xl font-bold leading-tight">
            Find out more
            about how we work
          </h1>

          <button className="border-2 border-white px-8 py-3 text-white uppercase tracking-[3px] hover:bg-white hover:text-[#2D2640] text-[14px] transition duration-300">
            How We Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;