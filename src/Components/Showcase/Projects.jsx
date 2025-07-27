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
          key={project.name}
          data-aos={project.aos}
          className="bg-[#1e2b3a] rounded-2xl shadow-md text-white flex flex-col border border-transparent hover:border-[#009D8F] hover:shadow-2xl transition-all duration-500"
        >
          {/* Image */}
          <div className="p-4 pb-0 flex justify-center">
            <div className="group relative w-full h-48 sm:h-72 md:h-56 lg:h-48 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              {/* Status Badge */}
              {project.status && (
                <div
                  data-aos="fade-down"
                  className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600 animate-pulse select-none shadow-lg"
                >
                  {project.status}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            {/* Title */}
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            {/* Description */}
            <div className="mb-3">
              <p className="text-sm text-white/80 line-clamp-3">
                {project.desc}{" "}
              </p>
              <Link to={`/project/${project.name}`}>
                <span className="text-sky-400 hover:underline font-medium cursor-pointer">
                  read more
                </span>
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              {/* ✅ This 'group' is local to Live Demo only */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm hover:underline hover:text-blue-500 flex items-center gap-2 text-blue-400 font-bold"
              >
                <span className="group flex items-center gap-1">
                  Live Demo{" "}
                  <span className="mt-0.5 text-xs sm:text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <HiArrowTopRightOnSquare />
                  </span>
                </span>
              </a>

              <div className="flex gap-2 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn btn-xs rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600 hover:scale-105 active:scale-95 transition duration-300"
                >
                  Github
                  <span className="-ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <GoArrowUpRight size={15} />
                  </span>
                </a>

                <Link
                  to={`/project/${project.name}`}
                  className="group btn btn-xs rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600 hover:scale-105 active:scale-95 transition duration-300"
                >
                  Details
                  <span className="-ml-1 transition-transform duration-300 group-hover:translate-x-0.5">
                    <BsArrowRight size={15} />
                  </span>
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
