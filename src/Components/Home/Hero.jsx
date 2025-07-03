import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto px-6 py-20 gap-8">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-xl font-bold">Hi 👋, I'm</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Sarfaraz Akram
        </h1>
        <h3 className="text-2xl font-semibold flex items-center gap-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Passionate Web Developer",
                "Life Long Learner",
              ]}
              loop={0}
            />
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 animate-pulse">
            |
          </span>
        </h3>

        <p className="text-white/70 leading-relaxed">
          I am a detail-oriented Full Stack Developer skilled in React, Tailwind
          CSS, Firebase, MongoDB, and Express.js. I build clean, scalable web
          applications focused on performance and reliability. Leveraging AI
          tools, I enhance code quality and solve complex challenges
          efficiently. A lifelong learner, I continuously adopt new technologies
          to stay ahead in this fast-evolving field.
        </p>

        <Link
          to="contact"
          className="btn px-6 py-3 rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 active:scale-95 transition duration-300"
        >
          Let’s Connect
        </Link>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Tilt>
          <div className="relative">
            <img
              src="https://i.ibb.co/d45mZWMX/Portfolio-image-modified.png"
              alt="Sarfaraz Akram"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover"
              style={{
                boxShadow:
                  "0 0 30px rgba(139, 92, 246, 0.7), 0 0 60px rgba(236, 72, 153, 0.5), 0 0 90px rgba(239, 68, 68, 0.5)",
              }}
            />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
