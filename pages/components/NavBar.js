import { BsFillMoonStarsFill } from "react-icons/bs";
import NavigationMenu from "./NavigationMenu";
import * as React from "react";
import { useState, useEffect } from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {

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
        <a
          href="#"
          className="text-xl font-semibold hover:text-[#FFC1CB] transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}