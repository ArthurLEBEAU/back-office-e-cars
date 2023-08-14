import { Route, Routes } from "react-router-dom";
import CarsPage from "./Cars";
import ExamplePage from "./Examples/ExamplePage";

function AppPages() {
  return (
    <Routes>
      <Route index element={<CarsPage />} />
      <Route path="requests/*" element={<ExamplePage />} />
    </Routes>
  );
}
export default AppPages;
