import React from "react";
import snappy from "../assets/image/snappy.svg";
import price from "../assets/image/price.svg";
import people from "../assets/image/people.svg";

const Hero = () => {
  return (
    <div className="bg-[#FAFAFA]">
      {/* Different Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-[70px] py-16 md:py-20">
        <div className="max-w-6xl w-full">
          {/* Heading */}
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
      <div className="px-6 md:px-[70px] pb-16">
        <div className="bg-[#2D2640] flex flex-col md:flex-row items-center justify-between text-center md:text-left px-8 md:px-12 py-12 gap-8">
          <h1 className="font-serif-custom text-white text-4xl md:text-5xl font-bold leading-tight">
            Find out more
            <br />
            about how we work
          </h1>

          <button className="border-2 border-white px-8 py-3 text-white uppercase tracking-[3px] hover:bg-white hover:text-[#2D2640] transition duration-300">
            How We Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;