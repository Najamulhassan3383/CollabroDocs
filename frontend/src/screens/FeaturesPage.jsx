import {
  ArrowPathIcon,
  
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import HeaderLandingPage from "../components/HeaderLandingPage";

const features = [
  {
    
    name: "Intuitive Document Editing",
    description:
      "Our user-friendly interface makes document editing a breeze. Effortlessly create, edit, and format documents with a suite of powerful tools that enhance your team's creativity and productivity",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Advanced Version Control",
    description:
      "CollaboraDocs offers robust version control, ensuring that you can roll back to previous versions or review edits with ease",
    icon: LockClosedIcon,
  },
  {
    name: "Secure Collaboration",
    description:
      "Rest easy knowing your documents are secure. CollaboraDocs employs advanced security measures to protect your sensitive information",
    icon: ArrowPathIcon,
  },

];

export default function FeaturesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <HeaderLandingPage />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Welcome to CollaboraDocs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Your all-in-one solution for seamless collaboration and document management. Read on to learn more about our features and how they can help your team work more efficiently.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
