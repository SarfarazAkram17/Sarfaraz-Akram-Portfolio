import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import projectsData from "../../projectsData";
import { Link } from "react-router";

const Projects = () => {
  const projects = projectsData;

  return (
    <div className="p-3 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          data-aos={project.aos}
          className="bg-[#1e2b3a] rounded-2xl overflow-hidden shadow-md text-white flex flex-col"
        >
          {/* Image */}
          <div className="p-4 pb-0 flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            {/* Title */}
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            {/* Description */}
            <p className="text-sm text-white/80 mb-3">
              {project.desc}
              <span className="text-sky-400 font-medium cursor-pointer">
                {" "}
                read more
              </span>
            </p>

            {/* Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techs.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

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
                  className="btn btn-sm rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 active:scale-95 transition duration-300"
                >
                  Github
                </a>
                <Link
                  to={`/project/${project.id}`}
                  className="btn btn-sm rounded-full font-semibold text-white border-0 shadow-lg bg-gradient-to-l from-purple-500 via-pink-500 to-red-500 hover:scale-105 active:scale-95 transition duration-300"
                >
                  Details
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
