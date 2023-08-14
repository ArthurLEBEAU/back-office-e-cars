import { AButton } from "@components/SharedComponents/AtomicComponents/Button";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import { Drawer } from "antd";
import { Fragment, useState } from "react";
import FormCars from "../Form/Create";

function HeaderCarList() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <Fragment>
      <div>
        <div className="flex items-center justify-between  ">
          <AText
            bold
            size="high+2"
          >
            Liste des voitures
          </AText>
          <AButton action={showDrawer} icon="add">
            Ajouter une voiture
          </AButton>
        </div>
      </div>

      <Drawer
        width={600}
        closable={true}
        placement="right"
        onClose={onClose}
        open={visible}
        maskClosable={false}
        destroyOnClose
        title={
          <AText size="base+3" bold>
            Ajout de voiture
          </AText>
        }
      >
        <div className=" px-12">
          <FormCars close={onClose} />
        </div>
      </Drawer>
    </Fragment>
  );
}

export default HeaderCarList;
