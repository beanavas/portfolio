import React from 'react';
import 'tailwindcss/tailwind.css';
//import moodtracker from "../public/calendar.png";
import { useState } from "react";

export default function projects({ darkMode, toggleDarkMode }){
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Number of project cards

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Projects</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body class="bg-white">
        <main class="container max-w-screen-xl mx-auto px-8 py-8">
          <h1 class="text-center text-black text-4xl font-bold mb-4">INNOVATIVE CREATIONS</h1>
          <h2 class="text-center text-5xl font-bold mb-12">Projects.</h2>
          <div class="relative flex items-center justify-center"> 
            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              class="absolute left-[-155px] top-[350px]  transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous project"
            >
              <i class="fas fa-chevron-left fa-2x text-gray-800"></i>
            </button>
            
            <button 
              onClick={handleNext}
              class="absolute right-[-150px] top-[350px] transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next project"
            >
              <i class="fas fa-chevron-right fa-2x text-gray-800"></i>
            </button>
          </div>

          <div class="relative flex items-center justify-center">
            {/* Carousel Container */}
            <div 
              class="flex flex-nowrap transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div class="min-w-full md:min-w-[33.33%] px-4">
                <div class="containers transition-all hover:scale-[1.02]">
                <img alt="Moodtracker project screenshot" class="block mx-auto rounded-lg mb-4" height="200" src="/calendar.png" width="300"/>
                  <h3 class="text-2xl font-bold mb-2">
                    MoodTracker
                  </h3>
                  <p class="mb-4">
                  Mood Tracker is a full-stack web application developed by a collaborative team to help users monitor their emotional patterns. The application allows users to enter mood data regularly, which is then stored in a MongoDB database and processed using Python. With an intuitive interface built using HTML, JavaScript, and CSS, users can select from various prompts to gain insights into their emotional. 
                  </p>
                  <div class="mb-4">
                    <span class="text-white">Skills: Python, HTML, JavaScript, MongoDB, CSS</span>
                  </div>
                  <a class="cbutton" href="#">GitHub</a>
                </div>
              </div>

              <div class="min-w-full md:min-w-[33.33%] px-4">
                <div class="containers">
                  <img alt="Staydrippy project screenshot" class="block mx-auto rounded-lg mb-4" height="200" src="/staydrippy.png" width="300"/>
                  <h3 class="text-2xl font-bold mb-2">
                    StayDrippy
                  </h3>
                  <p class="mb-4">
                    StayDrippy is a project that helps users win Roblox "Dress to Impress" games by using AI to match wardrobe images and descriptions with desired outfit styles (like "beach day" or "formal business"). It leverages OpenAI, TypeScript, and Next.js to analyze user inputs on the backend and deliver personalized outfit recommendations through a sleek, user-friendly interface. 
                  </p>
                  <div class="mb-4">
                    <span class="text-white">Skills: OpenAI API, TypeScript, Next.js, CSS, HTML</span>
                  </div>
                  <a class="cbutton" href="#">GitHub</a>
                </div>
              </div>

              <div class="min-w-full md:min-w-[33.33%] px-4">
                <div class="containers">
                  <img alt="Parking Garage Management Algorithm project photo" class="block mx-auto rounded-lg mb-4" height="200" src="/parking.png" width="300"/>
                  <h3 class="text-2xl font-bold mb-2">
                    Parking Garage Management Algorithm
                  </h3>
                  <p class="mb-4">
                    I developed a comprehensive C program that efficiently manages hundreds of data entries for registered student vehicles and related garage information, ensuring data integrity and accessibility. The project uses structured programming for an organized and scalable codebase.
                  </p>
                  <div class="mb-4">
                    <span class="text-white">Skills: OpenAI API, TypeScript, Next.js, CSS, HTML</span>
                  </div>
                  <a class="cbutton" href="#">GitHub</a>
                </div>
              </div>

              <div class="min-w-full md:min-w-[33.33%] px-4">
                <div class="containers">
                  <img alt="License Plate Tracking Web Appproject photo" class="block mx-auto rounded-lg mb-4" height="200" src="/licenseplate_imresizer.png" width="300"/>
                  <h3 class="text-2xl font-bold mb-2">
                    License Plate Tracking Web App
                  </h3>
                  <p class="mb-4">
                  This project is a full-stack license plate recognition system built with MERN stack (MongoDB, Express.js, Node.js, React). Additionally, we built a machine learning algorithm with python to detect and read license plates from images, then store and cross-reference the data with user information.
                  </p>
                  <div class="mb-4">
                    <span class="text-white">Skills: MERN Stack (React, Node.js, MongoDB, Express.js), Python, CSS, HTML</span>
                  </div>
                  <a class="cbutton" href="#">GitHub</a>
                </div>
              </div>

              <div class="min-w-full md:min-w-[33.33%] px-4">
                <div class="containers">
                  <img alt="2D Game project photo" class="block mx-auto rounded-lg mb-4" height="200" src="/micromouse.png" width="300"/>
                  <h3 class="text-2xl font-bold mb-2">
                    2D Game
                  </h3>
                  <p class="mb-4">
                  This project is a 2D game engineered using Phaser, HTML5, and JavaScript. The game features precise control of an animated fish navigating complex underwater obstacles. But this isn’t just about dodging obstacles along the way, the game poses behavioral and personality questions to the user. At the end of your adventure, the game reveals the user's unique personality archetype. <br />
                  </p>
                  <div class="mb-4">
                    <span class="text-white">Skills: HTML, JavaScript, Phaser, CSS</span>
                  </div>
                  <a class="cbutton" href="#">GitHub</a>
                </div>
              </div>

              <div class="min-w-full md:min-w-[33.33%] px-4">
                <div class="containers">
                  <img alt="Micromouse photo" class="block mx-auto rounded-lg mb-4" height="200" src="/micromouse.png" width="300"/>
                  <h3 class="text-2xl font-bold mb-2">
                    IEEE Micromouse 
                  </h3>
                  <p class="mb-4">
                     Assisted in implementing heuristic search strategies and optimizing real-time decision-making processes, which enhanced the robot’s maze traversal speed. Contributed to the project in partnership with IEEE, with the goal of successfully integrating the algorithm into an embedded micromouse robot platform robustly.
                  </p>
                  <div class="mb-4">
                    <span class="text-white">Skills: Python, Embedded Systems Programming, C, Robotics</span>
                  </div>
                  <a class="cbutton" href="#">GitHub</a>
                </div>
              </div>

            </div>
          </div>
        </main>
      </body>
    </html>
  );
};
