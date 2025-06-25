import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/projects";
import Experience from "./components/ExperienceComponent";
import Footer from "./components/Footer";
import CursorBubble from "./components/CursorBubble";
import Loader from "./components/Loader";
import dynamic from 'next/dynamic';
const ChatBot = dynamic(() => import("./components/ChatBot"), { ssr: false });
import InvolvementSection from "./components/Involvement";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    if(typeof window !== "undefined") {

      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    
    }
  }, []);

  if(loading){
    return(
      <Loader />
    )
  }
  return (
    <div className={darkMode ? "dark" : ""}>
    <Head>
        <title>Beatriz's Portfolio</title>
        <meta name="description" content="Generated Beatriz Navas" />
        <link rel="icon" href="/icon_JJq_2.ico" />
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>
      </Head>
      {/* Only render CursorBubble if not mobile */}
      { !isMobile && <CursorBubble />}
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">

        <section id="Home" className="min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          <Intro />
          <a href="#About" className="justify-center items-center">
          <button className="mt-8 px-6 py-2 bg-[#FFC1CB] text-white rounded-full hover:scale-105 transition text-center">
            ↓ About
          </button>
          </a>
        </section>
        <ChatBot />
        <section id="About" className=" mt-5 mb-80 ">
          <About />
          <a href="#Experience" className="justify-center items-center">
          <button className=" px-6 py-2 bg-[#FFC1CB] text-white rounded-full hover:scale-105 transition text-center">
            ↓ Experience
          </button>
        </a>
        </section>

        <section id="Experience" className=" mt-80 mb-80 ">
        <Experience />
        <a href="#Projects" className=" mt-80 mb-80 ">
          <button className=" px-6 py-2 bg-[#FFC1CB] text-white rounded-full hover:scale-105 transition text-center">
            ↓ Projects
          </button>
        </a>
        </section>

        <section id="Projects">
          <Projects />
          <a href="#Involvement" className="justify-center items-center">
          <button className=" px-6 py-2 bg-[#FFC1CB] text-white rounded-full hover:scale-105 transition text-center">
            ↓ Involvement
          </button>
        </a>
        </section>
        
        <section id="Involvement" className="flex justify-center mt-80 mb-80">
          <InvolvementSection />
        </section>


        <section className="mt-20">
        <Footer className="w-full bg-[#FFC1CB] text-white py-6"/>
        </section>
        
      </main>
    </div>
  );
}
