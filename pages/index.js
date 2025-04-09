import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
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


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  
  if(loading){
    return(
      <Loader />
    )
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <CursorBubble />
    <Head>
        <title>Beatriz's Portfolio</title>
        <meta name="description" content="Generated Beatriz Navas" />
        <link rel="icon" href="/icon_JJq_2.ico" />
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>
      </Head>
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
        <section id="About">
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
        </section>
        
        <section className="mt-20">
        <Footer />
        </section>
        
      </main>
    </div>
  );
}
