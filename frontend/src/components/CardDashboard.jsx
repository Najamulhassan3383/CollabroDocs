import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { BookOpenIcon, MoreHorizontalIcon } from "@/components/icons/Icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "./MainDashboard";
import ColboratorModal from "./ColaboratorModal";

const CardDashboard = ({ document }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add a state variable for the modal

  const handleEditClick = () => {
    setIsModalOpen(true); // Open the modal when the Edit button is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };
  let title = document.title.substring(0, 20);
  let description = document.description.substring(0, 40);
  const navigate = useNavigate();

  const handleClick = (document) => {
    navigate(`/edit/${document._id}`, { state: { document } });
  };

  return (
    <Card className="bg-[#f0f0f0] w-full cursor-pointer">
      <CardHeader className="flex flex-row items-center gap-4">
        <BookOpenIcon className="w-8 h-8" />
        <div className="grid gap-1" onClick={() => handleClick(document)}>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        <Button className="ml-auto" onClick={handleEditClick} size="sm">
          Edit
        </Button>
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <ColboratorModal onClose={handleModalClose} place={"Document"} />
          </Modal>
        )}
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="text-sm font-semibold">
          {" "}
          <span className="text-green-500 dark:text-green-400">Status:</span> :
          update color scheme
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-green-500 dark:text-green-400">
              {" "}
              Updated:{" "}
            </span>
            <span className="text-gray-500 dark:text-gray-400">3h ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDashboard;
