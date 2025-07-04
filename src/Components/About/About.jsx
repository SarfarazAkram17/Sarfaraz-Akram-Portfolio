import React from "react";
import { Link } from "react-scroll";
import { IoCodeSlash } from "react-icons/io5";
import { BsArrowDownRight } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";
import { FaGoogleScholar } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <div className="pb-6 pt-10 mt-[4.5rem] max-w-5xl mx-auto px-4" id="about">
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
        <Link
          data-aos="fade-up-right"
          to="portfolio"
          smooth={true}
          className="cursor-pointer"
        >
          <div className="bg-white/5 h-full flex justify-between gap-4 items-center hover:bg-white/15 rounded-lg transition-all duration-300 p-4">
            <div>
              <IoCodeSlash
                size={50}
                className="p-3 rounded-full bg-black/20 mb-4"
              />
              <h5 data-aos="fade-up-right" className="text-sm font-bold mb-1">
                Projects
              </h5>
              <p data-aos="fade-up-right" className="text-xs">
                Innovative web applications
              </p>
            </div>
            <div className="space-y-16">
              <h2 data-aos="fade-up-right" className="text-3xl font-bold">
                2
              </h2>
              <BsArrowDownRight />
            </div>
          </div>
        </Link>

        <Link
          data-aos="fade-down-right"
          to="portfolio"
          smooth={true}
          className="cursor-pointer"
        >
          <div className="bg-white/5 h-full flex justify-between gap-4 items-center hover:bg-white/15 rounded-lg transition-all duration-300 p-4">
            <div>
              <FaGoogleScholar
                size={50}
                className="p-3 rounded-full bg-black/20 mb-4"
              />
              <h5 data-aos="fade-down-right" className="text-sm font-bold mb-1">
                Years of Experience
              </h5>
              <p data-aos="fade-down-right" className="text-xs">
                Journey of continuous learning.
              </p>
            </div>
            <div className="space-y-16">
              <h2 data-aos="fade-down-right" className="text-3xl font-bold">
                1
              </h2>
              <BsArrowDownRight />
            </div>
          </div>
        </Link>

        <Link
          data-aos="fade-down-left"
          to="portfolio"
          smooth={true}
          className="cursor-pointer"
        >
          <div className="bg-white/5 h-full flex justify-between gap-4 items-center hover:bg-white/15 rounded-lg transition-all duration-300 p-4">
            <div>
              <PiCertificate
                size={50}
                className="p-3 rounded-full bg-black/20 mb-4"
              />
              <h5 data-aos="fade-down-left" className="text-sm font-bold mb-1">
                Certificates
              </h5>
              <p data-aos="fade-down-left" className="text-xs">
                Proof of acquired skills.
              </p>
            </div>
            <div className="space-y-16">
              <h2 data-aos="fade-down-left" className="text-3xl font-bold">
                0
              </h2>
              <BsArrowDownRight />
            </div>
          </div>
        </Link>

        <Link
          data-aos="fade-up-left"
          to="portfolio"
          smooth={true}
          className="cursor-pointer"
        >
          <div className="bg-white/5 h-full flex justify-between gap-4 items-center hover:bg-white/15 rounded-lg transition-all duration-300 p-4">
            <div>
              <LiaMedalSolid
                size={50}
                className="p-3 rounded-full bg-black/20 mb-4"
              />
              <h5 data-aos="fade-up-left" className="text-sm font-bold mb-1">
                Awards
              </h5>
              <p data-aos="fade-up-left" className="text-xs">
                Earned for impactful contributions.
              </p>
            </div>
            <div className="space-y-16">
              <h2 data-aos="fade-up-left" className="text-3xl font-bold">
                0
              </h2>
              <BsArrowDownRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
