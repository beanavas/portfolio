import Image from "next/image";
import propic from "../../public/propic.png";
import "bootstrap/dist/css/bootstrap.min.css";
import 'tailwindcss/tailwind.css';

export default function About({ darkMode, toggleDarkMode }) {
  return (
    <section id="About" className=" scroll-mt-20 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4 text-[#FFC1CB]">Who am I?</h1>
          <p className="text-gray-700 mb-4">
            Hi! My name is <span className="font-semibold text-[#FFC1CB]">Beatriz Navas </span> 
            and I am a student at the University of Central Florida, Go Knights Charge On!
          </p>
          <p className="text-gray-700 mb-4">
            Being a computer engineering student has allowed me to delve into the world 
            of design, hardware, embedded systems, and full-stack development.
          </p>
          <p className="text-gray-700 mb-4">
            I spend most of my free time learning new programming concepts, frameworks, 
            and tools, as well as contributing to open-source. Apart from coding, 
            some other activities that I love to do...
          </p>
          <div className="flex items-center justify-center">
        <button className="bg-[#FFC1CB] text-xl text-white px-4 py-2 rounded-full w-fit m-2 hover:scale-[1.02]"> 
            Cooking
        </button>
        <button className="bg-[#FFC1CB] text-xl text-white px-4 py-2 rounded-full w-fit m-2 hover:scale-[1.02]"> 
            Traveling
        </button>
        <button className="bg-[#FFC1CB] text-xl text-white px-4 py-2 rounded-full w-fit m-2 hover:scale-[1.02]"> 
            Playing the piano
        </button>
        </div>
        </div>
        <div className="relative w-400 h-400 rounded-full border-8 border-[#FFC1CB] overflow-hidden">
          <Image
            src={propic}
            alt="profile picture"
            fill
            className="object-cover"
          />
          </div>

      </div>
    </section>
  );
}
