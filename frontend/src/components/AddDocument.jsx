import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { useState } from "react";

function AddDocument({ onClose }) {
  const [textField1, setTextField1] = useState("najam ul hassan");
  const [textField2, setTextField2] = useState("");
  console.log(textField1, textField2);

  return (
    <div className="w-[400px]">
      <Card>
        <CardHeader>
          <CardTitle>Add New Document</CardTitle>
          <CardDescription>Add Document name and description.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="name">Document Name</Label>

            <Input
              label="name"
              className="outline"
              value={textField1}
              onChange={(e) => {
                setTextField1(e.target.value);
              }}
            />
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="description">Add Document Description</Label>

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
    </div>
  );
}

export default AddDocument;
