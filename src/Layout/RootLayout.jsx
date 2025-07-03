import React from "react";
import Home from "../Components/Home/Home";
import Cursor from "../Components/Cursor/Cursor";
import CenterGlowBackground from "../Components/CenterGlowBackground/CenterGlowBackground";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Showcase from "../Components/Showcase/Showcase";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

const RootLayout = () => {
  return (
    <div className="xl:container mx-auto px-4 scroll-smooth">
      <CenterGlowBackground></CenterGlowBackground>
      <Cursor></Cursor>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Showcase></Showcase>

      <div className="flex flex-col justify-center gap-4 sticky bottom-4 left-0">
        <a
          href="https://github.com/SarfarazAkram17"
          target="_blank"
        >
          {" "}
          <FaGithub size={35} className="text-black bg-white rounded-full" />
        </a>
        <a
          href="https://www.linkedin.com/in/sarfaraz-akram"
          target="_blank"
        >
          {" "}
          <LiaLinkedinIn
            size={32}
            className="bg-[#0077B5] text-white rounded-sm"
          />
        </a>
      </div>
    </div>
  );
};

export default RootLayout;
