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

const CardDashboard = ({ document }) => {
  let title = document.title.substring(0, 20);
  let description = document.description.substring(0, 40);
  const navigate = useNavigate();

  const handleClick = (document) => {
    navigate(`/edit/${document._id}`, { state: { document } });
  };

  return (
    <Card
      className="bg-[#f0f0f0] w-full cursor-pointer"
      onClick={() => handleClick(document)}
    >
      <CardHeader className="flex flex-row items-center gap-4">
        <BookOpenIcon className="w-8 h-8" />
        <div className="grid gap-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" size="icon" variant="ghost">
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
