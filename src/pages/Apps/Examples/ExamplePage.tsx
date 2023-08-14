import { Routes, Route } from "react-router-dom";
import ExampleListPage from "./ExampleListPage";

function ExamplePage() {
  return (
    <Routes>
      <Route index element={<ExampleListPage />} />
    </Routes>
  );
}

export default ExamplePage;
