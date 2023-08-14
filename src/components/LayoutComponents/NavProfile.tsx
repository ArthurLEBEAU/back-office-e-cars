import { UserOutlined } from "@ant-design/icons";
import { ATButton } from "@components/SharedComponents/AtomicComponents/Button";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import MaterialIcon from "@components/SharedComponents/Icons/MaterialIcons";
import { Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const NavProfile = () => {
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <span
              onClick={() => navigate("/dashboard/mon-profil")}
              className="space-x-3 py-1 flex items-center cursor-pointer"
            >
              <MaterialIcon icon="account_circle" /> <span>Mon profil</span>
            </span>
          ),
          key: "0",
        },
        {
          label: (
            <span className="space-x-3 py-1 flex items-center cursor-pointer">
              <MaterialIcon icon="help" /> <span>Support</span>
            </span>
          ),
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: (
            <span
              onClick={() => navigate("/")}
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
                  <AText bold>{/* {user.name} */} Cissé Kouakou</AText>
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
