import Content from "@components/LayoutComponents/Content";
import HeaderNav from "@components/LayoutComponents/HeaderNav";
import SideNav from "@components/LayoutComponents/SideNav";
import AppPages from "@pages/Apps";

const AppLayout = () => {
  return (
    <div>
      <HeaderNav />
      <div>
        <SideNav />
        <div>
          <Content>
            <AppPages />
          </Content>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
