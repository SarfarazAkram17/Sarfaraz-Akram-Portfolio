import {
  SiExpress,
  SiJsonwebtokens,
  SiGithub,
  SiMongodb,
  SiTailwindcss,
  SiTanstack,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFirebaseLine } from "react-icons/ri";

const techs = [
  { name: "HTML", icon: FaHtml5, color: "#e76f3c" },
  { name: "CSS", icon: FaCss3Alt, color: "#5796dc" },
  { name: "JavaScript", icon: FaJs, color: "#e6bd45" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#51b9c8" },
  { name: "React", icon: FaReact, color: "#61bfe3" },
  { name: "TanStack Query", icon: SiTanstack, color: "#e66048" },
  { name: "Firebase", icon: RiFirebaseLine, color: "#eeb949" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#d5c58f" },
  { name: "Node.js", icon: FaNodeJs, color: "#79ae65" },
  { name: "Express.js", icon: SiExpress, color: "#d7dfd4" },
  { name: "MongoDB", icon: SiMongodb, color: "#5fbd83" },
  { name: "GitHub", icon: SiGithub, color: "#d7dfd4" },
];

const TechStack = () => (
  <div className="tech-grid" aria-label="Technologies">
    {techs.map((tech) => (
      <article className="tech-item" key={tech.name}>
        <span className="tech-logo" style={{ color: tech.color }}>
          <tech.icon aria-hidden="true" />
        </span>
        <h3>{tech.name}</h3>
      </article>
    ))}
  </div>
);

export default TechStack;