import React from "react";
import { Select } from "antd";

const { Option } = Select;

const AutoComplete = ({ collaborators, setCollaborators, data }) => {
  const handleChange = (value) => {
    setCollaborators(value);
  };

  return (
    <Select
      mode="multiple" // Enable multiple selections
      style={{ width: "100%" }}
      placeholder="Select collaborators"
      onChange={handleChange}
      value={collaborators} // Use the array of selected user IDs directly
      className="w-full h-auto text-gray-700 border rounded-lg mb-2"
    >
      {data.map((user) => (
        <Option key={user._id} value={user._id}>
          {user.name}
        </Option>
      ))}
    </Select>
  );
};

export default AutoComplete;
