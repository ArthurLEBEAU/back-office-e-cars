import { AButton } from "@components/SharedComponents/AtomicComponents/Button";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import { Drawer } from "antd";
import { useState } from "react";
import CreateExempleComponent from "../ExampleFormComponent/CreateExempleComponent";

function HeaderExampleList() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between  ">
          <AText
            bold
            size="high+2"
            tooltip="Ceci est un examle de liste vous pouvez l'utiliser pour recalquer sur d'autre selon vos envies"
          >
            Example de liste
          </AText>
          <AButton action={showDrawer} icon="add">
            Creer un item
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
            Formulaire d'exemple
          </AText>
        }
      >
        <div className=" px-12">
          <CreateExempleComponent close={onClose} />
        </div>
      </Drawer>
    </>
  );
}

export default HeaderExampleList;
