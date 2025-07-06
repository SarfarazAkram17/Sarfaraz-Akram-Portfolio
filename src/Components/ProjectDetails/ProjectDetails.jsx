import { useParams } from "react-router";
import projectsData from "../../projectsData";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10 text-white">
      hello {project.id}
    </div>
  );
};

export default ProjectDetails;
