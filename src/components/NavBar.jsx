import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#736DA8] sticky top-0 z-50 p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white pl-8 text-xl font-bold">
          MD SAJID
        </a>
        <div className="block lg:hidden">
          {/* Mobile menu button */}
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              // Close (X) Icon
              <img
                src={assets.cross_icon}
                className="w-7"
                alt="cross_icon"
                onClick={handleClose}
              />
            ) : (
              // Hamburger Icon
              <img
                src={assets.menu_icon}
                className="w-7"
                alt="menu_icon"
              />
            )}
          </button>
        </div>
        {/* Menu Links */}
        <ul className="hidden lg:flex space-x-6 pr-11 text-[#F0F0F0]">
          <li>
            <HashLink smooth to="/#home" className="hover:text-white transition-colors">
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className="hover:text-white transition-colors">
              ABOUT
            </HashLink>
          </li>
          <li>
            <Link to="/quiz" className="hover:text-white transition-colors">
              QUIZ
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#testimonial" className="hover:text-white transition-colors">
              TESTIMONIAL
            </HashLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {/* Close button inside the menu */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 focus:outline-none"
        >
          <img src={assets.cross_icon} className="w-6" alt="cross_icon" />
        </button>
        <ul className="flex flex-col items-center gap-6 mt-10 px-5 text-lg font-medium">
          <li>
            <HashLink
              smooth
              to="/#home"
              className="hover:text-sky-700 transition-colors"
              onClick={handleClose}
            >
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#about"
              className="hover:text-sky-700 transition-colors"
              onClick={handleClose}
            >
              ABOUT
            </HashLink>
          </li>
          <li>
            <Link
              to="/quiz"
              className="hover:text-sky-700 transition-colors"
              onClick={handleClose}
            >
              QUIZ
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="/#testimonial"
              className="hover:text-sky-700 transition-colors"
              onClick={handleClose}
            >
              TESTIMONIAL
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
