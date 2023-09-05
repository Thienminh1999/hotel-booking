import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { isAdmin = false, children, role } = props;

  if (role && role === "user" && isAdmin) {
    return <Navigate to="/unauthenticate" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/unauthenticate" replace />;
  }

  console.log("ProtectedRoute");
  return children;
}

export default ProtectedRoute;
