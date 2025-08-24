import { Link } from "react-scroll";
import { LuCodeXml } from "react-icons/lu";
import { BsArrowDownRight } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";
import { FaGoogleScholar } from "react-icons/fa6";

const About = () => {
  return (
    <div className="pb-6 pt-10 mt-[4.5rem] max-w-5xl mx-auto px-4" id="about">
      <div data-aos="fade-up">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-cyan-600 to-green-600">
          About Me
        </h1>
        <div className="mt-3 mb-6 w-32 h-1 rounded-full mx-auto bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600" />
      </div>

      <p
        data-aos="fade-right"
        className="text-white/70 leading-relaxed text-sm text-center max-w-3xl mx-auto"
      >
        Hi, I'm Sarfaraz Akram. My programming journey started out of curiosity
        about how the web works, and that spark turned into a passion for
        coding. I love how programming stretches my thinking and sharpens my
        problem-solving skills. What excites me most is building user-friendly,
        scalable web applications that make a real difference.
        <br />
        I’m a MERN Stack Developer with a strong interest in building full-stack
        web applications. I enjoy working across both the front-end and
        back-end, and I’m always learning new tools and technologies to improve
        my skills. Outside of coding, I’m passionate about cricket and often
        play in my free time, which helps me stay energized and creative in my
        work.
        <br />
        Looking ahead, I’m eager to dive into AI and data science to expand my
        skillset and contribute to the future of technology.
      </p>

      <div
        data-aos="fade-left"
        className="flex justify-center gap-4 mt-6 items-center"
      >
        <Link
          to="contact"
          smooth={true}
          offset={-60}
          className="btn px-6 py-3 rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-r from-blue-400 via-cyan-600 to-green-600 hover:scale-105 active:scale-95 transition duration-300"
        >
          Let’s Connect
        </Link>

        <Link
          to="portfolio"
          smooth={true}
          offset={-60}
          className="btn px-6 py-3 rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600 hover:scale-105 active:scale-95 transition duration-300"
        >
          View Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 items-stretch">
        <Link
          data-aos="fade-up-right"
          to="portfolio"
          offset={-60}
          smooth={true}
          className="cursor-pointer"
        >
          <div className="bg-white/5 h-full flex justify-between gap-4 items-start hover:bg-white/15 rounded-lg transition-all duration-300 p-4">
            <div>
              <LuCodeXml
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
                3
              </h2>
              <BsArrowDownRight />
            </div>
          </div>
        </Link>

        <Link
          data-aos="fade-down-right"
          to="portfolio"
          offset={-60}
          smooth={true}
          className="cursor-pointer"
        >
          <div className="bg-white/5 h-full flex justify-between gap-4 items-start hover:bg-white/15 rounded-lg transition-all duration-300 p-4">
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
          offset={-60}
          smooth={true}
          className="cursor-pointer"
        >
          <div className="bg-white/5 h-full flex justify-between gap-4 items-start hover:bg-white/15 rounded-lg transition-all duration-300 p-4">
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
          offset={-60}
          smooth={true}
          className="cursor-pointer"
        >
          <div className="bg-white/5 h-full flex justify-between gap-4 items-start hover:bg-white/15 rounded-lg transition-all duration-300 p-4">
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
