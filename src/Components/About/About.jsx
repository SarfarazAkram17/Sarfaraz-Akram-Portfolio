import { HiArrowUpRight } from "react-icons/hi2";
import { LuCodeXml } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";
import projectsData from "../../projectsData";

const About = () => (
  <section
    className="section-block section-wrap"
    id="about"
    aria-labelledby="about-title"
  >
    <div className="section-heading" data-aos="fade-up">
      <div>
        <div className="section-kicker">A little context</div>
        <h2 className="section-title" id="about-title">
          More than the stack.
        </h2>
      </div>
      <p className="section-description">
        I enjoy the whole process: understanding a problem, shaping a useful
        interface, and making the pieces work together behind the scenes.
      </p>
    </div>

    <div className="about-grid">
      <article className="about-story" data-aos="fade-up">
        <p>
          My programming journey started with curiosity about how the web works.
          That spark grew into a love for coding, problem-solving, and building{" "}
          <strong>user-friendly, scalable web applications</strong>{" "} that make a
          real difference.
        </p>
        <p>
          As a MERN stack developer, I enjoy working across the front end and
          back end. I’m always learning new tools and technologies to improve my
          craft. Away from code, I’m passionate about cricket—a good reminder
          that a little time away can make room for fresh ideas.
        </p>
        <p>
          I’m also interested in exploring AI and data science, and the new ways
          they can make useful products possible.
        </p>
      </article>

      <aside className="about-aside" data-aos="fade-left">
        <div>
          <span className="aside-label">How I like to work</span>
          <p className="aside-statement">
            Good software should feel <span>clear, considered, and human.</span>
          </p>
        </div>
        <div className="skill-line" aria-label="Primary technologies">
          {["React", "Node.js", "Express", "MongoDB", "JavaScript"].map(
            (skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ),
          )}
        </div>
      </aside>
    </div>

    <div
      className="metric-strip"
      aria-label="Portfolio highlights"
      data-aos="fade-up"
    >
      <a className="metric-panel" href="#portfolio">
        <strong>
          <LuCodeXml aria-hidden="true" /> {projectsData.length}
        </strong>
        <span>Full-stack projects</span>
      </a>
      <a
        className="metric-panel"
        href="#portfolio"
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent("portfolio-tab", { detail: "certificates" }),
          )
        }
      >
        <strong>
          <PiCertificate aria-hidden="true" /> 01
        </strong>
        <span>Certificate</span>
      </a>
      <a
        className="metric-panel"
        href="#portfolio"
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent("portfolio-tab", { detail: "awards" }),
          )
        }
      >
        <strong>
          <LiaMedalSolid aria-hidden="true" /> 01
        </strong>
        <span>Award</span>
      </a>
    </div>

    <div className="about-cta">
      <a className="text-link" href="#contact">
        Let’s build something useful <HiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  </section>
);

export default About;
