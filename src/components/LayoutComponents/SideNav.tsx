import Sider from "antd/lib/layout/Sider";
import { useSelector } from "react-redux";
import MobileNav from "./MobileNav";
import MenuContent from "./SideMenu/MenuContent";

const SideNav = () => {
  const collapsed = useSelector((state: any) => state.collapsedState.collapsed);
  return (
    <div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className=" border-r-2 min-h-full hidden  lg:block">
        <Sider
          className=" side-nav"
          collapsedWidth={90}
          width={240}
          collapsed={collapsed}
        >
          <MenuContent />
        </Sider>
      </div>
    </div>
  );
};

export default SideNav;
