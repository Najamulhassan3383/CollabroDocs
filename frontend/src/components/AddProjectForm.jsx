import { Card, Input, Typography, Button } from "@material-tailwind/react";
import { useCreateProjectMutation } from "../slices/projectSlice";
import { useState } from "react";
import AutoComplete from "./AutoComplete";
import { useGetUsersQuery } from "../slices/usersApiSlice";

export function AddProjectForm({ setIsOpen }) {
  const [description, setDescription] = useState("");
  const [projectName, setProjectName] = useState("");
  const [collaborators, setCollaborators] = useState([]);

  const [createProject, { isLoading, error }] = useCreateProjectMutation();
  const {
    data: users,
    error: usersError,
    isLoading: usersIsLoading,
  } = useGetUsersQuery();

  const handleClick = async (event) => {
    event.preventDefault();
    console.log(description, collaborators, projectName);
    if (description && projectName) {
      try {
        const response = await createProject({
          name: projectName,
          description,
          collaborators,
        });
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (usersIsLoading) return <div>Loading...</div>;

  return (
    <Card color="transparent mb-5" shadow={false}>
      <form className="mt-4 mb-2 w-full pt-4 px-4  pb-2 rounded-lg bg-blue-gray-800 shadow-lg">
        <div className="mb-1 flex flex-col gap-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Create Project
          </Typography>
          <Input
            size="xl"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="border-t-blue-gray-900 focus:border-t-gray-900 rounded-lg"
            labelProps={{
              className: "before:content-none after:content-none ",
            }}
          />
          <Input
            size="xl"
            placeholder="Project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-t-blue-gray-900 focus:border-t-gray-900 rounded-lg"
            labelProps={{
              className: "before:content-none after:content-none ",
            }}
          />
          <AutoComplete
            data={users}
            collaborators={collaborators}
            setCollaborators={setCollaborators}
          />
        </div>
        <div className="flex flex-row justify-center gap-4">
          <Button
            variant="gradient"
            color="green"
            onClick={handleClick}
            className="bg-green-500  py-1  hover:text-green-100 hover:bg-green-200 cursor-pointer"
          >
            <span>Add +</span>
          </Button>
          {/* button for cancel */}
          <Button
            onClick={() => setIsOpen(false)}
            color="red"
            variant="gradient"
            className="bg-red-500 py-1 hover:text-red-100 hover:bg-red-200 cursor-pointer"
          >
            <span>Cancel</span>
          </Button>
        </div>
      </form>
    </Card>
  );
}
