import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package2Icon, SearchIcon, UsersIcon } from "./icons/Icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "@/slices/usersApiSlice";
import { setCredentials } from "@/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const hanldelogout = () => {
    logout()
      .unwrap()
      .then((data) => {
        dispatch(setCredentials(null));
        navigate("/loginpage");
      });
  };
  const handleClick = () => {
    navigate("/dashboard/profile");
  };
  return (
    <header className="flex items-center gap-4 h-14 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link className="lg:hidden" href="#">
        <Package2Icon className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
        <Link className="font-bold" href="#">
          Projects
        </Link>
      </nav>
      <div className="flex items-center gap-4 md:gap-2 lg:gap-4 ml-auto">
        <div className="flex items-center gap-2">
          <Input
            className="w-0 placeholder-gray-500 appearance-none bg-transparent border-none outline-none dark:placeholder-gray-400"
            id="search"
            placeholder="Search"
            type="search"
          />
          <SearchIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <img
                alt={userInfo?.name}
                className="rounded-full border"
                height="32"
                src="https://picsum.photos/200"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleClick}>
              My Account
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={hanldelogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <UsersIcon className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="grid grid-cols-2 gap-2 p-4">
              <div className="flex items-center gap-2">
                <img
                  alt="Team Member"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="Team Member"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span>Jane Smith</span>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
