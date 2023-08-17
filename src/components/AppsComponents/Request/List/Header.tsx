import AText from "@components/SharedComponents/AtomicComponents/Text";
import { Fragment } from "react";

function HeaderCarList() {

  return (
    <Fragment>
      <div>
        <div className="flex items-center justify-between  ">
          <AText
            bold
            size="high+2"
          >
            Liste des requêtes
          </AText>

        </div>
      </div>
    </Fragment>
  );
}

export default HeaderCarList;
