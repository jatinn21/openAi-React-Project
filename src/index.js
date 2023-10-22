import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Auth0Provider
      domain="dev-erlt7lvye8z2m50z.us.auth0.com"
      clientId="zVWN5Qx4SVUxFfgQ7URgQrGrVyMAuvGn"
      redirect_uri={() => (window.location = "/dashboard")}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
  // </React.StrictMode>
);