import React, { useEffect, useState } from "react";
import Home from "../Components/Home/Home";
import Cursor from "../Components/Cursor/Cursor";
import CenterGlowBackground from "../Components/CenterGlowBackground/CenterGlowBackground";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Showcase from "../Components/Showcase/Showcase";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const RootLayout = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="sticky top-0 z-50">
        <ProgressBar
          percent={scrollPercent}
          filledBackground="linear-gradient(to left, #EF4444, #EC4899, #8B5CF6)"
          height={6}
        />
      </div>
      <div className="xl:container mx-auto px-4">
        <CenterGlowBackground></CenterGlowBackground>
        <Cursor></Cursor>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Showcase></Showcase>

        <div className="flex flex-col justify-center gap-4 sticky bottom-4 left-0">
          <a href="https://github.com/SarfarazAkram17" target="_blank">
            {" "}
            <FaGithub size={35} className="text-black bg-white rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/sarfaraz-akram" target="_blank">
            {" "}
            <LiaLinkedinIn
              size={32}
              className="bg-[#0077B5] text-white rounded-sm"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
