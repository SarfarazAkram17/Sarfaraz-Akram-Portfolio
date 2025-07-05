import React from "react";
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
import Tilt from "react-parallax-tilt";

const techs = [
  { name: "HTML", src: html, aos: "fade-up-right" },
  { name: "CSS", src: css, aos: "fade-up-left" },
  { name: "Tailwind CSS", src: tailwind, aos: "fade-up-left" },
  { name: "JavaScript", src: js, aos: "fade-up-right" },
  { name: "React", src: react, aos: "fade-up-right" },
  { name: "Firebase", src: firebase, aos: "fade-up-left" },
  { name: "T. Query", src: query, aos: "fade-up-right" },
  {
    name: "Github",
    src: github,
    aos: "fade-up-left",
    extra: "bg-white overflow-hidden rounded-full",
  },
  { name: "MongoDb", src: mongodb, aos: "fade-up-left" },
  { name: "Node JS", src: node, aos: "fade-up-right" },
  { name: "Express JS", src: express, aos: "fade-up-right" },
  { name: "JWT", src: jwt, aos: "fade-up-left" },
];

const TechStack = () => {
  return (
    <div className="p-3 md:p-6 mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {techs.map((tech, i) => (
        <Tilt>
              <div
            key={i}
            data-aos={tech.aos}
            className="group h-36 bg-black/40 hover:scale-105 hover:bg-black/20 transition-all duration-500 p-4 rounded-lg flex gap-2 flex-col justify-center items-center"
          >
            {/* Image glow container */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500 -z-10 bg-gradient-to-br from-red-100 via-pink-200 to-rose-100"></div>
              <img
                src={tech.src}
                alt={tech.name}
                className={`w-16 relative z-10 ${tech.extra || ""}`}
              />
            </div>
            <h5 className="text-white/70 font-bold">{tech.name}</h5>
          </div>
        </Tilt>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
