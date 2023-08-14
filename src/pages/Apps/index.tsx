import { Route, Routes } from "react-router-dom";
import CarsPage from "./Cars";
import RequestPage from "./Request";

function AppPages() {
  return (
    <Routes>
      <Route index path="cars/*"  element={<CarsPage />} />
      <Route path="requests/*" element={<RequestPage />} />
    </Routes>
  );
}
export default AppPages;
