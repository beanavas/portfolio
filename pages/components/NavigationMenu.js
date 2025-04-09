import React from "react";

export default function NavigationMenu({ darkMode, toggleDarkMode }) {
	return (
		<div className="navbar">
			<ul className="nav navbar">
				<a href="#Home" className="hoverable">Home</a>
				<a href="#About" className="hoverable">About</a>
				<a href="#Experience" className="hoverable">Experience</a>
				<a href="#Projects" className="hoverable">Projects</a>
			</ul>
		</div> 
	);
}
