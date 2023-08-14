import { UserOutlined } from "@ant-design/icons";
import { ATButton } from "@components/SharedComponents/AtomicComponents/Button";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import MaterialIcon from "@components/SharedComponents/Icons/MaterialIcons";
import { apiSlice } from "@redux/feature/api/apiSlice";
import { logOutState } from "@redux/feature/slices/authSlice";
import { Avatar, Dropdown, Menu, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.auth.userInfo);
  const handleLogout = () => {
    try {
      localStorage.setItem("connected", "false");
      localStorage.removeItem("token");
      message.success({
        content: "Vous vous êtes déconnecter avec succès",
        key: 1,
      });
      navigate(`/`, { replace: true });
      dispatch(apiSlice.util.resetApiState());
      dispatch(logOutState());
    } catch (err) {}
  };
  const menu = (
    <Menu
      items={[
        {
          type: "divider",
        },
        {
          label: (
            <span
              onClick={handleLogout}
              className="space-x-3 py-1 flex items-center cursor-pointer"
            >
              <MaterialIcon icon="logout" /> <span>Déconnexion</span>
            </span>
          ),
          key: "3",
          danger: true,
        },
      ]}
    />
  );
  return (
    <div>
      <ATButton>
        <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
          <div className="flex items-center lg:space-x-5">
            <div className="flex items-center space-x-5">
              <Avatar
                //  src={user?.photo}
                size="large"
                icon={<UserOutlined />}
              />
              <div className="hidden lg:flex items-center">
                <div className="flex  flex-col -space-y-1">
                  <AText bold>
                  {userInfo?.username ?? 'Username'}
                  </AText>
                  <AText className="text-primary" size="mini+2">
                    {/* {user.fonction} */} Administrateur
                  </AText>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <MaterialIcon icon="expand_more" />
            </div>
          </div>
        </Dropdown>
      </ATButton>
    </div>
  );
};

export default NavProfile;
