import AuthPages from "@pages/Auth";
import { Navigate, useLocation } from "react-router-dom";
function AuthLayout() {
  const token = localStorage.getItem("token");
  let location = useLocation();

  return (
    <>
      {token ? (
        <Navigate to='/dashboard/cars' state={{ from: location }} replace />
      ) : (
        <AuthPages />
      )}
    </>
  );
}

export default AuthLayout;
