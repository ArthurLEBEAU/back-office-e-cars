import AnimateAppears from "@components/SharedComponents/MotionComponents/AnimateAppears";
import Redirect from "@components/System/Redirect";
import AppLayout from "@layouts/AppLayout";
import AuthLayout from "@layouts/AuthLayout";
import Layout from "@layouts/index";
import antdutils from "@utils/systemutils/antdutils";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Route, Routes } from "react-router-dom";
import ScreenNotSupported from "./Other/ScreenNotSupported";
// import Unauthorized from "./Other/Unauthorized";
import UnkownPage from "./Other/UnknowPage";

const PagesView = () => {
  const screens = antdutils.getBreakPoint(useBreakpoint());
  return (
    <div>
      {screens.length > 1 || screens.length === 0 ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AuthLayout />} />
            <Route
              path="*"
              element={<AnimateAppears children={<UnkownPage />} />}
            />
            <Route path="/" element={<Redirect />} />
            <Route path="/accueil/*" element={<AppLayout />} />
            {/* <Route
              path="non-autorise"
              element={<AnimateAppears children={<Unauthorized />} />}
            /> */}
          </Route>
        </Routes>
      ) : (
        <ScreenNotSupported />
      )}
    </div>
  );
};

export default PagesView;
