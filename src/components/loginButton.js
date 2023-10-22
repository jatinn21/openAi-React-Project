import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        loginWithRedirect();
        navigate("/dashboard");
      }}
    >
      Sign in with Google
    </button>
  );
};

export default LoginButton;
