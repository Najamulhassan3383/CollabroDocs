import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import ColaboratorTable from "./ColaboratorTable";
import DropDown from "./DropDown";

export function ColaboratorMoadl() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Button onClick={handleOpen} variant="gradient" className="text-balck">
        See
      </Button>
      <div>
        <Dialog open={open} handler={handleOpen} className="bg-gray-800">
          <DialogHeader className="text-white text-xl">
            All Colaborators
          </DialogHeader>
          <DialogBody>
            <ColaboratorTable />
            <DropDown />
          </DialogBody>
          <DialogFooter
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="gradient"
              color="green"
              onClick={handleOpen}
              className="bg-green-500 hover:text-green-100"
            >
              <span>Add +</span>
            </Button>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1 text-white bg-gray-300 hover:text-gray-100"
            >
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}
