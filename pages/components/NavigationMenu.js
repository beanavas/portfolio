import React from "react";

export default function NavigationMenu({ darkMode, toggleDarkMode }) {
	return (
		<div class="navbar">
        <ul class="nav navbar">
        <a id="len1" className="hoverable" href="#">Home</a>
        <a id="len2" className="hoverable" href="#">About</a>
        <a id="len3" className="hoverable" href="#">Portfolio</a>
        <a id="len4" className="hoverable" href="#">Contact</a>
      </ul>
    </div>
);
}

