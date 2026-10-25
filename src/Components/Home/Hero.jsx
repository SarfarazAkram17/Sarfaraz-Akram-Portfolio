import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { HiArrowDown } from "react-icons/hi2";
import myPic from "../../assets/professional-pic.png";

const Hero = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const roleWords = [
    "MERN stack developer",
    "full-stack problem solver",
    "curious lifelong learner",
  ];

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(motionPreference.matches);
    updatePreference();
    motionPreference.addEventListener("change", updatePreference);
    return () => motionPreference.removeEventListener("change", updatePreference);
  }, []);

  return (
  <section className="hero-section section-wrap" aria-labelledby="hero-title">
    <div className="hero-copy" data-aos="fade-up">
      <div className="eyebrow">MERN stack developer · Bangladesh</div>
      <h1 className="hero-title" id="hero-title">
        <span className="hero-name">Sarfaraz</span>
        <br />
        <span className="hero-accent">Akram.</span>
      </h1>
      <p className="hero-role">
        I’m a{" "}
        <span>
          {reduceMotion ? (
            roleWords[0]
          ) : (
            <Typewriter
              words={roleWords}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={38}
              delaySpeed={1700}
            />
          )}
        </span>
      </p>
      <p className="hero-description">
        I build thoughtful, full-stack web experiences with React, Node.js,
        Express, and MongoDB. I care about the details people feel: a clear
        interface, dependable flows, and code that is ready to grow.
      </p>

      <div className="hero-actions">
        <a
          href="/Sarfaraz-Akram-Resume.pdf"
          className="button-primary"
          download
        >
          Download Resume
        </a>
        <a href="#portfolio" className="button-secondary">
          Explore my work <HiArrowDown aria-hidden="true" />
        </a>
        <div className="social-links" aria-label="Social profiles">
          <a
            className="social-link"
            href="https://github.com/SarfarazAkram17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sarfaraz Akram on GitHub"
          >
            <FaGithub size={18} aria-hidden="true" />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/sarfarazakram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sarfaraz Akram on LinkedIn"
          >
            <LiaLinkedinIn size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>

    <div className="hero-visual" data-aos="fade-left" aria-label="Profile portrait">
      <div className="portrait-orbit" aria-hidden="true" />
      <div className="visual-index">
        <strong>PROFILE / 01</strong>
        <span>Feature · DEVELOPMENT</span>
      </div>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={6}
        glareEnable={false}
        tiltEnable={!reduceMotion}
        transitionSpeed={900}
        className="portrait-stage"
      >
        <div className="portrait-frame">
          <img src={myPic} alt="Portrait of Sarfaraz Akram" />
        </div>
      </Tilt>
      <div className="visual-caption">
        <span className="caption-dot" />
        <span>Curious by nature. Building for the web.</span>
      </div>
    </div>

    <div className="hero-scroll-note" aria-hidden="true">
      Scroll to explore
    </div>
  </section>
  );
};

export default Hero;
