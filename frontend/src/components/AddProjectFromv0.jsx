import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ComboboxDemo } from "./AddTeamMember";
import { useState } from "react";
import { useCreateProjectMutation } from "@/slices/projectSlice";
import { useGetUsersQuery } from "@/slices/usersApiSlice";

export default function AddProjectFromv0() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [createProject, { isLoading, error }] = useCreateProjectMutation();

  const handleClick = async (event) => {
    event.preventDefault();
    console.log(description, name);
    if (description && name) {
      try {
        const response = await createProject({
          name: name,
          description,
        });
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full justify-center" variant="default">
          Create New Project
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Card>
          <CardHeader className="px-4 py-2">
            <CardTitle className="text-center">Add project</CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-2">
            <div className="space-y-2">
              <div className="space-y-1">
                <Label className="form-label" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter the project name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="form-label" htmlFor="description">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter the project description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />
              </div>
              {/* <div className="space-y-2">
                <Label className="form-label" htmlFor="members">
                  Team Members
                </Label>
                <ComboboxDemo />
              </div> */}
            </div>
          </CardContent>
          <CardFooter className="p-4 flex justify-end gap-2">
            {/* //close the popover when clicked on the cancel button */}
            <PopoverClose asChild>
              <Button variant="outline">Cancel</Button>
            </PopoverClose>

            <Button type="submit" onClick={handleClick}>
              Add project
            </Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
