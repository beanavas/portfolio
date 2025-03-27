import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">

      <h1 className="nav-title">Beatriz Navas</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={toggleDarkMode}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}