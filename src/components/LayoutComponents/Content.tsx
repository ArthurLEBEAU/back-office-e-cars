import antdutils from "@utils/systemutils/antdutils";
import { Grid, Layout } from "antd";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import BreadCrumb from "./BreadCrumb";
import FooterApp from "./Footer";

const Content = ({ children }: any) => {
  const { useBreakpoint } = Grid;
  const collapsed = useSelector((state: any) => state.collapsedState.collapsed);
  const screens = antdutils.getBreakPoint(useBreakpoint());
  const { Content } = Layout;
  return (
    <motion.div
      animate={
        screens.length > 2
          ? collapsed
            ? { paddingLeft: "80px" }
            : {
                paddingLeft: "215px",
                transition: {
                  duration: 0.2,
                  type: "spring",
                  bounce: 0,
                },
              }
          : undefined
      }
    >
      <Layout className={` bg-white `}>
        <Content className="app-content">
          <BreadCrumb />
          <div className=" mt-8 relative pb-8 mb-16">{children}</div>
          <FooterApp />
        </Content>
      </Layout>
    </motion.div>
  );
};

export default Content;

// ${
//   collapsed === false ? " collapsed" : " no-collapsed"
// }
