import { useState } from "react";
import { useNavigate } from "react-router-dom";
import projectIcon from "/reshot-icon-project-ZLGXCQ6AYB.svg";
import "../../public/reshot-icon-project-ZLGXCQ6AYB.svg";
import { AddProjectForm } from "./AddProjectForm";

const ProjectTable = ({ projects }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [fields, setFields] = useState({ name: "", description: "" });

  const handleClick = (projectId) => {
    console.log(projectId, "project id");
    navigate(`/dashboard/project/${projectId}`);
  };

  const handleSave = () => {
    console.log(fields);
    setIsOpen(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-[300px]">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
          <h3 className="text-2xl font-semibold">Projects</h3>
        </div>
        <div className="flex flex-col">
          {projects.map((project) => (
            <div
              key={project._id}
              onClick={() => handleClick(project._id)}
              className="flex items-center justify-between px-4 py-2 border-b cursor-pointer"
            >
              <div className="flex items-center">
                <img src={projectIcon} alt="project icon" className="w-6 h-6" />
                <p className="ml-2 text-lg font-semibold pl-12">
                  {project.name}
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 mt-4 bg-green-600 text-white rounded-md focus:outline-none"
          >
            Add
          </button>
        </div>
        {isOpen && (
          <AddProjectForm setIsOpen={setIsOpen} />
          // <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          //   <div className="bg-white rounded-lg overflow-hidden shadow-xl w-80">
          //     <div className="p-4">
          //       <input
          //         value={fields.name}
          //         onChange={(e) =>
          //           setFields({ ...fields, name: e.target.value })
          //         }
          //         className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none mb-2"
          //         type="text"
          //         placeholder="Document Name"
          //       />
          //       <input
          //         value={fields.description}
          //         onChange={(e) =>
          //           setFields({ ...fields, description: e.target.value })
          //         }
          //         className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          //         type="text"
          //         placeholder="Document Description"
          //       />
          //     </div>
          //     <div className="flex justify-between px-4 py-2 bg-gray-100">
          //       <button
          //         onClick={handleSave}
          //         className="px-4 py-2 bg-green-600 text-white rounded-md focus:outline-none"
          //       >
          //         Save
          //       </button>
          //       <button
          //         onClick={() => setIsOpen(false)}
          //         className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none"
          //       >
          //         Close
          //       </button>
          //     </div>
          //   </div>
          // </div>
        )}
      </div>
    </div>
  );
};

export default ProjectTable;
