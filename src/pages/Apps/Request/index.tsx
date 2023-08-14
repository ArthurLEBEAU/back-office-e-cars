import { Routes, Route } from "react-router-dom";
import RequestListPage from "./List";

function RequestPage() {
    return (<Routes>
        <Route index element={<RequestListPage />} />
    </Routes>)
}

export default RequestPage;
