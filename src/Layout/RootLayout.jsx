import { useEffect, useState } from "react";
import Cursor from "../Components/Cursor/Cursor";
import CenterGlowBackground from "../Components/CenterGlowBackground/CenterGlowBackground";
import Navbar from "../Components/Navbar/Navbar";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";

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
      <CenterGlowBackground></CenterGlowBackground>
      <div className="sticky top-0 z-50">
        <ProgressBar
          percent={scrollPercent}
          filledBackground="linear-gradient(to left, #EF4444, #EC4899, #8B5CF6)"
          height={6}
        />
      </div>
      <Cursor></Cursor>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
