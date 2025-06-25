import Image from "next/image";
import mepic from "../../public/mepic.png";

export default function About({ darkMode, toggleDarkMode }) {
  return (
    <section
      id="About"
      className=" min-h-screen flex items-center justify-center px-4 py-5"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFC1CB]">
            Who am I?
          </h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200">
            Hi! My name is{" "}
            <span className="font-semibold text-[#FFC1CB]">
              Beatriz Navas
            </span>
            , and I’m a Computer Engineering student at the University of Central
            Florida. Go Knights — Charge On!
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200">
            My studies have given me hands-on experience in hardware, embedded
            systems, design, and full-stack development.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200">
            In my free time I love learning new frameworks, contributing to
            open-source, and also…
          </p>

          {/* Hobbies */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {["Cooking", "Traveling", "Playing the piano"].map((hobby) => (
              <button
                key={hobby}
                className="bg-[#FFC1CB] text-white text-sm sm:text-base px-3 py-1.5 rounded-full hover:scale-105 transition"
              >
                {hobby}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Larger Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="
              relative 
              w-48 h-48        /* mobile: 192×192 */
              sm:w-64 sm:h-64   /* small tablets: 256×256 */
              md:w-72 md:h-72   /* desktops: 288×288 */
              lg:w-80 lg:h-80   /* large screens: 320×320 */
              rounded-full 
              overflow-hidden 
              border-4 sm:border-8 
              border-[#FFC1CB]
            ">
            <Image
              src={mepic}
              alt="Beatriz Navas"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
