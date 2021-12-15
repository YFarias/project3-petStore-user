// src/components/IsPrivate.js

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";

function IsAdmin({ children }) {
  const { user} = useContext(AuthContext);



  if (user && user.role !== "admin") {
    // If the user is not logged in, navigate to login page
    return <Navigate to="/" />;
  } else {
    // If the user is logged in, allow to see the page
    return children;
  }
}

export default IsAdmin;
