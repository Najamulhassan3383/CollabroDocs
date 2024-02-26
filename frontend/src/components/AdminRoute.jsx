import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";

import { useLogoutMutation } from "../slices/usersApiSlice";

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };

const AdminRoute = () => {
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

  return userInfo ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/loginpage" replace />
  );
};
export default AdminRoute;
