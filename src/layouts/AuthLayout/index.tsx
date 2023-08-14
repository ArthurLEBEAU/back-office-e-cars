import AuthPages from "@pages/Auth";
// import { Navigate, useLocation } from "react-router-dom";
function AuthLayout() {
  // const connected = localStorage.getItem("connected");
  // let location = useLocation();
  return (
    <>
      {/* {connected === "true" ? (
        <Navigate to="/accueil" state={{ from: location }} />
      ) : ( */}
      <AuthPages />
      {/* )}   */}
    </>
  );
}

export default AuthLayout;
