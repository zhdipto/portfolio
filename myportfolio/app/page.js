"use client";
import Image from "next/image";
import React from "react";
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
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
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
      "By day, a Software Engineering student. By night, a Competitive Programmer seeking the ultimate algorithm! I turn caffeine into logic and solve problems that baffle the ordinary mind.",
    skills: {
      languages: ["C++", "Python", "JavaScript", "C"],
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
        tech: ["React.js", "Web"],
        color: "bg-green-100",
      },
      {
        title: "WMAD Device",
        description:
          "Weather Monitoring Autonomous Device! Keeping an eye on the skies with IoT sensors.",
        tech: ["IoT", "C++"],
        color: "bg-blue-100",
      },
      {
        title: "Exam Manager",
        description:
          "The ultimate tool for academic order! Managing seating plans with precision.",
        tech: ["C", "System"],
        color: "bg-purple-100",
      },
    ],
  };

  // --- STYLES & COMPONENTS ---

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
    
    .comic-shadow-sm {
      box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    }

    .comic-shadow-hover:hover {
      transform: translate(-2px, -2px);
      box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
    }

    .speech-bubble {
      position: relative;
      background: #ffffff;
      border: 3px solid #000;
    }
    .speech-bubble:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 20%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-top-color: #000;
      border-bottom: 0;
      border-left: 0;
      margin-left: -10px;
      margin-bottom: -20px;
    }
  `}</style>
  );

  const ComicPanel = ({
    children,
    className = "",
    color = "bg-white",
    rotate = 0,
  }) => (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`border-4 border-black comic-shadow p-6 ${color} relative overflow-hidden ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </motion.div>
  );

  const Badge = ({ text, color = "bg-yellow-300" }) => (
    <span
      className={`${color} border-2 border-black px-3 py-1 font-comic-heading text-lg transform -rotate-2 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
    >
      {text}
    </span>
  );

  const CaptionBox = ({ text, className = "" }) => (
    <div
      className={`bg-yellow-200 border-2 border-black p-2 font-comic-body font-bold text-sm uppercase tracking-wider inline-block ${className}`}
    >
      {text}
    </div>
  );
  return (
    <div className="min-h-screen bg-sky-400 comic-bg-dots font-comic-body text-black overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      <ComicFontStyles />

      {/* --- HEADER BAR --- */}
      <nav className="sticky top-0 z-50 bg-red-600 border-b-4 border-black px-4 py-3 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
          <div className="font-comic-heading text-2xl md:text-3xl tracking-wider text-yellow-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            ISSUE #1: THE ORIGIN
          </div>
          <div className="hidden md:flex gap-6 font-comic-heading text-xl">
            {["Story", "Powers", "Missions", "Signal"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-300 hover:underline decoration-4 underline-offset-4 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8 space-y-16">
        {/* --- HERO SECTION: THE COVER --- */}
        <section
          id="story"
          className="grid md:grid-cols-12 gap-8 items-center pt-8"
        >
          {/* Hero Text */}
          <div className="md:col-span-7 relative z-10">
            <div className="bg-white border-4 border-black p-8 comic-shadow rotate-1 transform">
              <CaptionBox text="Featured Character" className="mb-4" />
              <h1
                className="font-comic-heading text-6xl md:text-8xl leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500"
                style={{ WebkitTextStroke: "2px black" }}
              >
                {DATA.heroName}
              </h1>
              <h2 className="font-comic-heading text-3xl md:text-4xl text-blue-600 mb-6">
                aka {DATA.name}
              </h2>

              <div className="speech-bubble p-6 mb-8 text-lg md:text-xl leading-relaxed font-bold">
                "{DATA.about}"
              </div>

              <div className="flex flex-wrap gap-4 mt-8 pl-4">
                <a
                  href="#missions"
                  className="bg-red-500 text-white font-comic-heading text-2xl px-8 py-3 border-4 border-black comic-shadow hover:bg-red-400 hover:-translate-y-1 transition-transform"
                >
                  SEE MISSIONS!
                </a>
                <a
                  href={DATA.socials.github}
                  target="_blank"
                  className="bg-slate-800 text-white p-3 border-4 border-black comic-shadow hover:bg-slate-700"
                >
                  <Github className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Stats Panel */}
          <div className="md:col-span-5">
            <ComicPanel
              color="bg-yellow-400"
              rotate={-2}
              className="text-center"
            >
              <div className="border-b-4 border-black pb-4 mb-4">
                <Star className="w-16 h-16 mx-auto mb-2 text-red-600 fill-current" />
                <h3 className="font-comic-heading text-4xl">STATS</h3>
              </div>
              <ul className="space-y-4 text-left font-bold text-lg">
                <li className="flex justify-between items-center bg-white border-2 border-black p-2">
                  <span>
                    <Globe className="inline w-5 h-5 mr-2" /> Location:
                  </span>
                  <span>Dhaka, BD</span>
                </li>
                <li className="flex justify-between items-center bg-white border-2 border-black p-2">
                  <span>
                    <BookOpen className="inline w-5 h-5 mr-2" /> GPA:
                  </span>
                  <span className="text-green-600">{DATA.education.gpa}</span>
                </li>
                <li className="flex justify-between items-center bg-white border-2 border-black p-2">
                  <span>
                    <Terminal className="inline w-5 h-5 mr-2" /> Class:
                  </span>
                  <span>Software Eng.</span>
                </li>
              </ul>
              <div className="mt-6 bg-black text-white font-comic-heading text-xl p-2 -rotate-1">
                AVAILABLE FOR INTERNSHIPS!
              </div>
            </ComicPanel>
          </div>
        </section>

        {/* --- SKILLS: SUPERPOWERS --- */}
        <section id="powers">
          <div className="bg-white border-4 border-black p-2 md:p-4 mb-8 max-w-fit mx-auto -rotate-2 comic-shadow">
            <h2 className="font-comic-heading text-4xl md:text-5xl uppercase text-center px-8">
              Superpowers & Abilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages Panel */}
            <ComicPanel color="bg-cyan-200" className="relative">
              <CaptionBox
                text="Arsenal: Languages"
                className="absolute top-0 left-0"
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                {DATA.skills.languages.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white border-2 border-black p-3 text-center font-bold text-lg hover:bg-yellow-200 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </ComicPanel>

            {/* Frameworks Panel */}
            <ComicPanel color="bg-pink-200" className="relative">
              <CaptionBox
                text="Gadgets: Frameworks"
                className="absolute top-0 left-0"
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                {DATA.skills.frameworks.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white border-2 border-black p-3 text-center font-bold text-lg hover:bg-yellow-200 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </ComicPanel>

            {/* Achievements Strip */}
            <div className="md:col-span-2 bg-white border-4 border-black p-6 comic-shadow">
              <CaptionBox
                text="Battle Records"
                className="mb-6 bg-red-500 text-white"
              />
              <div className="grid md:grid-cols-3 gap-6">
                {DATA.achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className={`${ach.color} border-2 border-black p-4 text-center relative group hover:-translate-y-2 transition-transform duration-300`}
                  >
                    <div className="absolute -top-3 -right-3">
                      <Star className="w-8 h-8 text-black fill-white" />
                    </div>
                    <h4 className="font-comic-heading text-2xl mb-1">
                      {ach.title}
                    </h4>
                    <p className="font-bold border-t-2 border-black border-dashed pt-2 mt-2">
                      {ach.rank}
                    </p>
                    <p className="text-sm italic mt-1">{ach.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS: MISSIONS --- */}
        <section id="missions">
          <div className="bg-red-600 border-4 border-black p-4 mb-12 comic-shadow transform rotate-1 text-center">
            <h2 className="font-comic-heading text-4xl md:text-5xl text-yellow-300 drop-shadow-md">
              MISSIONS ACCOMPLISHED
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DATA.projects.map((project, idx) => (
              <ComicPanel
                key={idx}
                color={project.color}
                className="flex flex-col h-full"
              >
                <div className="bg-black text-white font-comic-heading text-xl p-2 text-center mb-4 transform -skew-x-12 border-2 border-white">
                  MISSION #{idx + 1}
                </div>

                <h3 className="font-comic-heading text-3xl mb-2 text-center underline decoration-wavy decoration-red-500">
                  {project.title}
                </h3>

                <p className="font-bold text-lg leading-tight mb-6 flex-grow border-l-4 border-black pl-3">
                  {project.description}
                </p>

                <div className="space-y-2 mt-auto">
                  <div className="font-comic-body text-sm uppercase font-bold">
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
                  </div>
                </div>
              </ComicPanel>
            ))}
          </div>
        </section>

        {/* --- CONTACT: SIGNAL --- */}
        <section id="signal" className="pb-20">
          <div className="bg-white border-4 border-black p-8 md:p-12 comic-shadow relative max-w-4xl mx-auto">
            {/* Visual Flair */}
            <div className="absolute -top-6 -left-6 bg-yellow-400 border-4 border-black p-4 font-comic-heading text-2xl rotate-[-10deg] shadow-lg z-10">
              SEND A SIGNAL!
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-500 border-4 border-black p-4 text-white font-comic-heading text-xl rotate-[5deg] shadow-lg z-10">
              OPEN FOR WORK!
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-comic-heading text-4xl mb-6">CONTACT HQ</h3>
                <p className="font-bold text-lg mb-8">
                  Need a hero for your next project? Use the secured channels
                  below to transmit your request.
                </p>

                <div className="space-y-4">
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

              {/* Form Panel */}
              <div className="bg-slate-100 border-2 border-black p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 font-bold text-sm border-2 border-black">
                  TRANSMISSION FORM
                </div>
                <form className="space-y-4 mt-2">
                  <div>
                    <label className="font-bold block text-sm mb-1">
                      CODENAME
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-black p-2 font-bold focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-shadow bg-yellow-50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="font-bold block text-sm mb-1">
                      MESSAGE
                    </label>
                    <textarea
                      rows="3"
                      className="w-full border-2 border-black p-2 font-bold focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-shadow bg-yellow-50"
                      placeholder="Describe the mission..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white font-comic-heading text-2xl py-2 border-2 border-black hover:bg-blue-500 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all">
                    SEND!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center border-t-8 border-yellow-400">
        <div className="font-comic-heading text-2xl mb-2">
          TO BE CONTINUED...
        </div>
        <p className="font-comic-body text-gray-400">
          © {new Date().getFullYear()} S.M. Zahir Hossain Dipto. All villains
          defeated.
        </p>
      </footer>
    </div>
  );
}
