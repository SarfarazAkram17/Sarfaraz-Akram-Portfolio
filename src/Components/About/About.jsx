import React from "react";
import { Link } from "react-scroll";
import { IoCodeSlash } from "react-icons/io5";
import { BsArrowDownRight } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";
import { FaGoogleScholar } from "react-icons/fa6";

const stats = [
  {
    icon: <IoCodeSlash size={50} className="p-3 rounded-full bg-black/20" />,
    title: "Projects",
    description: "Innovative web applications",
    count: 3,
  },
  {
    icon: (
      <FaGoogleScholar size={50} className="p-3 rounded-full bg-black/20" />
    ),
    title: "Years of Experience",
    description: "Journey of continuous learning.",
    count: 1,
  },
  {
    icon: <PiCertificate size={50} className="p-3 rounded-full bg-black/20" />,
    title: "Certificates",
    description: "Proof of acquired skills.",
    count: 0,
  },
  {
    icon: <LiaMedalSolid size={50} className="p-3 rounded-full bg-black/20" />,
    title: "Awards",
    description: "Earned for impactful contributions.",
    count: 0,
  },
];

const About = () => {
  return (
    <div className="pt-20 mt-14 max-w-5xl mx-auto px-6" id="about">
      <div data-aos="fade-up">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-500 via-pink-500 to-red-500">
          About Me
        </h1>
        <div className="mt-3 mb-6 w-32 h-1 rounded-full mx-auto bg-gradient-to-l from-purple-500 via-pink-500 to-red-500" />
      </div>

      <p
        data-aos="fade-right"
        className="text-white/70 leading-relaxed text-sm text-center max-w-3xl mx-auto"
      >
        Hello, I'm Sarfaraz Akram — passionate about building efficient,
        scalable, and user-friendly web applications. With strong full-stack
        development skills, I continuously explore the latest technologies to
        enhance my craft. Dedicated to lifelong learning, I strive to make a
        meaningful impact in the tech industry and aim to expand my expertise
        into AI and data science in the coming years.
      </p>

      <div
        data-aos="fade-left"
        className="flex justify-center flex-col gap-6 mt-6 sm:flex-row items-center"
      >
        <a
          className="btn px-6 py-3 rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 active:scale-95 transition duration-300"
          href="/SarfarazAkram_CV.pdf"
          download
        >
          Download CV
        </a>
        <Link
          to="portfolio"
          smooth={true}
          className="btn px-6 py-3 rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-l from-purple-500 via-pink-500 to-red-500 hover:scale-105 active:scale-95 transition duration-300 cursor-pointer"
        >
          View Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {stats.map((item, idx) => (
          <Link
            to="portfolio"
            smooth={true}
            key={idx}
            className="cursor-pointer"
          >
            <div className="bg-white/5 flex justify-between items-center hover:bg-white/15 rounded-lg transition-all duration-300 p-4">
              <div className="space-y-4">
                {item.icon}
                <h5 className="text-sm font-bold">{item.title}</h5>
                <p className="text-xs whitespace-nowrap">{item.description}</p>
              </div>
              <div className="space-y-16">
                <h2 className="text-3xl font-bold">{item.count}</h2>
                <BsArrowDownRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
