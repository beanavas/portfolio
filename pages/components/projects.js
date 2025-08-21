import React, { useState, useEffect, useRef } from "react";
import 'tailwindcss/tailwind.css';
//import moodtracker from "../public/calendar.png";

const projectsData = [
    {
    title: "This Website!",
    image: "/website.png",
    description:
      "I developed a personal portfolio website to showcase my projects, technical skills, and professional experiences. Built with Next.js and styled using Tailwind CSS, the site emphasizes performance, responsiveness, and clean design across desktop and mobile devices. I integrated interactive components such as a horizontally scrollable project carousel and dynamic involvement sections.",
    skills: "Next.js, Tailwind, CSS, HTML, JavaScript",
    link: "https://github.com/beanavas/Gym-Buddy",
  },
  {
    title: "Gym Buddy ",
    image: "/gymbuddy copy.png",
    description:
      "A full-stack fitness tracker built with the MERN stack that lets users log workouts through structured forms or natural language input. It uses machine learning and NLP to parse entries like “Did 3 sets of squats with 100 lbs,” provides visual insights with heatmaps and pie charts, and recommends exercises based on muscle imbalances using ML.",
    skills: "MERN stack, NLP, ML, MongoDB, Express, React, Node.js, Python",
    link: "https://github.com/beanavas/Gym-Buddy",
  },
  {
    title: "Plate Tracker Web App",
    image: "/licenseplate_imresizer.png",
    description:
      "This project is a full-stack license plate recognition system built with MERN stack (MongoDB, Express.js, Node.js, React). Additionally, we built a machine learning algorithm with python to detect and read license plates from images and videos, then store and cross-reference the data with user information.",
    skills: "MERN Stack, Python, OCR, MongoDB, ML",
    link: "https://github.com/anjunthomas/LicensePlateTracker",
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
    title: "MoodTracker",
    image: "/calendar.png",
    description:
      "Mood Tracker is a full-stack web application developed by a collaborative team to help users monitor their emotional patterns. The application allows users to enter mood data regularly, which is then stored in a MongoDB database and processed using Python. With an intuitive interface built using HTML, JavaScript, and CSS, users can select from various prompts to gain insights into their emotional. ",
    skills: "Python, HTML, JavaScript, MongoDB, CSS",
    link: "https://github.com/sophiagn/moodtracker",
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
    title: "2D Game",
    image: "/fish.png",
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
    title: "Contact API",
    image: "/contact.png",
    description:
      "This Contact API is a robust RESTful service I designed to simplify the management of contact information. It provides a comprehensive set of endpoints for creating, reading, updating, and deleting contact records, ensuring an efficient and secure workflow for applications that need to handle user data.",
    skills: "MERN Stack, MongoDB, Node.js, Express.js",
    link: "https://github.com/beanavas/contact-app",
  },
  {
    title: "Sorting Performance Algorithm",
    image: "/algo.png",
    description:
      "This project is a comprehensive benchmark tool designed to evaluate and compare the runtime efficiency of various sorting algorithms. The program serves as an educational resource and performance analysis utility by highlighting the differences in how these algorithms handle datasets of varying sizes and characteristics.",
    skills: "Data Structures, C, Algorithm design & analysis",
    link: "https://github.com/beanavas/SortingPerformance",
  },
];

export default function Projects() {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      const w = window.innerWidth;
      if (w < 640)        setCardsPerSlide(1);  // phones
      else if (w < 1024)  setCardsPerSlide(2);  // tablets
      else                setCardsPerSlide(3);  // desktops
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalSlides = Math.ceil(projectsData.length / cardsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ensure currentSlide remains valid when cardsPerSlide changes (e.g., on resize)
  useEffect(() => {
    const newTotal = Math.ceil(projectsData.length / cardsPerSlide);
    setCurrentSlide((prev) => Math.min(prev, Math.max(0, newTotal - 1)));
  }, [cardsPerSlide]);

  // Touch swipe support for mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const lastMoveX = useRef(0);
  const isSwiping = useRef(false);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    lastMoveX.current = t.clientX;
    isSwiping.current = false;
  };

  const onTouchMove = (e) => {
    const t = e.touches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;
    // Treat as horizontal swipe only if horizontal movement dominates
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
      isSwiping.current = true;
      lastMoveX.current = t.clientX;
    }
  };

  const onTouchEnd = () => {
    if (!isSwiping.current) return;
    const dx = lastMoveX.current - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
  };

  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const getSlideData = () => {
    const start = currentSlide * cardsPerSlide;
    return projectsData.slice(start, start + cardsPerSlide);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 relative">
  <h1 className="text-center text-[#FFC1CB] text-4xl font-bold mb-4 ">
    INNOVATIVE CREATIONS
  </h1>
  <h2 className="text-center text-5xl font-bold text-black mb-8 dark:text-white">Projects</h2>

  <div className="relative flex items-center touch-pan-y" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
    {/* Arrow Left */}
<button
  onClick={goToPrevSlide}
  className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-12 sm:-left-40 z-10 bg-white p-1 sm:p-2 rounded-full shadow"
>
  <i className="fas fa-chevron-left text-gray-700 text-lg" />
</button>

    {/* Cards Row: extra padding left/right to clear the arrows */}
    <div className="flex justify-center items-stretch w-full gap-4 pl-12 pr-12 sm:pl-16 sm:pr-16">
      {getSlideData().map((project, idx) => (
        <div
          key={idx}
          className="
            bg-white rounded-lg shadow-lg p-4 flex-shrink-0
            w-[90vw]    /* mobile: 90% of viewport width */
            sm:w-[45vw] /* small tablets: 45% of vw (2 per slide) */
            md:w-[30vw] /* desktops: 30% of vw (3 per slide) */
          "
        >
          <img
            src={project.image}
            className="rounded-lg mb-4 mx-auto"
            width={300}
            height={200}
            alt={project.title}
          />
          <h3 className="text-xl font-bold text-[#FFC1CB] mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            {project.description}
          </p>
          <p className="text-sm font-bold text-[#FFC1CB] mb-4">
            Skills: {project.skills}
          </p>
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
  className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-12 sm:-right-40 z-10 bg-white p-1 sm:p-2 rounded-full shadow"
>
  <i className="fas fa-chevron-right text-gray-700 text-lg" />
</button>
  </div>
</section>
  );
}