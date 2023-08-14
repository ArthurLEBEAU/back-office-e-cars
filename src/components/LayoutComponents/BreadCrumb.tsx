import { ATButton } from "@components/SharedComponents/AtomicComponents/Button";
import MaterialIcon from "@components/SharedComponents/Icons/MaterialIcons";
import AnimateAppears from "@components/SharedComponents/MotionComponents/AnimateAppears";
import { setKey } from "@redux/feature/slices/MenuKeySlice";
import { Breadcrumb } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  const dispatch = useDispatch();
  const BreadcrumbView = () => {
    const { pathname } = location;

    const pathnames = pathname.split("/").filter((item) => item); //pour permettre les link
    const realpathname = pathnames.slice(0, pathnames.length); //pour pouvoir affichier a partir  un path donne
    // const lastpath = pathnames[pathnames.length - 1]; // pour avoir notre position

    const capitalizeFirstLetter = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }; //pour pouvoir garder la premier lettre en majuscule

    useEffect(() => {
      dispatch(setKey(realpathname[realpathname.length > 1 ? 1 : 0]));
    }, [realpathname]);

    return (
      <div className="flex justify-between items-center">
        <div>
          <div>
            <Breadcrumb separator=">">
              {realpathname.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                // const isLast = index === realpathname.length - 1;

                return index === realpathname.length - 1 ? (
                  <AnimateAppears>
                    <Breadcrumb.Item key={index}>
                      {name
                        ? capitalizeFirstLetter(name).replace(/-/gi, " ")
                        : ""}
                    </Breadcrumb.Item>
                  </AnimateAppears>
                ) : (
                  <Breadcrumb.Item key={index}>
                    <Link to={`${routeTo}`}>
                      {name
                        ? capitalizeFirstLetter(name).replace(/-/gi, " ")
                        : ""}
                    </Link>
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
          </div>
        </div>

        {pathnames.length > 1 ? (
          <AnimateAppears>
            <ATButton
              className="flex items-center"
              action={() => window.history.back()}
            >
              <MaterialIcon icon="arrow_back" />
              <span>Retour</span>
            </ATButton>
          </AnimateAppears>
        ) : (
          ""
        )}
      </div>
    );
  };

  return <> {BreadcrumbView()}</>;
}

export default BreadCrumb;
