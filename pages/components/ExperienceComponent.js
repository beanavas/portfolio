import React, { useState, useEffect } from 'react';
import Image from "next/image";
import mepic from "../../public/mepic.png";

const defaultExperiences = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "DHV Technology",
    dates: "May 2025 - July 2025",
    description:
      "In progress. Will update soon!",
    image: "/dhvtech.png",
    
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern",
    company: "Biznaga Media LLC",
    dates: "Jan 2025 - May 2025",
    description:
      "Contributed to the development of interactive 3D mobile advertisements for high-profile clients by combining creative design with technical expertise. Built responsive front-end interfaces using HTML, JavaScript, and Three.js, integrating real-time 3D animations to enhance user engagement across multiple campaigns. Supported the implementation of machine learning techniques to enable dynamic and interactive experiences in pilot projects. Ensured smooth performance and cross-device compatibility through rigorous debugging and optimization.",
    image:
      "/biznagapic.png",
    tools: ["Python", "Machine Learning", "Data Analytics", "Scrum"],
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    company: "Biznaga Media LLC",
    dates: "May 2023 - August 2023",
    description:
      "Collaborated within a cross-functional team of five to refine and evaluate over 20 creative proposals, ensuring each aligned with full-stack design best practices and was technically feasible within the MERN stack. Played a key role in managing client analytics for live-streamed advertisements by integrating robust data pipelines using SQL and Node.js. Additionally, contributed to Agile Scrum workflows by integrating dynamic React front-end components with Node.js, Express, and MongoDB back-end systems, ultimately delivering a scalable and responsive web application.",
    image:
      "/biznagapic.png",
    tools: ["React", "Node.js", "Express", "PostgreSQL", "Scrum", "Postman"],
  },
];

const ExperienceComponent = ({ experiences = [] }) => {
  const [isClient, setIsClient] = useState(false);
  const [selected, setSelected] = useState(null);  // desktop selection
  const [openId, setOpenId] = useState(null);      // mobile accordion

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const expData = experiences.length ? experiences : defaultExperiences;

  return (
    <main className="container max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-center text-black text-5xl font-bold mb-2 dark:text-white">
        My Experience
      </h1>
      <h2 className="text-center text-[#FFC1CB] text-4xl mb-8">
        REAL WORLD APPLICATIONS
      </h2>

      {/* MOBILE: Accordion/Card Stack */}
      <div className="block md:hidden space-y-6">
        {expData.map((exp) => (
          <details
            key={exp.id}
            open={openId === exp.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenId(openId === exp.id ? null : exp.id);
              }}
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100"
            >
              <div>
                <h3 className="font-semibold text-lg text-[#FFC1CB]">
                  {exp.title}
                </h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.dates}</p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="p-4 border-t">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-40 object-cover rounded object-contain mb-4 shadow-md"
              />
              <p className="text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
            {exp.tools && exp.tools.length > 0 && (
  <div className="flex flex-wrap justify-center gap-2 mt-3">
    {exp.tools.map((tool) => (
      <span
        key={tool}
        className="bg-[#C1C1C1] text-white text-xs px-2 py-1 rounded-full"
      >
        {tool}
      </span>
    ))}
  </div>
)}

          </details>
        ))}
      </div>

      {/* DESKTOP: Two-Pane Layout */}
      <div className="hidden md:flex h-full min-h-[500px]">
        {/* Sidebar List */}
        <div className="w-1/3 bg-white dark:bg-gray-800 shadow-lg overflow-y-auto">
          <div className="p-4 space-y-4">
            {expData.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setSelected(exp)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selected?.id === exp.id
                    ? 'bg-pink-50 dark:bg-[#FFC1CB] border-l-4 border-pink-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <h3 className="font-semibold text-lg text-[#FFC1CB] dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-black">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.dates}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        {selected ? (
          <div className="w-2/3 p-6 overflow-y-auto">
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
            {selected.tools && selected.tools.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {selected.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-[#C1C1C1] text-white text-sm sm:text-base px-3 py-1.5 rounded-full hover:scale-105 transition"
                >
                {tool}
                </span>
              ))}
              </div>
)}
          </div>
        ) : (
          <div className="w-2/3 flex items-center justify-center text-gray-400">
            <p>Select an experience to view details</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ExperienceComponent;
