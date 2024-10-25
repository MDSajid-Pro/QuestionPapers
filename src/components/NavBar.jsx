import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-500 sticky top-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white pl-8 text-xl font-bold">MD SAJID</a>
        <div className="block lg:hidden">
          {/* Mobile menu button */}
          <button onClick={handleToggle} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* Menu Links */}
        <ul className="hidden lg:flex space-x-6 pr-11 text-white">
          <li><HashLink smooth to="/#home" className="hover:text-sky-700">HOME</HashLink></li>
          <li><HashLink smooth to="/#about" className="hover:text-sky-700">ABOUT</HashLink></li>
          <li><HashLink smooth to="/#testimonial" className="hover:text-sky-700">TESTIMONIAL</HashLink></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4 text-white">
          <li><HashLink smooth to="/#home" className="hover:text-sky-700" onClick={() => setIsOpen(false)}>HOME</HashLink></li>
          <li><HashLink smooth to="/#about" className="hover:text-sky-700" onClick={() => setIsOpen(false)}>ABOUT</HashLink></li>
          <li><HashLink smooth to="/#testimonial" className="hover:text-sky-700" onClick={() => setIsOpen(false)}>TESTIMONIAL</HashLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

