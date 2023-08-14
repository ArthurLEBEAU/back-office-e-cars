import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectComponent = () => {
    let location = useLocation();
    const userInfo = useSelector((state: any) => state.auth.userInfo);
    const tokenLocalStorage = localStorage.getItem('token')
    return (
        <>
            {userInfo || tokenLocalStorage ? (
                <Navigate to={`/accueil/cars`} state={{ from: location }} replace />
            ) : (
                <Navigate to={`/`} state={{ from: location }} replace />
            )}
        </>
    );
};

export default RedirectComponent;
