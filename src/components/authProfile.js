import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return isAuthenticated && (window.location.href = "/dashboard");
};

export default AuthProfile;
