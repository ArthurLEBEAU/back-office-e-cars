import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Logo from "@components/SharedComponents/Logo/Logo";
import {
  setCollapsed,
  setMobileCollapsed,
} from "@redux/feature/slices/collapsedSlice";
import NavProfile from "./NavProfile";
import { ATButton } from "@components/SharedComponents/AtomicComponents/Button";

const HeaderNav = () => {
  const collapsed = useSelector((state: any) => state.collapsedState.collapsed);
  const dispatch = useDispatch();
  const animateToogle = {
    collapsed: {
      width: "0px",
      transition: {
        duration: 0.02,
        type: "spring",
        bounce: 0.2,
      },
    },
    noCollapsed: {
      width: "240px",
      transition: {
        duration: 0.01,
        type: "spring",
        bounce: 0.2,
      },
    },
  };
  return (
    <div
      className="py-1 pl-4 pr-8 bg-white flex items-center justify-between w-full fixed left-0 top-0 right-0 h-14 lg:h-auto  shadow"
      style={{ zIndex: 1000 }}
    >
      <motion.div
        className={`hidden  space-x-5 duration-200 lg:flex w-60 items-center justify-between `}
      >
        <Logo className={`h-12`} collapsed={collapsed} />
        <div>
          <motion.span
            variants={animateToogle}
            animate={
              collapsed
                ? {
                    x: -130,
                    transition: {
                      duration: 0.2,
                      type: "spring",
                      bounce: 0,
                    },
                  }
                : "nocollapsed"
            }
            className="hidden lg:block "
            onClick={() => dispatch(setCollapsed(!collapsed))}
          >
            <ATButton>
              {collapsed === false ? (
                <MenuFoldOutlined style={{ fontSize: "20px" }} />
              ) : (
                <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
              )}
            </ATButton>
          </motion.span>
        </div>
      </motion.div>
      <span
        onClick={() => dispatch(setMobileCollapsed(!collapsed))}
        className=" lg:hidden"
      >
        <ATButton>
          <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
        </ATButton>
      </span>

      <div>
        <NavProfile />
      </div>
    </div>
  );
};

export default HeaderNav;
