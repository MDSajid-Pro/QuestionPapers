import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#736DA8] sticky top-0 z-50 p-2">
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
              <img src={assets.cross_icon} className='md:hidden w-7' alt="cross_icon" />
            ) : (
                // Hamburger Icon
                <img src={assets.menu_icon} className='md:hidden w-7' alt="menu_icon" />
            )}
          </button>
        </div>
        {/* Menu Links */}
        <ul className="hidden lg:flex space-x-6 pr-11 text-[#F0F0F0]">
          <li>
            <HashLink smooth to="/#home" className="hover:text-white">
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className="hover:text-white">
              ABOUT
            </HashLink>
          </li>
          <li>
            <Link to="/quiz" className="hover:text-white">
              QUIZ
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#testimonial" className="hover:text-white">
              TESTIMONIAL
            </HashLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <li>
            <HashLink
              smooth
              to="/#home"
              className="hover:text-sky-700"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#about"
              className="hover:text-sky-700"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </HashLink>
          </li>
          <li>
            <Link
              to="/quiz"
              className="hover:text-sky-700"
              onClick={() => setIsOpen(false)}
            >
              QUIZ
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="/#testimonial"
              className="hover:text-sky-700"
              onClick={() => setIsOpen(false)}
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
