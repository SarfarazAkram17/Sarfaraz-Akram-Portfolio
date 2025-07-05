import React from "react";
import { useParams } from "react-router";
import projectsData from "../../projectsData";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from "react-router";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center text-white py-10">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-400 underline hover:text-blue-500"
        >
          Go back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10 text-white">
      <div className="bg-[#1e2b3a] rounded-2xl shadow-md overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-white/80">{project.desc}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech, idx) => (
              <span
                key={idx}
                className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-400 hover:text-blue-500 flex items-center gap-1"
            >
              Live Demo <HiArrowTopRightOnSquare size={16} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm font-semibold text-white border-0 shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transition-all"
            >
              GitHub
            </a>
            <Link
              to="/"
              className="btn btn-sm font-semibold text-white bg-gradient-to-l from-purple-500 via-pink-500 to-red-500"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
