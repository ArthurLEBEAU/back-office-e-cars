import {
  AButton,
  ATButton,
} from "@components/SharedComponents/AtomicComponents/Button";
import {
  ATArea,
  ATInput,
} from "@components/SharedComponents/AtomicComponents/Input";
import {
  useGetExemplebyIdQuery,
  useUpdateExempleMutation,
} from "@redux/feature/services/exampleService";
import { Alert, Form, notification } from "antd";
import { useEffect } from "react";

function EditZoneComponent({ id, close }: any) {
  const result: any = useGetExemplebyIdQuery(id);

  const { data } = result;
  const [editZone, { isLoading, isError, error, isSuccess }]: any =
    useUpdateExempleMutation();

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Modification effectué",
      description: "La modification de la zone a été effectué",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      close();
      openNotificationWithIcon();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const Validate = async (formData: any) => {
    try {
      await editZone({
        id: id,
        name: formData.name !== data.name ? formData.name : undefined,
        description:
          formData.description !== data.description
            ? formData.description
            : undefined,
      }).unwrap();
    } catch (err) {}
  };

  return (
    <div>
      <Form layout="vertical" onFinish={Validate}>
        <ATInput
          initialValue={data?.name}
          name={"name"}
          type={"text"}
          stateForm={id}
          label="Nom"
          error={
            error?.status === 422
              ? error.data.errors.filter((err: any) => err.field === "name")
              : null
          }
        />

        <ATArea
          initialValue={data?.description}
          name={"description"}
          stateForm={id}
          label="Description"
        />
        <div className="flex items-center justify-end pt-5 space-x-8">
          <ATButton
            htmlType="submit"
            icon="cancel"
            className="flex items-center"
            action={close}
          >
            Annuler
          </ATButton>
          <AButton htmlType="submit" loading={isLoading} icon="save">
            Enregistrer
          </AButton>
        </div>

        <div className="mt-5">
          {isError && error?.status !== 422 ? (
            <Alert
              message="Echec"
              description={"la modification de la zone à échoué"}
              type="error"
            />
          ) : null}
        </div>
      </Form>
    </div>
  );
}

export default EditZoneComponent;
