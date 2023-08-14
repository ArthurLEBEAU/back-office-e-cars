import Logo from "@components/SharedComponents/Logo/Logo";
import { setMobileCollapsed } from "@redux/feature/slices/collapsedSlice";
import { Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import MenuContent from "./SideMenu/MenuContent";

function MobileNav({ footerMenu }: any) {
  const mobileCollapsed = useSelector(
    (state: any) => state.collapsedState.mobileCollapsed
  );
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setMobileCollapsed(!mobileCollapsed));
  };
  return (
    <div>
      <Drawer
        className="drawer-control lg:hidden"
        // maskClosable={false}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={mobileCollapsed}
        key={"left"}
        width={250}
      >
        <span className="flex title-font font-medium items-center mx-3 text-gray-900 mb-4  md:mb-0">
          <Logo className="h-14 w-14" />
        </span>
        <div className="my-3 border-gray-100 mx-5 border"></div>
        <MenuContent />
      </Drawer>
    </div>
  );
}

export default MobileNav;
