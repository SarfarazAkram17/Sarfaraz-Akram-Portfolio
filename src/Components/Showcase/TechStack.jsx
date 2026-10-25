import html from "../../assets/html.png";
import css from "../../assets/css.svg";
import js from "../../assets/js.png";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.svg";
import firebase from "../../assets/firebase.png";
import query from "../../assets/query.png";
import jwt from "../../assets/jwt.png";
import node from "../../assets/nodejs.svg";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import github from "../../assets/github.png";

const techs = [
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JavaScript", src: js },
  { name: "Tailwind CSS", src: tailwind },
  { name: "React", src: react },
  { name: "TanStack Query", src: query },
  { name: "Firebase", src: firebase },
  { name: "JWT", src: jwt },
  { name: "Node.js", src: node },
  { name: "Express.js", src: express },
  { name: "MongoDB", src: mongodb },
  { name: "GitHub", src: github, extra: "tech-github-icon" },
];

const TechStack = () => (
  <div className="tech-grid" aria-label="Technologies">
    {techs.map((tech) => (
      <article className="tech-item" key={tech.name}>
        <img className={tech.extra || ""} src={tech.src} alt="" loading="lazy" />
        <h3>{tech.name}</h3>
      </article>
    ))}
  </div>
);

export default TechStack;
