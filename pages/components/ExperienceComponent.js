import React, { useState, useEffect } from 'react';
import Image from "next/image";
import mepic from "../../public/mepic.png";

const defaultExperiences = [
{
  id: 1,
   title: "App Development Intern",
   company: "XRCise Meet",
   dates: "Sept 2025 - Present",
   description:
     "I developed and optimized cross-platform mobile application features using Vue.js, TypeScript, and JavaScript, ensuring seamless deployment across iOS and Android platforms. I designed and maintained RESTful API endpoints, Firebase integrations, and MySQL database schemas to enable secure, efficient, and real-time data synchronization between the frontend and backend. Leveraging Tailwind CSS, I collaborated with designers and frontend developers to create a consistent, responsive, and intuitive user interface and experience across all devices.",
   image: "/xrcise.png",
   tools: ["TypeScript", "JavaScript", "Github", "Bash", "Tailwind"],
  
 },
 {
   id: 2,
   title: "Software Engineering Intern",
   company: "DHV Technology",
   dates: "May 2025 - July 2025",
   description:
     "During my internship, I developed automated testing tools in Python that significantly reduced manual validation time. I also ran and debugged simulation software in both C++ and Python to support system testing. In addition, I collaborated with cross-functional engineering teams to improve and unify embedded software across multiple product lines. I also contributed to the design and implementation of improvements to the company’s GitLab development environment, introducing standardized workflows and permissions through Git Bash that reduced integration issues.",
   image: "/dhvtech.png",
   tools: ["Python", "C++", "GitLab", "Bash", "Linux", "Firmware"],
  
 },

  {
    id: 3,
    title: "Software Engineering Intern",
    company: "Biznaga Media LLC",
    dates: "Jan 2025 - May 2025",
    description:
      "I engineered a Python-based machine learning pipeline using TensorFlow, pandas, and scikit-learn to process and analyze campaign spreadsheets for over 50 marketing initiatives, delivering actionable insights and recommendations while implementing DevOps best practices. Working within a Scrum team, I helped automate the generation of branded PowerPoint presentations using python-pptx, producing more than 200 professional slide decks that included Matplotlib charts of CTR, conversion rate, and ROI—cutting manual report creation time by 75%. Additionally, I integrated an insight summarizer that highlighted the top three performing channels, detected performance anomalies, and generated actionable recommendations, which accelerated campaign optimization decisions by 15%.",
    image:
      "/biznagapic.png",
    tools: ["Python", "Machine Learning", "TensorFlow", "pandas", "scikit-learn", "Data Analytics", "Scrum"],
  },
  {
    id: 4,
    title: "Full-Stack Developer Intern",
    company: "Biznaga Media LLC",
    dates: "June 2024 - August 2024",
    description:
      "I designed and built full-stack web application components using React.js, Node.js, Express.js, and PostgreSQL in an Agile environment, delivering over 10 features that improved scalability, stability, and responsiveness. I optimized full-stack codebases to ensure consistent, high-performance operation across more than five mobile device form factors. Additionally, I collaborated with a cross-functional team of three to refine and evaluate over 20 component proposals, assessing technical feasibility, estimating development effort, and expediting project kickoffs.",
    image:
      "/biznagapic.png",
    tools: ["React", "Node.js", "Express", "PostgreSQL", "Scrum", "Full-Stack"],
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
