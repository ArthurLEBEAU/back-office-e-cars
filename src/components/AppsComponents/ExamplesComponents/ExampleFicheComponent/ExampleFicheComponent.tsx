import { AButton } from "@components/SharedComponents/AtomicComponents/Button";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import Loading from "@components/SharedComponents/SystemComponents/Loading";
import { useGetExemplebyIdQuery } from "@redux/feature/services/exampleService";
import Drawer from "antd/es/drawer";
import { useState } from "react";
import EditZoneComponent from "../ExampleFormComponent/EditExempleComponent";
import ModalDeleteExemple from "./SubComponents/ModalDeleteExemple";

function ExampleFicheComponent({ id, close }: any) {
  const result: any = useGetExemplebyIdQuery(id);

  const { data, isError } = result;

  return data ? (
    <div className="flex flex-col space-y-5">
      <div className="space-y-3">
        <AText bold>Nom</AText>
        <AText>{data?.name}</AText>
      </div>

      {/* <div className="space-y-3">
        <AText bold>Date de naissance</AText>
        <AText>
          {data?.created_at.substring(0, 10).split("-").reverse().join("/")}
        </AText>
      </div> */}
      <div className="space-y-3">
        <AText bold>Description</AText>
        <AText>{data?.description}</AText>
      </div>

      <div className="flex items-center justify-end space-x-8">
        <ModalDeleteExemple close={() => close()} id={id} button />
        <AccessFicheModification id={id} />
      </div>
    </div>
  ) : isError ? (
    <>Une erreur est survenue</>
  ) : (
    <Loading />
  );
}

function AccessFicheModification({ id }: any) {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <>
      <AButton
        className="flex -space-y-0.5 items-center"
        action={showDrawer}
        icon="edit_square"
      >
        Modifier
      </AButton>

      <Drawer
        width={600}
        closable={true}
        placement="right"
        onClose={onClose}
        open={visible}
        destroyOnClose
        title={
          <AText size="base+3" bold>
            Modifier militant
          </AText>
        }
      >
        <div className="px-12 ">
          <EditZoneComponent close={() => onClose()} id={id} />
        </div>
      </Drawer>
    </>
  );
}

export default ExampleFicheComponent;
