import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import * as React from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <ul className="flex items-center">
      <NavigationMenu />
      <li>
          <BsFillMoonStarsFill
            onClick={toggleDarkMode}
            className="cursor-pointer text-2xl"
          />
        </li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        
      </ul>
    </nav>
  );
}