/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3I6916Ws4DZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import Link from "react-router-dom/Link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <>
      <div className="flex min-h-screen w-full">
        <div className="border-r w-[250px] py-4 bg-gray-100/40 dark:bg-gray-800/40">
          <div className="flex items-center justify-center gap-4 px-6">
            <Package2Icon className="h-6 w-6" />
            <div className="m-0">Acme Inc</div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="flex items-center gap-2">
              <Input
                className="w-0 placeholder-gray-500 appearance-none bg-transparent border-none outline-none dark:placeholder-gray-400"
                id="search"
                placeholder="Search"
                type="search"
              />
              <SearchIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="flex flex-col gap-1 px-6">
              <Link className="font-bold" href="#">
                Home
              </Link>
              <div className="flex flex-row items-center gap-1.5 ml-4">
                <PackageIcon className="h-4 w-4" />
                <Link className="font-bold" href="#">
                  Projects
                </Link>
                <Badge className="ml-auto">2</Badge>
              </div>
              <Link className="ml-4" href="#">
                Project 1
              </Link>
              <Link className="ml-4" href="#">
                Project 2
              </Link>
              <Link className="ml-4" href="#">
                Project 3
              </Link>
              <Button className="ml-4" size="sm">
                New Project
              </Button>
            </nav>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <header className="flex items-center gap-4 h-14 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Link>
            <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
              <Link className="font-bold" href="#">
                Projects
              </Link>
              <Link className="text-gray-500 dark:text-gray-400" href="#">
                Analytics
              </Link>
              <Link className="text-gray-500 dark:text-gray-400" href="#">
                Logs
              </Link>
              <Link className="text-gray-500 dark:text-gray-400" href="#">
                Settings
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
                      alt="Avatar"
                      className="rounded-full border"
                      height="32"
                      src="/placeholder.svg"
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
                  <DropdownMenuItem>My Account</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
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
          <main className="flex-1 flex flex-col p-4 md:p-6">
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <CardTitle>My Project</CardTitle>
                <CardDescription>My awesome project</CardDescription>
              </div>
              <Button className="ml-auto" onClick={undefined} size="sm">
                Edit
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
              <Card className="bg-[#f0f0f0]">
                <CardHeader className="flex flex-row items-center gap-4">
                  <HomeIcon className="w-8 h-8" />
                  <div className="grid gap-1">
                    <CardTitle>www</CardTitle>
                    <CardDescription>example.com</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="ml-auto" size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuItem>View Settings</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="text-sm font-semibold">
                    feat: update color scheme
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <GithubIcon className="w-4 h-4" />
                      <span className="text-gray-500 dark:text-gray-400">
                        3h ago
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranchIcon className="w-4 h-4" />
                      <span className="text-gray-500 dark:text-gray-400">
                        main
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#f0f0f0]">
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpenIcon className="w-8 h-8" />
                  <div className="grid gap-1">
                    <CardTitle>docs</CardTitle>
                    <CardDescription>docs.example.com</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="ml-auto" size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuItem>View Settings</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="text-sm font-semibold">
                    docs: add docs for memberships
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <GithubIcon className="w-4 h-4" />
                      <span className="text-gray-500 dark:text-gray-400">
                        1 day ago
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranchIcon className="w-4 h-4" />
                      <span className="text-gray-500 dark:text-gray-400">
                        main
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#f0f0f0]">
                <CardHeader className="flex flex-row items-center gap-4">
                  <LayoutPanelLeftIcon className="w-8 h-8" />
                  <div className="grid gap-1">
                    <CardTitle>app</CardTitle>
                    <CardDescription>app.example.com</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="ml-auto" size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuItem>View Settings</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="text-sm font-semibold">fix: login issues</div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <GithubIcon className="w-4 h-4" />
                      <span className="text-gray-500 dark:text-gray-400">
                        2 days ago
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranchIcon className="w-4 h-4" />
                      <span className="text-gray-500 dark:text-gray-400">
                        main
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
      <div>
        <div>Edit Project</div>
        <div>
          <form className="grid gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea id="description" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="teamMembers">Team Members</Label>
              <div />
            </div>
          </form>
        </div>
        <div>
          <Button onClick={undefined}>Save</Button>
          <Button onClick={undefined} variant="outline">
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function GitBranchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LayoutPanelLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="18" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  );
}

function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
