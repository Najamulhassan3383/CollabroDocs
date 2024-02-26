import { useNavigate } from "react-router-dom";
import { useState } from "react";
// Sidebar.js
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import AddProjectFromv0 from "./AddProjectFromv0"; // Assuming AddProjectForm is a separate component
import { Package2Icon, PackageIcon } from "./icons/Icons";
import { useGetProjectsQuery } from "@/slices/projectSlice";

const Projects = ["Najam", "Zain", "Faraz", "Ali", "Usman"];
const Sidebar = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { data, error, isLoading } = useGetProjectsQuery();
  const navigate = useNavigate();

  // console.log("data", data);

  const handleProjectClick = (project) => {
    setSelectedProject(project._id);
    navigate(`/dashboard/project/${project._id}`, { state: { project } }); // Navigate to the project page with the project ID
  };

  // change the background color for selected project
  const renderProjectList = () => {
    return data.data.map((project) => (
      <div
        key={project._id}
        onClick={() => handleProjectClick(project)}
        className={`px-4 py-2 rounded-md cursor-pointer ${
          selectedProject === project._id
            ? "bg-gray-900 text-white hover:bg-gray-700 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-300 dark:hover:text-black"
            : "bg-gray-100 dark:bg-gray-600"
        }`}
      >
        {project.name}
      </div>
    ));
  };

  return (
    <div className="border-r w-[230px] md:w-[300px] mt-5 py-4 bg-gray-100/40 dark:bg-gray-800/40">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex items-center justify-center gap-4 px-6 mb-4">
            <Package2Icon className="h-6 w-6" />
            <div className="m-0">Acme Inc</div>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="flex flex-col gap-1 px-6">
              <div className="font-bold text-xl">Dashboard</div>
              <div className="flex flex-row items-center gap-1.5 ml-4">
                <PackageIcon className="h-4 w-4" />
                <div className="font-bold text-lg">Projects</div>
                <Badge className="ml-auto">{data.data.length}</Badge>
              </div>
              {renderProjectList()}
              <AddProjectFromv0 />
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
