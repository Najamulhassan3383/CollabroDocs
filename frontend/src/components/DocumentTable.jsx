import React, { useState } from "react";
import { ColaboratorMoadl } from "./ColaboratorModal";
import { useNavigate } from "react-router-dom";
import AddDocument from "./AddDocument";

const DocumentTable = ({ documents }) => {
  const [isOpen, setIsOpen] = useState(false);
  const truncate = (input) =>
    input.length > 20 ? `${input.substring(0, 20)}...` : input;

  console.log(documents);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    setIsOpen(true);
  };

  return (
    <div className=" relative bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-end">
      <button
        onClick={handleClick}
        className="px-4 py-2 mt-4 bg-green-600 text-white rounded-md focus:outline-none"
      >
        Add A New Document
      </button>
      {isOpen && <AddDocument setIsOpen={setIsOpen} />}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Document Id</th>
              <th className="py-2 px-4">Document Title</th>
              <th className="py-2 px-4">Document Description</th>
              <th className="py-2 px-4">Colaborators</th>
            </tr>
          </thead>
          <tbody>
            {documents.length > 0 ? (
              documents.map((document, index) => (
                <tr
                  className="border-t bg-white group cursor-pointer"
                  key={document._id}
                >
                  <td
                    className="py-2 px-4 font-bold group-hover:bg-gray-100"
                    onClick={() =>
                      navigate(`/edit/${document._id}`, { state: { document } })
                    }
                  >
                    {index + 1}
                  </td>
                  <td
                    className="py-2 px-4 group-hover:bg-gray-100"
                    onClick={() =>
                      navigate(`/edit/${document._id}`, { state: { document } })
                    }
                  >
                    {document.name}
                  </td>
                  <td
                    className="py-2 px-4 group-hover:bg-gray-100"
                    onClick={() =>
                      navigate(`/edit/${document._id}`, { state: { document } })
                    }
                  >
                    {truncate(document.description || "No description")}
                  </td>
                  <td className="py-2 px-4 group-hover:bg-gray-100 group-hover:scale-110">
                    <ColaboratorMoadl />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No documents found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* button to add new document */}
      </div>
    </div>
  );
};

export default DocumentTable;
