import AnimateAppears from "@components/SharedComponents/MotionComponents/AnimateAppears";
import AppLayout from "@layouts/AppLayout";
import AuthLayout from "@layouts/AuthLayout";
import Layout from "@layouts/index";
import antdutils from "@utils/systemutils/antdutils";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Route, Routes } from "react-router-dom";
import Privacy from "./Other/Privacy";
import ScreenNotSupported from "./Other/ScreenNotSupported";
import TermsAndConditions from "./Other/TermsAndConditions";
import Unauthorized from "./Other/Unauthorized";
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
              path="conditions-generales-de-services"
              element={<AnimateAppears children={<TermsAndConditions />} />}
            />
            <Route
              path="politique-de-confidentialite"
              element={<AnimateAppears children={<Privacy />} />}
            />
            {/* <Route element={<PersistLogin />}> */}
            {/* <Route path="/" element={<Redirect />} /> */}
            {/* <Route element={<RequireAuth allowedRoles={[]} />}> */}
            <Route path="/accueil/*" element={<AppLayout />} />
            {/* </Route> */}
            {/* </Route> */}
            <Route
              path="*"
              element={<AnimateAppears children={<UnkownPage />} />}
            />
            <Route
              path="non-autorise"
              element={<AnimateAppears children={<Unauthorized />} />}
            />
          </Route>
        </Routes>
      ) : (
        <ScreenNotSupported />
      )}
    </div>
  );
};

export default PagesView;
