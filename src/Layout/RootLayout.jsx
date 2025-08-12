import { useEffect, useState } from "react";
import Cursor from "../Components/Cursor/Cursor";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
import CopyRIght from "../Components/CopyRIght/CopyRIght";

import AOS from "aos";
import "aos/dist/aos.css";
import GlowBg from "../Components/GLowBg/GlowBg";

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

  // AOS init for animations repeated every time element is visible
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animate every time element enters viewport
      mirror: true, // Animate on scroll up as well
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", refreshAOS);
    window.addEventListener("scroll", refreshAOS);

    return () => {
      window.removeEventListener("resize", refreshAOS);
      window.removeEventListener("scroll", refreshAOS);
    };
  }, []);

  return (
    <div id="root">
      <ToastContainer theme="dark"></ToastContainer>
      <div className="fixed top-0 z-[9999] w-full">
        <ProgressBar
          percent={scrollPercent}
          filledBackground="linear-gradient(to left, #60A5FA, #0891B2, #16A34A)"
          height={6}
        />
      </div>
      <GlowBg></GlowBg>
      <Cursor></Cursor>
      <Outlet></Outlet>
      <CopyRIght></CopyRIght>
    </div>
  );
};

export default RootLayout;
