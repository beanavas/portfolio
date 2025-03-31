import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import * as React from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="grid grid-cols-3 items-center py-10 mb-12 dark:text-white">
    <div></div>
    <div className="flex justify-center">
      <NavigationMenu />
    </div>
    <div className="flex justify-end items-center space-x-4">
      <BsFillMoonStarsFill
        onClick={toggleDarkMode}
        className="cursor-pointer text-2xl"
      />
    <a
      className="Resume"
      href="#"
    >
      Resume
    </a>
  </div>
</nav>
  );
}