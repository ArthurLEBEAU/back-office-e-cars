import {
  ATButton,
  AButton,
} from "@components/SharedComponents/AtomicComponents/Button";
import {
  ASInput,
  ATInput,
  AFileUpload
} from "@components/SharedComponents/AtomicComponents/Input";
import { useAddCarMutation } from "@redux/feature/services/carsSlice";
import { Form, Alert, notification, Row, Col } from "antd";
import { useEffect } from "react";

function FormCreateCars({ close }: any) {
  const [addCar, { isLoading, isError, error, isSuccess }]: any =
    useAddCarMutation();
  const Validate = async (formData: any) => {
    const formValue = {
      ...formData,
      image1:
        formData.image1 === undefined
          ? undefined
          : formData.image1?.file?.status === "removed"
          ? undefined
          : formData.image1.file,
          image2:
        formData.image2 === undefined
          ? undefined
          : formData.image2?.file?.status === "removed"
          ? undefined
          : formData.image2.file,
          image3:
        formData.image3 === undefined
          ? undefined
          : formData.image3?.file?.status === "removed"
          ? undefined
          : formData.image3.file,
          image4:
        formData.image4 === undefined
          ? undefined
          : formData.image4?.file?.status === "removed"
          ? undefined
          : formData.image4.file,
     }
     const getFormData = (formValuesAppend: any) =>
      Object.keys(formValuesAppend).reduce((formData: any, key) => {
        if (formValuesAppend[key] !== undefined) {
          formData.append(key, formValuesAppend[key]);
        }
        return formData;
      }, new FormData());
    const values = getFormData(formValue);
    try {
      await addCar(values).unwrap();
    } catch (err) {
      console.log(err)
    }
  };
  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Ajout effectué",
      description: "L'ajout de la voiture a été effectué",
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
        <Row>
        <Col span={24}>
            <ATInput
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer une marque",
                },
              ]}
              name={"brand"}
              type={"text"}
              label="Marque"
              error={
                error?.status === 422
                  ? error.data.errors.filter((err: any) => err.field === "name")
                  : null
              }
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <ATInput
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer un modèle",
                },
              ]}
              name={"model"}
              type={"text"}
              label="Modèle"
              error={
                error?.status === 422
                  ? error.data.errors.filter((err: any) => err.field === "name")
                  : null
              }
            />
          </Col>
          <Col span={12}>
            <ASInput
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer un moteur",
                },
              ]}
              name={"type"}
              label="Type"
              valueOption={[
                { id: "SUV", name: "SUV" },
                { id: "BERLIN", name: "BERLIN" },
                { id: "4X4", name: "4X4" },
              ]}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <ATInput
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer une année",
                },
              ]}
              name={"year"}
              type={"number"}
              label="Année"
              error={
                error?.status === 422
                  ? error.data.errors.filter((err: any) => err.field === "name")
                  : null
              }
            />
          </Col>
          <Col span={12}>
            <ASInput
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer un moteur",
                },
              ]}
              name={"motor"}
              label="Moteur"
              valueOption={[
                { id: "ELECTRIQUE", name: "ELECTRIQUE" },
                { id: "DIESEL", name: "DIESEL" },
                { id: "ESSENCE", name: "ESSENCE" },
                { id: "HYBRIDE", name: "HYBRIDE" },
              ]}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <ATInput
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer le kilométrage",
                },
              ]}
              name={"mileage"}
              type={"text"}
              label="Kilometrage"
              error={
                error?.status === 422
                  ? error.data.errors.filter((err: any) => err.field === "name")
                  : null
              }
            />
          </Col>
          <Col span={12}>
            <ASInput
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer une boite",
                },
              ]}
              name={"box"}
              label="Boite"
              valueOption={[
                { id: "AUTOMATIQUE", name: "AUTOMATIQUE" },
                { id: "MANUEL", name: "MANUEL" },
              ]}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <ATInput
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer un prix avec chaffeur",
                },
              ]}
              name={"price_with_driver"}
              type={"text"}
              label="Prix avec chaffeur"
              error={
                error?.status === 422
                  ? error.data.errors.filter((err: any) => err.field === "name")
                  : null
              }
            />
          </Col>
          <Col span={12}>
            <ATInput
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer un prix sans chauffeur",
                },
              ]}
              name={"price_no_driver"}
              type={"text"}
              label="Prix sans chaffeur"
              error={
                error?.status === 422
                  ? error.data.errors.filter((err: any) => err.field === "name")
                  : null
              }
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <AFileUpload
              placeholder="Cliquez pour charger"
              count={1}
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer au moins une image",
                },
              ]}
              error={
                error?.status === 422
                  ? error.data.errors.filter(
                    (err: any) => err.field === "photo"
                  )
                  : null
              }
              label="Image 1"
              name={"image1"}
            />
          </Col>
          <Col span={12}>
            <AFileUpload
              placeholder="Cliquez pour charger"
              count={1}
              error={
                error?.status === 422
                  ? error.data.errors.filter(
                    (err: any) => err.field === "photo"
                  )
                  : null
              }
              label="Image 2"
              name={"image2"}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <AFileUpload
              placeholder="Cliquez pour charger"
              count={1}
              error={
                error?.status === 422
                  ? error.data.errors.filter(
                    (err: any) => err.field === "photo"
                  )
                  : null
              }
              label="Image 3"
              name={"image3"}
            />
          </Col>
          <Col span={12}>
            <AFileUpload
              placeholder="Cliquez pour charger"
              count={1}
              error={
                error?.status === 422
                  ? error.data.errors.filter(
                    (err: any) => err.field === "photo"
                  )
                  : null
              }
              label="Image 4"
              name={"image4"}
            />
          </Col>
        </Row>

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
              description={"l'ajout de la voiture à échoué"}
              type="error"
            />
          ) : null}
        </div>
      </Form>
    </div>
  )
}


export default FormCreateCars;
