import { Link, useParams } from "react-router";
import projectsData from "../../projectsData";
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SlLayers } from "react-icons/sl";
import { LuCodeXml } from "react-icons/lu";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const project = projectsData.find((p) => p.name === projectName);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-white">
      <div className="flex gap-6 items-center">
        <Link
          to="/"
          className="group btn px-4 btn-sm rounded-lg font-semibold text-white border-0 shadow-lg bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600 hover:scale-105 active:scale-95 transition duration-300"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            <GoArrowLeft size={18} />
          </span>
          Back
        </Link>

        <div className="flex gap-2 items-center">
          <span className="text-white/70 font-semibold">Projects</span>
          <MdOutlineKeyboardArrowRight
            size={20}
            className="mt-1 text-white/70"
          />
          <span className="capitalize mt-1 font-semibold">{project.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 items-start gap-12">
        <div className="w-full">
          <div>
            <h1 className="capitalize text-4xl sm:text-5xl font-bold text-white/80">
              {project.name}
            </h1>
            <div className="mt-4 mb-10 w-16 md:w-20 animate-pulse h-1 rounded-full bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600" />
          </div>

          <p className="text-white/70 leading-relaxed mb-6">{project.desc}</p>

          <div className="bg-black/40 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center rounded-lg p-4">
            <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all duration-500 rounded-lg p-4 hover:scale-105">
              <LuCodeXml size={50} className="p-3 rounded-full bg-[#199A88]" />
              <div>
                <p className="text-xl font-bold mb-1">
                  {project.techs?.length}
                </p>
                <p className="text-sm">Total Tech Used</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all duration-500 rounded-lg p-4 hover:scale-105">
              <SlLayers size={50} className="p-3 rounded-full bg-[#018FC3]" />
              <div>
                <p className="text-xl font-bold mb-1">
                  {project.features?.length}
                </p>
                <p className="text-sm">Key Features</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="flex gap-2 items-center font-bold text-white/80 text-xl sm:text-2xl">
              <LuCodeXml /> Techs Used
            </h1>

            <div className="mt-5 mb-10 flex flex-wrap gap-3 items-center">
              {project.techs.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-semibold cursor-pointer
                             bg-gradient-to-r from-blue-400/30 via-cyan-600/30 to-green-600/30
                             text-white/80 hover:brightness-150 transition duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                className="group btn px-6 py-4 rounded-lg font-semibold text-white border-0 shadow-lg bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600 hover:scale-105 active:scale-95 transition duration-300"
              >
                Live Demo{" "}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <HiArrowTopRightOnSquare size={18} />
                </span>
              </a>
              <a
                href={project.github}
                target="_blank"
                className="group btn rounded-lg px-6 py-4 font-semibold text-white border-0 shadow-lg bg-gradient-to-r from-blue-400 via-cyan-600 to-green-600 hover:scale-105 active:scale-95 transition duration-300"
              >
                Github
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <GoArrowUpRight size={22} />
                </span>
              </a>
            </div>

            
              <div className="mt-15">
                <h2 className="text-3xl mb-4 font-semibold">Challenges I faced:</h2>
                <p className="text-white/80 leading-relaxed">
                  {project.challanges}
                </p>
              </div>

            
              <div className="mt-15">
                <h2 className="text-3xl mb-4 font-semibold">Future Plans:</h2>
                <p className="text-white/80 leading-relaxed">
                  {project.futurePlan ? project.futurePlan : 'No future plans yet.'}
                </p>
              </div>
            
          </div>
        </div>

        <div className="w-full">
          <div className="overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={`${project.name} image`}
              className="hover:scale-105 transition-all duration-500 w-full"
            />
          </div>

          <div className="mt-10">
            <h1 className="flex gap-2 items-center text-3xl sm:text-4xl font-semibold">
              ✨ Key Features :
            </h1>

            <div className="space-y-6 mt-8 text-white/90 leading-relaxed text-base">
              {project.features?.map((feature, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-lg mb-1">
                    {feature.icon} {feature.title}
                  </h3>

                  <ul className="list-disc ml-6 mt-2 pl-2 text-white/70 marker:text-white/40">
                    {feature.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
