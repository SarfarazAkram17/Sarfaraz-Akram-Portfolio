import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import projectsData from "../../projectsData";
import { Link } from "react-router";
import { BsArrowRight } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  const projects = projectsData;

  return (
    <div className="p-3 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          data-aos={project.aos}
          className="bg-[#1e2b3a] transf rounded-2xl shadow-md text-white flex flex-col group border border-transparent hover:border-purple-600 hover:shadow-2xl transition-all duration-500"
        >
          {/* Image */}
          <div className="p-4 pb-0 flex justify-center">
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            {/* Title */}
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            {/* Description */}
            <p className="text-sm text-white/80 mb-3">
              {project.desc}{" "}
              <Link to={`/project/${project.id}`}>
                <span className="text-sky-400 hover:underline font-medium cursor-pointer">
                  read more
                </span>
              </Link>
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <a
                href={project.liveLink}
                target="_blank"
                className="text-sm hover:underline hover:text-blue-500 flex items-center gap-2 text-blue-400 font-bold"
              >
                Live Demo <HiArrowTopRightOnSquare size={18} />
              </a>
              <div className="flex gap-2 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  className="btn btn-xs rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-r from-blue-400 via-cyan-600 to-green-600 hover:scale-105 active:scale-95 transition duration-300"
                >
                  Github <GoArrowUpRight size={15} />
                </a>
                <Link
                  to={`/project/${project.id}`}
                  className="btn btn-xs rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600 hover:scale-105 active:scale-95 transition duration-300"
                >
                  Details <BsArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
