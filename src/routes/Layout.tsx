import "./Layout.css";
import Header from "../template/header/Header";

import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateToken } from "../state/user/userSlice";
import { useEffect } from "react";

// Web Layout
function Layout() {
  const dispatch = useDispatch();
  const token: string = useSelector((state: RootState) => state.user.token);

  // Retrieve JWT token if exist and then data
  const retrieveData = () => {
    if (token) return;
    const tokenString = localStorage.getItem("token"); // get token from local storage
    dispatch(updateToken(tokenString)); // Update token for this session
  };

  // Hooks
  useEffect(() => {
    retrieveData();
  });

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
