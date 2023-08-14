import React from "react";

import { Routes, Route } from "react-router-dom";
import AuthPages from "./pages/auth";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPages />} />
        <Route path="home" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
