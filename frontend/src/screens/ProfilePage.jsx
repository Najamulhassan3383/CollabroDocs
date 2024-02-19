// ProfileScreen.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";

const ProfileScreen = () => {
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
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <img
          className="w-20 h-20 mx-auto rounded-full mb-4"
          src="https://placekitten.com/200/200"
          alt="Profile"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {userInfo.name}
        </h2>
        <p className="text-gray-600 mb-4">{userInfo.email}</p>
        <div className="border-t-2 border-gray-200 pt-4">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            luctus elit. Donec nec arcu at augue eleifend blandit.
          </p>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Edit Profile
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500"
          onClick={hanldelogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
