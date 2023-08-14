import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

function AuthPages() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      {/* <Route path="mot-de-passe-oublie" element={<ForgotPassword />} /> */}
    </Routes>
  );
}

export default AuthPages;
