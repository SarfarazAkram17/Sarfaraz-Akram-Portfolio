import React, { useEffect, useState } from "react";
import Home from "../Components/Home/Home";
import Cursor from "../Components/Cursor/Cursor";
import CenterGlowBackground from "../Components/CenterGlowBackground/CenterGlowBackground";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Showcase from "../Components/Showcase/Showcase";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import TechUsage from "../Components/TechUsage/TechUsage";
import Contact from "../Components/Contact/Contact";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer theme="dark"></ToastContainer>
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
        <TechUsage></TechUsage>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default RootLayout;
