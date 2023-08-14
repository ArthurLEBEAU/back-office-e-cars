import {
    ATButton,
    AButton,
  } from "@components/SharedComponents/AtomicComponents/Button";
  import {
    ATArea,
    ATInput,
  } from "@components/SharedComponents/AtomicComponents/Input";
import { useAddExempleMutation } from "@redux/feature/services/exampleService";
  import { Form, Alert, notification } from "antd";
  import { useEffect } from "react";
  
  function CreateExempleComponent({ close }: any) {
    const [addExemple, { isLoading, isError, error, isSuccess }]: any =
    useAddExempleMutation();
    const Validate = async (formData: any) => {
        try {
          await addExemple({
            name: formData.name,
            surface: formData.surface,
            description: formData.description,
          }).unwrap();
        } catch (err) {}
      };
  
    
   
  
    const openNotificationWithIcon = () => {
      notification["success"]({
        message: "Ajout effectué",
        description: "L'ajout de la zone a été effectué",
      });
    };
  
    useEffect(() => {
      if (isSuccess) {
        close();
        openNotificationWithIcon();
      }
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);

    return (
      <div>
        <Form layout="vertical" onFinish={Validate}>
          <ATInput
            rules={[
              {
                required: true,
                message: "Veuillez entrer un nom pour l'exemple",
              },
            ]}
            name={"name"}
            type={"text"}
            label="Nom"
            error={
              error?.status === 422
                ? error.data.errors.filter((err: any) => err.field === "name")
                : null
            }
          />
          <ATArea name={"description"} label="Description" />
          <div className="flex items-center justify-end space-x-8 pt-5">
            <ATButton
              htmlType="submit"
              icon="cancel"
              className="items-center flex"
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
                description={"l'ajout de la zone à échoué"}
                type="error"
              />
            ) : null}
          </div>
        </Form>
      </div>
    ) }
          
  
  export default CreateExempleComponent;
  