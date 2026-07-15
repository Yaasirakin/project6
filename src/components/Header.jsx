import React, { useState } from "react";
import hamburger from "../assets/image/hamburger.svg";
import close from "../assets/image/close.svg";
import logo from "../assets/image/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center px-6 md:px-20 py-4 font-serif-custom bg-[#FAFAFA]">
      
       <div>
         <img src={logo} alt="Insure Logo" className="w-32 md:w-40" />
       </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#">How we work</a>
        <a href="#">Blog</a>
        <a href="#">Account</a>

        <button className="border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition">
          View Plans
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? close : hamburger}
          alt={isOpen ? "Close menu" : "Open menu"}
        />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black text-white shadow-lg flex flex-col items-center gap-6 py-8 md:hidden">
          <a href="#">How we work</a>
          <a href="#">Blog</a>
          <a href="#">Account</a>

          <button className="border-2 border-black px-8 py-3 font-bold w-3/4 max-w-xs">
            View Plans
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;