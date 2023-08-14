import { ATButton } from "@components/SharedComponents/AtomicComponents/Button";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import MaterialIcon from "@components/SharedComponents/Icons/MaterialIcons";
import { useDeleteExempleMutation } from "@redux/feature/services/exampleService";
import { message, Modal } from "antd";
import React from "react";



function ModalDeleteExemple({ id, button, close }: any) {
  const [deleteZone, { isLoading, isSuccess, isError }] =
  useDeleteExempleMutation();
  const [open, setOpen] = React.useState(false);
  const OpenModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const Supprimer = async () => {
    try {
      await deleteZone(id).unwrap();
      close();
    } catch (err) {
      console.error("Failed to delete the post", err);
    }
  };
  return (
    <>
      <ATButton
        icon={button ? "delete" : undefined}
        action={OpenModal}
        type="danger"
      >
        {button ? <>Supprimer</> : <MaterialIcon icon="delete" />}
      </ATButton>

      <Modal
        title="Suppression d'un dossier"
        footer={null}
        visible={open}
        onCancel={handleCancel}
      >
        <>
          <AText>Voulez-vous vraiment supprimer cette zone ?</AText>
          <div className="flex items-center justify-end mt-5 space-x-5">
            <ATButton action={handleCancel}>Annuler</ATButton>
            <ATButton loading={isLoading} action={Supprimer} type="danger">
              Supprimer
            </ATButton>
          </div>
          {isSuccess &&
            message.success({
              content: "La zone a été supprimé avec succès",
              key: 1,
            })}
          {isError &&
            message.error({ content: "Une erreur est survenue", key: 1 })}
        </>
      </Modal>
    </>
  );
}

export default ModalDeleteExemple;
