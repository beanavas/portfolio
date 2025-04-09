import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
//import moodtracker from "../public/calendar.png";

const projectsData = [
  {
    title: "Gym Buddy ",
    image: "/gymbuddy copy.png",
    description:
      "A full-stack fitness tracker built with the MERN stack that lets users log workouts through structured forms or natural language input. It uses machine learning and NLP to parse entries like “Did 3 sets of squats with 100 lbs,” provides visual insights with heatmaps and pie charts, and recommends exercises based on muscle imbalances.",
    skills: "MERN stack, NLP, ML, MongoDB, Express, React, Node.js, Python",
    link: "https://github.com/beanavas/Gym-Buddy",
  },
  {
    title: "MoodTracker",
    image: "/calendar.png",
    description:
      "Mood Tracker is a full-stack web application developed by a collaborative team to help users monitor their emotional patterns. The application allows users to enter mood data regularly, which is then stored in a MongoDB database and processed using Python. With an intuitive interface built using HTML, JavaScript, and CSS, users can select from various prompts to gain insights into their emotional. ",
    skills: "Python, HTML, JavaScript, MongoDB, CSS",
    link: "https://github.com/sophiagn/moodtracker",
  },
  {
    title: "StayDrippy",
    image: "/staydrippy.png",
    description:
      'StayDrippy is a project that helps users win Roblox "Dress to Impress" games by using AI to match wardrobe images and descriptions with desired outfit styles (like "beach day" or "formal business"). It leverages OpenAI, TypeScript, and Next.js to analyze user inputs on the backend and deliver personalized outfit recommendations through a sleek, user-friendly interface. ',
    skills: "OpenAI API, TypeScript, Next.js, CSS, HTML",
    link: "https://github.com/beanavas/KnightHacks-",
  },
  {
    title: "Parking Garage Management",
    image: "/parking.png",
    description:
      "I developed a comprehensive C program that efficiently manages hundreds of data entries for registered student vehicles and related garage information, ensuring data integrity and accessibility. The project uses structured programming for an organized and scalable codebase.",
    skills: "C, Structured Programming, File I/O",
    link: "https://github.com/beanavas/ParkingGarageSystem",
  },
  {
    title: "Plate Tracker Web App",
    image: "/licenseplate_imresizer.png",
    description:
      "This project is a full-stack license plate recognition system built with MERN stack (MongoDB, Express.js, Node.js, React). Additionally, we built a machine learning algorithm with python to detect and read license plates from images and videos, then store and cross-reference the data with user information.",
    skills: "MERN Stack, Python, OCR, MongoDB, ML",
    link: "#",
  },
  {
    title: "2D Game",
    image: "/micromouse.png",
    description:
      "This project is a 2D game engineered using Phaser, HTML5, and JavaScript. The game features precise control of an animated fish navigating complex underwater obstacles. But this isn’t just about dodging obstacles along the way, the game poses behavioral and personality questions to the user. At the end of your adventure, the game reveals the user's unique personality archetype.",
    skills: "HTML, JavaScript, Phaser, CSS",
    link: "https://github.com/sophiagn/2d-game",
  },
  {
    title: "IEEE Micromouse",
    image: "/micromouse.png",
    description:
      "Assisted in implementing heuristic search strategies and optimizing real-time decision-making processes, which enhanced the robot’s maze traversal speed. Contributed to the project in partnership with IEEE, with the goal of successfully integrating the algorithm into an embedded micromouse robot platform robustly",
    skills: "Embedded C, Python, Robotics",
    link: "https://github.com/beanavas/micromouseSim",
  },
  {
    title: "Gym Buddy",
    image: "/staydrippy.png",
    description:
      "AI-powered workout recommender based on user data, using TypeScript and OpenAI to provide dynamic fitness plans.",
    skills: "TypeScript, OpenAI API, Next.js",
    link: "#",
  },
  {
    title: "License Plate Web App",
    image: "/licenseplate_imresizer.png",
    description:
      "Advanced MERN-based license plate reader with real-time plate detection and cross-referencing vehicle info.",
    skills: "MERN Stack, Python, Computer Vision",
    link: "#",
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(projectsData.length / cardsPerSlide);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const getSlideData = () => {
    const start = currentSlide * cardsPerSlide;
    return projectsData.slice(start, start + cardsPerSlide);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 relative">
      <h1 class="text-center text-[#FFC1CB] text-4xl font-bold mb-4">INNOVATIVE CREATIONS</h1>
      <h2 className="text-center text-5xl font-bold text-black mb-8">Projects</h2>

      <div className="relative flex items-center">
        {/* Arrow Left */}
        <button
          onClick={goToPrevSlide}
          className="absolute -left-8 z-10 bg-white border shadow p-2 rounded-full hover:scale-105 transition"
        >
          <i className="fas fa-chevron-left text-gray-700 text-lg" />
        </button>

        {/* Cards Row */}
        <div className="flex justify-center items-stretch w-full gap-4 px-8">
          {getSlideData().map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full flex flex-col hover:scale-[1.02]">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 mx-auto"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-bold text-[#FFC1CB] mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm font-bold text-[#FFC1CB] mb-4">Skills: {project.skills}</p>
              <a
                href={project.link}
                className="mt-auto inline-block bg-[#FFC1CB] text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:!text-[#FFC1CB] hover:ring-2 hover:ring-[#FFC1CB] transition duration-200 text-center"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Arrow Right */}
        <button
          onClick={goToNextSlide}
          className="absolute -right-8 z-10 bg-white border shadow p-2 rounded-full hover:scale-105 transition"
        >
          <i className="fas fa-chevron-right text-gray-700 text-lg" />
        </button>
      </div>
    </section>
  );
}