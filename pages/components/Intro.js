import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail
} from "react-icons/ai";

export default function Intro({ darkMode, toggleDarkMode }) {
  return (
    <div className="text-center px-4 py-8 md:px-10 md:py-12 dark:text-white">
      {/* Name */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
        Beatriz Navas
      </h2>

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl py-1 dark:text-white">
        Computer Engineering Student
      </h3>

      {/* Bio */}
      <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto text-gray-800 dark:text-gray-200">
        A dedicated lifelong learner, deeply invested in and passionate about technology and innovation.
      </p>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center gap-6 sm:gap-10 text-3xl sm:text-4xl md:text-5xl">
        <a
          href="https://github.com/beanavas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <AiFillGithub style={{ color: "pink" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/bea-navas/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <AiFillLinkedin style={{ color: "pink" }} />
        </a>
        <a
          href="mailto:beanavasaguilera@gmail.com"
          className="hover:scale-110 transition"
        >
          <AiFillMail style={{ color: "pink" }} />
        </a>
      </div>
    </div>
  );
}
