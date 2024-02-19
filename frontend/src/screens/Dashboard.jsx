import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AddProjectForm } from "../components/AddProjectForm";
import ProjectTable from "../components/ProjectTable";
import DocumentTable from "../components/DocumentTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetProjectsQuery } from "../slices/projectSlice";
import { useGetDocumentsQuery } from "../slices/documentsSlice";
import { Outlet } from "react-router-dom";
import Documents from "../components/Documents";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const { data, error, isLoading } = useGetProjectsQuery();

  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 lg:flex lg:flex-row gap-x-4">
            <div className="lg:w-auto sm:w-full md:w-[10%]">
              <h1
                className="
                text-xl font-bold tracking-tight text-gray-900
                px-4 py-6 sm:px-6 lg:px-8
              "
              >
                Projects
              </h1>
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <ProjectTable projects={data.data} />
              )}
            </div>
            <div className="lg:w-full sm:w-full ">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
