import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  Route,
  // Redirect,
  Routes,
} from "react-router-dom";

import LandingPage from "./components/LandingPage";
import DashboardPage from "./HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
