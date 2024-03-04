// ProfileScreen.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import {
  useLogoutMutation,
  useUpdateUserMutation,
} from "../slices/usersApiSlice";
import ColboratorModal from "@/components/ColaboratorModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const [openEditModel, setOpenEditModel] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(userInfo?.name);
  const [updateUser, { isLoading: updating, error }] = useUpdateUserMutation();
  const hanldelogout = () => {
    logout()
      .unwrap()
      .then((data) => {
        dispatch(setCredentials(null));
        navigate("/loginpage");
      });
  };
  const handleUpdate = () => {
    console.log(newPassword, confirmPassword, "from profile");
    updateUser({ password: newPassword, name })
      .unwrap()
      .then((data) => {
        dispatch(setCredentials(data));
        console.log(data);
      });
  };
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 ">
      <div className="bg-white p-4 rounded shadow-md mt-4 mb-4 ">
        <img
          className="w-20 h-20 mx-auto rounded-full mb-2"
          src="https://placekitten.com/200/200"
          alt="Profile"
        />

        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    defaultValue={userInfo?.email}
                    disabled
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleUpdate}>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">New password</Label>
                  <Input
                    id="current"
                    type="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Confirm New password</Label>
                  <Input
                    id="new"
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleUpdate}>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileScreen;
