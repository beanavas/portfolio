import React from "react";

export default function NavigationMenu({ darkMode, toggleDarkMode }) {
	return (
		<div className="navbar">
			<ul className="flex flex-col md:flex-row gap-6 text-lg items-center">
      <li className="flex justify-center">
        <a 
          href="#Home" 
          className="block text-center text-white hover:text-[#FFC1CB] transition-colors"
        >
          Home
        </a>
      </li>
      <li>
        <a 
          href="#About" 
          className="block text-center text-white hover:text-[#FFC1CB] transition-colors"
        >
          About
        </a>
      </li>
      <li>
        <a 
          href="#Experience" 
          className="block text-center text-white hover:text-[#FFC1CB] transition-colors"
        >
          Experience
        </a>
      </li>
      <li>
        <a 
          href="#Projects" 
          className="block text-center text-white hover:text-[#FFC1CB] transition-colors"
        >
          Projects
        </a>
      </li>
      <li className="flex justify-center">
        <a 
          href="#Involvement" 
          className="block text-center text-white hover:text-[#FFC1CB] transition-colors"
        >
          Involvement
        </a>
      </li>
	  <li>
        <a 
          href="Beatriz.Navas.Resume25.pdf" 
          className="block text-center text-white hover:text-[#FFC1CB] transition-colors"
        >
          Resume
        </a>
      </li>
    </ul>
		</div> 
	);
}
