import React, { useState, useRef } from "react";

// Sample data for involvement items
const involvements = [
  {
    id: 1,
    title: "SHPE UCF Board Member",
    imageUrl: "/IMG_5713.jpg",
    description:
      "As a board member of the Society of Hispanic Professional Engineers at UCF, I organized and led workshops that fostered an empowering environment for women in STEM and the wider engineering community.",
  },
  {
    id: 2,
    title: "WEECS Projects Member",
    imageUrl: "/weecs.png",
    description:
      "During my involvement with WEECS (Women in Electrical Engineering & Computer Science) Projects, I developed several applications leveraging the MERN stack and machine learning techniques within student groups.",
  },
  {
    id: 3,
    title: "Tech / Projects SHPE Committee ",
    imageUrl: "/tech.png",
    description:
      "Serving on SHPE’s Projects and Technology Committees, I supported enhancements to the SHPE chapter website and helped develop the project plan for the payload rocket competition",
  },
  {
    id: 4,
    title: "KnightHacks Competition",
    imageUrl: "/knighthacks.png",
    description:
      "At KnightHacks, I joined a team in an intense sub-36-hour hackathon to design, build, and launch a web application that harnessed AI to help players win more often in Roblox’s popular Dress to Impress game. ",
  },
  // Add more items as needed
];

const InvolvementSection = () => {
    const [current, setCurrent] = useState(0);
    const lastIndex = involvements.length - 1;
    const touchStartXRef = useRef(0);
  
    const next = () => setCurrent((i) => (i === lastIndex ? 0 : i + 1));
    const prev = () => setCurrent((i) => (i === 0 ? lastIndex : i - 1));
  
    const handleTouchStart = (e) => {
      touchStartXRef.current = e.touches[0].clientX;
    };
  
    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartXRef.current - touchEndX;
      const threshold = 50; // minimum swipe distance
      if (diff > threshold) {
        next();
      } else if (diff < -threshold) {
        prev();
      }
    };
  
    return (
        <section id="involvement" className="py-12 overflow-x-hidden">
      <div className="w-full px-4">
        <h1 className="text-center text-[#FFC1CB] text-2xl sm:text-4xl font-bold mb-4">
          COMMUNITY
        </h1>
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-black mb-8 dark:text-white">
          Involvement
        </h2>

        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {involvements.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className="bg-white rounded-lg w-full">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl text-[#FFC1CB] font-semibold mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 left-1 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {involvements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`mx-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                idx === current ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
  };
  
  export default InvolvementSection;
  