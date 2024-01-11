import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../jobly-context/AuthContext";

const PrivateRoute = ({ element }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default PrivateRoute;
