import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

import { useState } from "react";

export default function ColboratorModal({ onClose, place }) {
  const [collaborator, setCollaborator] = useState("");

  const handleClick = () => {
    console.log("Add collaborator");
  };

  return (
    <Tabs defaultValue="EditProject" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="EditProject">Edit {place}</TabsTrigger>
        {place !== "Project" && (
          <TabsTrigger value="AddCollab">Collaborators</TabsTrigger>
        )}
      </TabsList>
      <TabsContent value="EditProject">
        <Card>
          <CardHeader>
            <CardTitle>Edit {place}</CardTitle>
            <CardDescription>
              Edit the {place} name and description.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="name">{place} Name</Label>

              <Input label="name" className="outline" />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="description">Add {place} Description</Label>

              <Input label="description" className="outline" />
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center mt-4 gap-4">
          <Button variant="destructive" size="lg" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button variant="default" size="lg">
            Save
          </Button>
        </div>
      </TabsContent>
      {place !== "Project" && (
        <TabsContent value="AddCollab">
          <Card>
            <CardHeader>
              <CardTitle>Share this document</CardTitle>
              <CardDescription>
                Anyone with the link can view this document.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input
                  value={collaborator}
                  className="outline"
                  onChange={(e) => setCollaborator(e.target.value)}
                />
                <Button
                  variant="default"
                  className="shrink-0"
                  onClick={handleClick}
                >
                  Add Collaborator
                </Button>
              </div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <h4 className="text-sm font-medium">People with access</h4>
                <div className="grid gap-6">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatars/03.png" />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          Olivia Martin
                        </p>
                        <p className="text-sm text-muted-foreground">
                          m@example.com
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="edit">
                      <SelectTrigger className="ml-auto w-[110px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="edit">Can edit</SelectItem>
                        <SelectItem value="view">Can view</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatars/05.png" />
                        <AvatarFallback>IN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          Isabella Nguyen
                        </p>
                        <p className="text-sm text-muted-foreground">
                          b@example.com
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="view">
                      <SelectTrigger className="ml-auto w-[110px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="edit">Can edit</SelectItem>
                        <SelectItem value="view">Can view</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback>SD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          Sofia Davis
                        </p>
                        <p className="text-sm text-muted-foreground">
                          p@example.com
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="view">
                      <SelectTrigger className="ml-auto w-[110px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="edit">Can edit</SelectItem>
                        <SelectItem value="view">Can view</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      )}
    </Tabs>
  );
}
