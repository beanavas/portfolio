import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGithub
} from "react-icons/ai";

import Image from "next/image";

export default function Intro({ darkMode, toggleDarkMode }) {
  return (
    <div className="text-center p-10 py-10">
            <h2 className="Title">
              Beatriz Navas
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Computer Engineering Student
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            A dedicated lifelong learner, deeply invested in and passionate about technology and innovation.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 ">
            <a href="https://github.com/beanavas" target="_blank" rel="noopener noreferrer">
            <AiFillGithub style={{ color: "pink" }} />
            </a>
            <a href="https://www.linkedin.com/in/bea-navas/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin style={{ color: "pink" }}/>
            </a>
            </div>
          </div>
  );
}
