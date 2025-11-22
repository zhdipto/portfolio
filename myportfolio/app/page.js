"use client";
import Image from "next/image";
import myPic from "@/public/images/myPic.jpeg";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiHackerrank } from "react-icons/si";
import React, {useState} from "react";
import {
  Code2,
  Terminal,
  Cpu,
  Globe,
  Zap,
  Layout,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
  MessageCircle,
  ShieldAlert,
  Sword,
  BookOpen,
  ArrowRight,
  Home,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- PERSONAL DATA ---
const DATA = {
  name: "S.M. Zahir Hossain Dipto",
  heroName: "THE CODE-SLINGER",
  role: "Software Engineer & Competitive Programmer",
  location: "Dhaka, Bangladesh",
  email: "textzhdipto@gmail.com",
  phone: "+880 1793-866555",
  socials: {
    github: "https://github.com/zhdipto",
    linkedin: "https://linkedin.com/in/zhdipto",
    codeforces: "https://codeforces.com/profile/zhdipto",
  },
  education: {
    degree: "B.Sc. in Software Engineering",
    university: "Daffodil International University",
    year: "4th Year Student",
    gpa: "3.92 / 4.00",
  },
  about:
    "I’m a software engineering student passionate about competitive programming, constantly seeking challenging coding tasks to sharpen my logical and analytical skills. My goal is to continuously improve my problem-solving abilities and make a meaningful impact in the field. I’m particularly focused on backend development using Django.",
  skills: {
    languages: ["C++", "Python", "JavaScript", "C", "HTML", "CSS"],
    frameworks: ["React.js", "Next.js", "Django"],
    databases: ["MySQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "Linux", "VS Code"],
  },
  achievements: [
    {
      title: "ICPC Dhaka 2024",
      rank: "Rank 589 / 2489",
      desc: "Battle of the Brains!",
      color: "bg-yellow-400",
    },
    {
      title: "CodeTrap Contest",
      rank: "Ranked 18th",
      desc: "Top 20 Finisher!",
      color: "bg-red-400",
    },
    {
      title: "Codeforces",
      rank: "200+ Solved",
      desc: "Continuous Training!",
      color: "bg-blue-400",
    },
  ],
  projects: [
    {
      title: "DIU Find & Fix",
      description:
        "A digital signal for lost items! A web platform connecting students with their lost belongings.",
      tech: ["Django"],
      color: "bg-green-100",
      image: "/images/project1.png",
      link: "https://github.com/zhdipto/DIU-FIND-FIX",
    },
    {
      title: "WMAD Device",
      description:
        "Weather Monitoring Autonomous Device! Keeping an eye on the skies with IoT sensors.",
      tech: ["IoT", "C++"],
      color: "bg-blue-100",
      image: "/images/project2.jpg",
      link: "https://github.com/zhdipto/IOT-Project-Weather-Monitoring-Autonomous-Device",
    },
    {
      title: "Exam Management System",
      description:
        "The ultimate tool for academic order! Managing seating plans with precision.",
      tech: ["C"],
      color: "bg-purple-100",
      image: "/images/project3.png",
      link: "https://github.com/zhdipto/Exam-Management-System-with-C",
    },
  ],
};

// --- STYLES & UTILS ---

const ComicFontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:ital,wght@0,400;0,700;1,700&display=swap');
    
    .font-comic-heading { font-family: 'Bangers', cursive; letter-spacing: 1px; }
    .font-comic-body { font-family: 'Comic Neue', cursive; }
    
    .comic-bg-dots {
      background-image: radial-gradient(#000 1px, transparent 1px);
      background-size: 20px 20px;
    }
    
    .comic-shadow {
      box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
    }

    .comic-shadow-hover:hover {
      transform: translate(-2px, -2px);
      box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
    }
  `}</style>
);

const ComicPanel = ({ children, className = "", color = "bg-white", rotate = 0 }) => (
  <div 
    className={`border-4 border-black comic-shadow p-6 ${color} relative overflow-hidden ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </div>
);

const CaptionBox = ({ text, className = "" }) => (
  <div className={`bg-yellow-200 border-2 border-black p-2 font-comic-body font-bold text-sm uppercase tracking-wider inline-block ${className}`}>
    {text}
  </div>
);

// --- PAGE COMPONENTS ---

const HomeCover = ({ setPage }) => (
  <div className="max-w-5xl mx-auto pt-2">
    <div className="bg-red-600 border-4 border-black p-2 mb-6 inline-block transform -rotate-2 comic-shadow">
      <span className="text-white font-comic-heading text-2xl px-4">
        ISSUE #1: THE ORIGIN
      </span>
    </div>

    <div className="flex flex-col md:flex-row gap-8 items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full bg-white border-4 border-black p-8 comic-shadow rotate-1 transform"
      >
        <CaptionBox text="Introducing..." className="mb-4" />

        {/* Title + GIF */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <h1
            className="font-comic-heading text-4xl md:text-6xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-700"
            style={{ WebkitTextStroke: "3px black" }}
          >
            BACKEND DEVELOPER
            <br />/ COMPETITIVE PROGRAMMER
          </h1>
          {/* GIF */}
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjYzMjdsaHcycGJsOWVmbTY1MXNvOHc3MmYyaWtzeGM4ZHZtbHVqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1vlBgKjXEz1jTtsuiH/giphy.gif" // replace with your gif path
            alt="Coding GIF"
            className="ml-8 w-32 md:w-48 rounded-lg border-2 border-black"
          />
        </div>

        <h2 className="font-comic-heading text-3xl md:text-4xl text-blue-600 mb-6">
          {DATA.name}
        </h2>

        <p className="font-comic-body font-bold text-xl mb-8">
          "By day, a Software Engineer. By night, a Code Warrior"
          {/*seeking the ultimate algorithm! */}
        </p>

        {/* Social Media Links */}
        <div className="flex flex-wrap gap-4 mt-2 items-center">
          <button
            onClick={() => setPage("story")}
            className="bg-yellow-400 text-black font-comic-heading text-2xl px-8 py-4 border-4 border-black comic-shadow hover:bg-yellow-300 hover:-translate-y-1 transition-transform flex items-center gap-2 mb-4"
          >
            ABOUT ME <ArrowRight className="w-6 h-6" />
          </button>

          {/* Facebook */}
          <a
            href="https://facebook.com/zh.dipto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-3 border-2 border-black hover:scale-110 transition-transform"
          >
            <FaFacebookF className="text-white w-5 h-5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/zhdipto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-3 border-2 border-black hover:scale-110 transition-transform"
          >
            <Github className="w-5 h-5 text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/zhdipto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 p-3 border-2 border-black hover:scale-110 transition-transform"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>

          {/* Codeforces */}
          <a
            href="https://codeforces.com/profile/zhdipto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 border-2 border-black hover:scale-110 transition-transform flex items-center justify-center"
          >
            <SiCodeforces className="text-white w-5 h-5" />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/zhdipto/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 p-3 border-2 border-black hover:scale-110 transition-transform flex items-center justify-center"
          >
            <SiLeetcode className="text-white w-5 h-5" />
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/zhdipto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 p-3 border-2 border-black hover:scale-110 transition-transform flex items-center justify-center"
          >
            <SiHackerrank className="text-white w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  </div>
);

const StoryPage = () => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-white border-4 border-black p-4 mb-8 comic-shadow -rotate-1 text-center">
      <h2 className="font-comic-heading text-5xl">ABOUT ME</h2>
    </div>

    {/* Flex Layout: Replaces grid-cols-2 */}
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <ComicPanel
        color="bg-white"
        rotate={1}
        className="h-full relative flex flex-col md:flex-row gap-4"
      >
        <div className="flex-shrink-0">
          <Image
            src={myPic} // replace with your photo path
            alt="My Photo"
            width={250}
            height={250}
            className="border-4 border-black comic-shadow"
          />
        </div>

        <div>
          <p className="font-comic-body text-xl font-bold leading-relaxed mt-4">
            {DATA.about}
          </p>

          {/* <div className="mt-6 bg-slate-100 border-2 border-black p-3">
            <h3 className="font-comic-heading text-xl mb-2 flex items-center gap-2">
              <Globe className="w-5 h-5" /> LOCATION
            </h3>
            <p className="font-bold">{DATA.location}</p>
          </div> */}
        </div>
      </ComicPanel>
    </div>
    {/* Flex Layout: Replaces grid-cols-2 */}
    <div className="flex flex-col md:flex-row gap-8 mb-2">
      {/* Languages Panel */}
      <div className="w-full md:w-1/2">
        <ComicPanel color="bg-cyan-200" className="relative h-full">
          <CaptionBox
            text="Skills: Languages"
            className="absolute top-0 left-0"
          />
          <div className="mt-8 flex flex-wrap gap-4">
            {DATA.skills.languages.map((skill) => (
              <div
                key={skill}
                className="bg-white border-2 border-black p-3 text-center font-bold text-lg hover:bg-yellow-200 transition-colors comic-shadow-sm cursor-default flex-grow"
              >
                {skill}
              </div>
            ))}
          </div>
        </ComicPanel>
      </div>

      {/* Frameworks Panel */}
      <div className="w-full md:w-1/2">
        <ComicPanel color="bg-pink-200" className="relative h-full">
          <CaptionBox
            text="Skills: Frameworks"
            className="absolute top-0 left-0"
          />
          <div className="mt-8 flex flex-wrap gap-4">
            {DATA.skills.frameworks.map((skill) => (
              <div
                key={skill}
                className="bg-white border-2 border-black p-3 text-center font-bold text-lg hover:bg-yellow-200 transition-colors comic-shadow-sm cursor-default flex-grow"
              >
                {skill}
              </div>
            ))}
          </div>
        </ComicPanel>
      </div>
    </div>
  </div>
);

const PowersPage = () => (
  <div className="max-w-5xl mx-auto pt-4">
    <div className="bg-white border-4 border-black p-4 mb-8 comic-shadow rotate-1 text-center max-w-md mx-auto">
      <h2 className="font-comic-heading text-5xl">POWERS & ABILITIES</h2>
    </div>

    {/* Flex Layout: Replaces grid-cols-2 */}
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      {/* Languages Panel */}
      <div className="w-full md:w-1/2">
        <ComicPanel color="bg-cyan-200" className="relative h-full">
          <CaptionBox text="Core Arsenal: Languages" className="absolute top-0 left-0" />
          <div className="mt-8 flex flex-wrap gap-4">
            {DATA.skills.languages.map(skill => (
              <div key={skill} className="bg-white border-2 border-black p-3 text-center font-bold text-lg hover:bg-yellow-200 transition-colors comic-shadow-sm cursor-default flex-grow">
                {skill}
              </div>
            ))}
          </div>
        </ComicPanel>
      </div>

      {/* Frameworks Panel */}
      <div className="w-full md:w-1/2">
        <ComicPanel color="bg-pink-200" className="relative h-full">
          <CaptionBox text="Special Gadgets: Frameworks" className="absolute top-0 left-0" />
          <div className="mt-8 flex flex-wrap gap-4">
            {DATA.skills.frameworks.map(skill => (
              <div key={skill} className="bg-white border-2 border-black p-3 text-center font-bold text-lg hover:bg-yellow-200 transition-colors comic-shadow-sm cursor-default flex-grow">
                {skill}
              </div>
            ))}
          </div>
        </ComicPanel>
      </div>
    </div>

    {/* Achievements Section */}
    <div className="bg-white border-4 border-black p-6 comic-shadow">
      <div className="bg-red-500 text-white font-comic-heading text-2xl inline-block px-4 py-1 mb-6 border-2 border-black -rotate-1">
        BATTLE RECORDS (ACHIEVEMENTS)
      </div>
      
      {/* Flex Layout: Replaces grid-cols-3 */}
      <div className="flex flex-col md:flex-row flex-wrap gap-6">
        {DATA.achievements.map((ach, idx) => (
          <div key={idx} className={`w-full md:w-[calc(33.333%-1rem)] ${ach.color} border-2 border-black p-4 text-center relative group hover:-translate-y-1 transition-transform duration-300`}>
            <div className="absolute -top-3 -right-3 bg-white border-2 border-black rounded-full p-1">
              <Star className="w-6 h-6 text-black fill-yellow-400" />
            </div>
            <h4 className="font-comic-heading text-2xl mb-1">{ach.title}</h4>
            <p className="font-bold border-t-2 border-black border-dashed pt-2 mt-2">{ach.rank}</p>
            <p className="text-sm italic mt-1 font-comic-body font-bold">{ach.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MissionsPage = () => (
  <div className="relative max-w-5xl mx-auto pt-2">
    <div className="bg-red-600 border-4 border-black p-4 mb-10 comic-shadow transform -rotate-1 text-center">
      <h2
        className="font-comic-heading text-5xl text-yellow-300 drop-shadow-md"
        style={{ textShadow: "4px 4px 0 #000" }}
      >
        PROJECTS
      </h2>
    </div>

    {/* Scroll Buttons */}
    <button
      onClick={() => {
        document.getElementById("projects-scroll").scrollBy({
          left: -500,
          behavior: "smooth",
        });
      }}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 border-2 border-black rounded-r-lg hover:bg-yellow-300 z-10"
    >
      &#8592;
    </button>

    <button
      onClick={() => {
        document.getElementById("projects-scroll").scrollBy({
          left: 500,
          behavior: "smooth",
        });
      }}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 border-2 border-black rounded-l-lg hover:bg-yellow-300 z-10"
    >
      &#8594;
    </button>

    <div
      id="projects-scroll"
      className="flex overflow-x-auto gap-6 py-4 px-2 snap-x snap-mandatory scroll-smooth"
    >
      {DATA.projects.map((project, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-[90%] md:w-[500px] snap-center"
        >
          <ComicPanel
            className="flex flex-col h-full hover:scale-105 transition-transform"
            color={project.color}
          >
            <div className="bg-black text-white font-comic-heading text-xl p-2 text-center mb-4 transform -skew-x-12 border-2 border-white shadow-lg">
              PROJECT #{idx + 1}
            </div>

            {project.image && (
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover border-2 border-black comic-shadow"
                />
              </div>
            )}

            <h3 className="font-comic-heading text-3xl mb-2 text-center underline decoration-wavy decoration-red-500">
              {project.title}
            </h3>

            <p className="font-bold text-lg leading-tight mb-6 flex-grow border-l-4 border-black pl-3 font-comic-body">
              {project.description}
            </p>

            <div className="space-y-2 mt-auto">
              <div className="font-comic-body text-sm uppercase font-bold bg-white inline-block px-1 border border-black">
                Tech Used:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white border-2 border-black px-2 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {t}
                  </span>
                ))}
                {/* Add this inside ComicPanel, below project description */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black font-bold text-sm px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block"
                  >
                    VIEW PROJECT
                  </a>
                )}
              </div>
            </div>
          </ComicPanel>
        </div>
      ))}
    </div>
  </div>
);

const SignalPage = () => (
  <div className="max-w-4xl mx-auto pt-4 pb-20">
    <div className="bg-white border-4 border-black p-8 md:p-12 comic-shadow relative">
      {/* Visual Flair */}
      <div className="absolute -top-6 -left-6 bg-yellow-400 border-4 border-black p-4 font-comic-heading text-2xl rotate-[-10deg] shadow-lg z-10">
        SEND A SIGNAL!
      </div>
      <div className="absolute -bottom-6 -right-6 bg-blue-500 border-4 border-black p-4 text-white font-comic-heading text-xl rotate-[5deg] shadow-lg z-10">
        OPEN FOR WORK!
      </div>

      {/* Flex Layout: Replaces grid-cols-2 */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Info Column */}
        <div className="w-full md:w-1/2">
          <h3 className="font-comic-heading text-4xl mb-6">CONTACT HQ</h3>
          <p className="font-bold text-lg mb-8 font-comic-body">
            Need a Programmer for your next project? Reach out to me using the
            details below!
          </p>

          <div className="space-y-4 font-comic-body">
            <a
              href={`mailto:${DATA.email}`}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="bg-red-500 p-3 border-2 border-black text-white group-hover:rotate-12 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl hover:underline">
                {DATA.email}
              </span>
            </a>

            <div className="flex items-center gap-4 group">
              <div className="bg-green-500 p-3 border-2 border-black text-white group-hover:rotate-12 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl">{DATA.phone}</span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-purple-500 p-3 border-2 border-black text-white group-hover:rotate-12 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl">{DATA.location}</span>
            </div>
          </div>
        </div>

        {/* Form Panel Column */}
        <div className="w-full md:w-1/2">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3N5cjV4OGo2amJlOGJkeXg3ZWJlNGVmYWxxY3pvNm1rbjh3NGJ4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fk7dcmt3TwgZm0ZE8c/giphy.gif"
            alt="Animated GIF"
            className="w-80 h-80 border-4 border-black comic-shadow rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
);


export default function ComicPortfolio() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomeCover setPage={setActivePage} />;
      case "story":
        return <StoryPage />;
      // case "powers":
      //   return <PowersPage />;
      case "missions":
        return <MissionsPage />;
      case "signal":
        return <SignalPage />;
      default:
        return <HomeCover />;
    }
  };

  return (
    <div className="min-h-screen bg-sky-400 comic-bg-dots font-comic-body text-black overflow-x-hidden selection:bg-yellow-400 selection:text-black flex flex-col">
      <ComicFontStyles />

      {/* --- HEADER BAR --- */}
      <nav className="sticky top-0 z-50 bg-red-600 border-b-4 border-black px-4 py-3 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-white">
          <div
            onClick={() => setActivePage("home")}
            className="font-comic-heading text-2xl md:text-3xl tracking-wider text-yellow-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 transition-transform"
          >
            S.M. ZAHIR HOSSAIN DIPTO
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-comic-heading text-lg md:text-xl mt-2 md:mt-0">
            {[
              { id: "home", label: "Home", icon: Home },
              { id: "story", label: "ABOUT ME", icon: BookOpen },
              // { id: "powers", label: "Powers", icon: Zap },
              { id: "missions", label: "PROJECTS", icon: Sword },
              { id: "signal", label: "CONTACT", icon: MessageCircle },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex items-center gap-1 hover:text-yellow-300 transition-all ${
                  activePage === item.id
                    ? "text-yellow-300 underline decoration-wavy decoration-2 underline-offset-4"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-grow w-full p-4 md:p-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 20, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -20, rotate: -1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center border-t-8 border-yellow-400 mt-auto">
        <div className="font-comic-heading text-2xl mb-1 text-yellow-400">
          TO BE CONTINUED...
        </div>
        <p className="font-comic-body text-gray-400 text-sm">
          © {new Date().getFullYear()} S.M. Zahir Hossain Dipto. All villains
          defeated.
        </p>
      </footer>
    </div>
  );
}