import { Routes, Route } from "react-router-dom";
import CarsListPage from "./List";

function CarsPage() {
    return (<Routes>
        <Route index element={<CarsListPage />} />
    </Routes>)
}

export default CarsPage;
