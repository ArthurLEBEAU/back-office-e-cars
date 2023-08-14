import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Menu, MenuProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import antdutils from "@utils/systemutils/antdutils";
import { Link } from "react-router-dom";
import MaterialIcon from "@components/SharedComponents/Icons/MaterialIcons";
import { navConfig } from "@config/nav-config";
import { setMobileCollapsed } from "@redux/feature/slices/collapsedSlice";

const setDefaultOpen = (key: any) => {
  let keyList = [];
  let keyString = "";
  if (key) {
    const arr = key.split("-");
    for (let index = 0; index < arr.length; index++) {
      const elm = arr[index];
      index === 0 ? (keyString = elm) : (keyString = `${keyString}-${elm}`);
      keyList.push(keyString);
    }
  }
  return keyList;
};
function SideNavContent(props: any) {
  const dispatch = useDispatch();
  type MenuItem = Required<MenuProps>["items"][number];
  const activeKey = useSelector((state: any) => state.menuKey.key);
  const collapsed = useSelector((state: any) => state.collapsedState.collapsed);
  const { routeInfo, hideGroupTitle } = props;
  const isMobile = !antdutils.getBreakPoint(useBreakpoint()).includes("lg");
  const closeMobileNav = () => {
    if (isMobile) {
      dispatch(setMobileCollapsed(false));
    }
  };

  function getItem(
    role: string,
    allowedRoles: string[],
    label?: React.ReactNode,
    key?: React.Key,
    icon?: React.ReactNode,
    type?: "group",
    children?: MenuItem[]
  ): MenuItem {
    if (allowedRoles.indexOf(role) === -1) {
      return {} as MenuItem;
    }
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const fonction = "SuperUser";

  const items: MenuItem[] = navConfig.map((item: any) =>
    getItem(
      fonction,
      item.permissions,
      item.link ? (
        <div onClick={() => closeMobileNav()}>
          <Link to={`${item.link ?? "#"}`}>{item.label}</Link>
        </div>
      ) : // item.type && collapsed
      false ? null : (
        <span className={item.type && "font-bold"}>{item.label}</span>
      ),
      item.key,
      <MaterialIcon icon={item.icon} />,
      item.type || undefined,
      item.subLink &&
        item.subLink.map((subitem: any) =>
          getItem(
            fonction,
            subitem.permissions,
            subitem.link ? (
              <div className="p-3" onClick={() => closeMobileNav()}>
                <Link to={`${subitem.link ?? "#"}`}>{subitem.label}</Link>
              </div>
            ) : item.type && collapsed ? null : (
              <span className="p-3">{subitem.label}</span>
            ),
            subitem.key,
            <>
              <div className="flex items-center space-x-3">
                <MaterialIcon icon={subitem.icon} />
                {!item.type && collapsed ? <span>{subitem.label}</span> : null}
              </div>
            </>,
            subitem.type || undefined,
            subitem.subLink &&
              subitem.subLink.map((subSubitem: any) =>
                getItem(
                  fonction,
                  subSubitem.permissions,
                  subSubitem.link ? (
                    <div className="p-3" onClick={() => closeMobileNav()}>
                      <Link to={`${subSubitem.link ?? "#"}`}>
                        {subSubitem.label}
                      </Link>
                    </div>
                  ) : (
                    <span>{subSubitem.label}</span>
                  ),
                  subSubitem.key,
                  <>
                    <div className="flex items-center space-x-3">
                      <MaterialIcon icon={subSubitem.icon} />
                      {collapsed ? <span>{subSubitem.label}</span> : null}
                    </div>
                  </>
                )
              )
          )
        )
    )
  );

  const itemsFinal = items.filter((element: any) => {
    if (Object.keys(element).length !== 0) {
      return true;
    }

    return false;
  });

  return (
    <>
      <Menu
        mode="inline"
        style={{ height: "100%", width: "100%", borderRight: 0 }}
        inlineCollapsed={collapsed}
        defaultSelectedKeys={[routeInfo?.key]}
        defaultOpenKeys={setDefaultOpen(routeInfo?.key)}
        className={`${hideGroupTitle ? "hide-group-title" : ""}`}
        items={itemsFinal}
        selectedKeys={[activeKey]}
      />
    </>
  );
}

function MenuContent(props: any) {
  return (
    <div className="flex relative flex-col h-full justify-around">
      <SideNavContent />
      <div className=" bottom-0 absolute left-0 right-0 ">
        {/* <Menu mode="inline" selectedKeys={[activeKey]} items={footerMenu} /> */}
      </div>
    </div>
  );
}

export default MenuContent;
