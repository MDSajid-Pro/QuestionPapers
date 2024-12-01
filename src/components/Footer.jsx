import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#736DA8] p-6 mt-10 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Brand Info */}
          <div className="text-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Question Papers</h2>
            <p className="text-sm">Simplifying your academic journey.</p>
          </div>

          {/* Quick Links */}
          <div className="mb-4 md:mb-1">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:underline">
                  Quiz
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            
                <img src={assets.facebook} alt="Facebook" className="w-9 h-9 hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.twitter} alt="Twitter" className="w-9 h-9 hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.linkedin2} alt="LinkedIn" className="w-9 h-9 hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                
                <img src={assets.instagram} alt="Instagram" className="w-9 h-9 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-400 pt-4 text-center text-sm">
          <p>&copy; 2024 Question Papers. All rights reserved.</p>
          <p>Designed with ❤️ by Md Sajid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
