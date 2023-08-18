import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PersistLogin = () => {
    const userInfo = useSelector((state: any) => state.auth.userInfo);
    const tokenLocalStorage = localStorage.getItem('token')
    let location = useLocation();

    return (
        <>
            {userInfo || tokenLocalStorage ? (
                <Outlet />
            ) : (
                <Navigate to={`/auth`} state={{ from: location }} replace />
            )}
        </>
    );
};

export default PersistLogin;
