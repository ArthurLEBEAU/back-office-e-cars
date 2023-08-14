import { Route, Routes } from "react-router-dom";
import ExamplePage from "./Examples/ExamplePage";
import HomePage from "./Home/HomePage";

function AppPages() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="example/*" element={<ExamplePage />} />
    </Routes>
  );
}
export default AppPages;
