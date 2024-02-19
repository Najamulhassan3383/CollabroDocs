import React, { useState } from "react";

import AutoComplete from "./AutoComplete";

function AddDocument({ documentId, setIsOpen }) {
  const [textField1, setTextField1] = useState("");
  const [textField2, setTextField2] = useState("");

  const handleSave = () => {
    console.log(textField1, textField2);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl ">
      <div className="p-4 gap-y-4">
        <input
          value={textField1}
          onChange={(e) => setTextField1(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none mb-2"
          placeholder="Document Title"
        />
        <input
          value={textField2}
          onChange={(e) => setTextField2(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none mb-2"
          placeholder="Document Description"
        />
        <AutoComplete />
        <div className="flex flex-row gap-x-2">
          <button
            onClick={handleSave}
            className="w-full px-3 py-2 bg-green-600 text-white rounded-lg focus:outline-none"
          >
            Save
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full px-3 py-2 bg-red-600 text-white rounded-lg focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDocument;
