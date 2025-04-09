import React, { useState, useEffect } from 'react';

const ExperienceComponent = ({ experiences = [] }) => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [selected, setSelected] = useState(null);

  // Default experiences if none provided
  const defaultExperiences = [
    {
        id: 1,
        title: "Software Engineering Intern",
        company: "DHV Technology",
        dates: "May 2025 - July 2025",
        description: "As a Software Engineering Intern at DHV Technologies, I worked on developing embedded software for microcontrollers integrated into solar panels used in satellite systems. My role involved writing and optimizing low-level C code to ensure efficient power management and reliable communication between onboard subsystems. I collaborated closely with the hardware team to integrate firmware with space-qualified components and support system validation for flight-ready modules",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
      },
      {
        id: 2,
        title: "Full-Stack Developer Intern",
        company: "Biznaga Media Inc.",
        dates: "Jan 2025 - May 2025",
        description: "Contributed to the development of interactive 3D mobile advertisements for high-profile clients by combining creative design with technical expertise. Built responsive front-end interfaces using HTML, JavaScript, and Three.js, integrating real-time 3D animations to enhance user engagement across multiple campaigns. Supported the implementation of machine learning techniques to enable dynamic and interactive experiences in pilot projects. Ensured smooth performance and cross-device compatibility through rigorous debugging and optimization.",
        image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg"
      },
      {
        id: 3,
        title: "Software Engineering Intern",
        company: "Biznaga Media Inc.",
        dates: "May 2023 - August 2023",
        description: "Collaborated within a cross-functional team of five to refine and evaluate over 20 creative proposals, ensuring each aligned with full-stack design best practices and was technically feasible within the MERN stack. Played a key role in managing client analytics for live-streamed advertisements by integrating robust data pipelines using SQL and Node.js. Additionally, contributed to Agile Scrum workflows by integrating dynamic React front-end components with Node.js, Express, and MongoDB back-end systems, ultimately delivering a scalable and responsive web application.",
        image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
      }
  ];

  if (!isClient) return null; // Skip rendering on server
  
  const expData = experiences.length ? experiences : defaultExperiences;

  return (
    <main className="container max-w-screen-xl mx-auto px-8 py-12">
    <h1 className="text-center text-black text-5xl font-bold mb-4">My Experience</h1>
    <h1 className="text-center text-[#FFC1CB] text-4xl font-bold mb-12">REAL WORLD APPLICATIONS</h1>
    <div className="flex flex-col md:flex-row h-full min-h-[500px]">
      <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 shadow-lg overflow-y-auto">
        <div className="p-4 space-y-4">
          {expData.map(exp => (
            <div 
              key={exp.id} 
              onClick={() => setSelected(exp)}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                selected?.id === exp.id 
                  ? 'bg-pink-50 dark:bg-[#FFC1CB] border-l-4 border-pink-300'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <h3 className="font-semibold text-lg text-[#FFC1CB] dark:text-white">{exp.title}</h3>
              <p className="text-gray-600 dark:text-black">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.dates}</p>
            </div>
          ))}
        </div>
      </div>
      
      {selected && (
        <div className="w-full md:w-2/3 p-6 overflow-y-auto">
          <div className="h-48 md:h-64 w-full rounded-lg overflow-hidden mb-6">
            <img 
              src={selected.image} 
              alt={selected.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#FFC1CB] dark:text-white mb-2">
            {selected.title}
          </h2>
          <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {selected.company}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {selected.dates}
          </p>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            {selected.description}
          </p>
        </div>
      )}
    </div>
    </main>
  );
};

export default ExperienceComponent;