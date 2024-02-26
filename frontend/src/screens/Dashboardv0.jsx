import Sidebar from "../components/Sidebar";
import Header from "@/components/HeaderDashboard";
import { Outlet } from "react-router-dom";

export default function Component() {
  return (
    <>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
