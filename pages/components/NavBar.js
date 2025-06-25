import { BsFillMoonStarsFill } from "react-icons/bs";
import NavigationMenu from "./NavigationMenu";
import * as React from "react";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar({ darkMode, toggleDarkMode }) {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }


  return (
    <nav className="relative flex justify-between items-center py-10 mb-12 dark:text-white">
      
      <div className="flex items-center"></div>
      
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenu />
      </div>

      {/* Right side: Dark Mode toggle & Resume link */}
      <div className="flex items-center space-x-4">
        <BsFillMoonStarsFill
          onClick={toggleDarkMode}
          className="cursor-pointer text-2xl"
        />

        {/* Mobile Only*/}
        <div className="md:hidden">
          {isMobileNavOpen ? (
            <AiOutlineClose
              onClick={toggleMobileNav}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <AiOutlineMenu
              onClick={toggleMobileNav}
              className="cursor-pointer text-2xl"
              />

          )}
        </div>
      </div>

      {/* Mobile Nav Overlay*/}
      {isMobileNavOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300">
        <div className="flex justify-end p-4 center-items">
          <AiOutlineClose
            onClick={toggleMobileNav}
            className="cursor-pointer text-2xl"
          />
        </div>
        {/* Sidebar Navigation Links */}
        <nav className="px-16 pt-4">
          <NavigationMenu />
        </nav>
      </div>
    )}
    </nav>
  );
}