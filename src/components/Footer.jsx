import React from 'react';
import facebook from '../assets/image/facebook.svg';
import twitter from '../assets/image/twitter.svg';
import pinterest from '../assets/image/pinterest.svg';
import instagram from '../assets/image/instagram.svg';

const Footer = () => {

  return (
    <footer className="relative bg-[#FAFAFA] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto md:px-20 px-6">
        
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-gray-200">
          
          <h1 className="text-3xl font-black tracking-[0.15em] text-gray-800 uppercase mb-6 md:mb-0">
            Insure
          </h1>

          <div className="flex space-x-6 text-gray-500">
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={pinterest} alt="Pinterest" />
            <img src={instagram} alt="Instagram" />

          </div>
        </div>

        {/* --- Bottom Row: Link Columns --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-between items-start text-center md:text-left">
          
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
              OUR COMPANY
            </h3>
            <div>
              <p className="text-gray-600 mb-2">How we work</p>
              <p className="text-gray-600 mb-2">Why Insure?</p>
              <p className="text-gray-600 mb-2">View Plans</p>
              <p className="text-gray-600 mb-2">Reviews</p>
            </div>

          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
              HELP ME
            </h3>
            <div>
              <p className="text-gray-600 mb-2">FAQ</p>
              <p className="text-gray-600 mb-2">Terms of Use</p>
              <p className="text-gray-600 mb-2">Privacy Policy</p>
              <p className="text-gray-600 mb-2">Cookies</p>
            </div>
           
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
              CONTACT
            </h3>
            <p className="text-gray-600 mb-2">SALES</p>
            <p className="text-gray-600 mb-2">support</p>
            <p className="text-gray-600 mb-2">Live Chat</p>
          
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
              OTHERS
            </h3>
            <p className="text-gray-600 mb-2">Careers</p>
            <p className="text-gray-600 mb-2">Press</p>
            <p className="text-gray-600 mb-2">Licenses</p>
            
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;