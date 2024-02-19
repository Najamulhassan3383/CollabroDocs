import React from "react";

const ColaboratorTable = () => {
  const colaborators = [
    {
      ColaboratorName: "John",
      ColaboratorRole : "Manger",
    },
    {
      ColaboratorName: "faraz",
      ColaboratorRole : "Manger",

    },
    {
      ColaboratorName: "Jjhjhn",
      ColaboratorRole : "Manger",

    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {colaborators.map((colaborator) => (
              <tr className="border-t bg-white">
                <td className="py-2 px-4 font-bold">
                  {colaborator.ColaboratorName}
                </td>
                <td className="py-2 px-4">
                  {colaborator.ColaboratorRole}
                </td>
                <td className="py-2 px-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-blue-500 cursor-pointer"
                    color="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ColaboratorTable;
