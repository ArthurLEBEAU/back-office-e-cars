import {
  ATButton,
  AButton,
} from "@components/SharedComponents/AtomicComponents/Button";
import {
  ASInput,
  ATInput,
  AFileUpload
} from "@components/SharedComponents/AtomicComponents/Input";
import { useEditCarMutation } from "@redux/feature/services/carsSlice";
import { Form, Alert, notification, Row, Col } from "antd";
import { useEffect } from "react";

function FormUpdateCars({ close, car }: any) {
  const [editCar, { isLoading, isError, error, isSuccess }]: any =
    useEditCarMutation();

  const Validate = async (formData: any) => {

    const formValue = {
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
      model: formData.model !== car.model ? formData.model : undefined,
      brand: formData.brand !== car.brand ? formData.brand : undefined,
      year: formData.year !== car.year ? formData.year : undefined,
      motor: formData.motor !== car.motor ? formData.motor : undefined,
      type: formData.type !== car.type ? formData.type : undefined,
      mileage: formData.mileage !== car.mileage ? formData.mileage : undefined,
      box: formData.box !== car.box ? formData.box : undefined,
      price_with_driver: formData.price_with_driver !== car.price_with_driver ? formData.price_with_driver : undefined,
      price_no_driver: formData.price_no_driver !== car.price_no_driver ? formData.price_no_driver : undefined,

    };

    const getFormData = (formValuesAppend: any) =>
      Object.keys(formValuesAppend).reduce((formData: any, key) => {
        if (formValuesAppend[key] !== undefined) {
          formData.append(key, formValuesAppend[key]);
        }
        return formData;
      }, new FormData());
    const values = getFormData(formValue);

    try {
      await editCar({
        id: car.id,
        car: values,
      }).unwrap();
    } catch (err) { }
  };
  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Modification effectué",
      description: "La modification de la voiture a été effectué",
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
              stateForm={car.id}
              initialValue={car?.brand}
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
              stateForm={car.id}
              initialValue={car?.model}
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
              stateForm={car.id}
              initialValue={car?.type}
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
              stateForm={car.id}
              initialValue={car?.year}
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
              stateForm={car.id}
              initialValue={car?.motor}
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
              stateForm={car.id}
              initialValue={car?.mileage}
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
              stateForm={car.id}
              initialValue={car?.box}
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
              stateForm={car.id}
              initialValue={car?.price_with_driver}
              type={"number"}
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
              stateForm={car.id}
              initialValue={car?.price_no_driver}
              type={"number"}
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
              stateForm={car.id}
              initialValue={car?.image1}
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
              stateForm={car.id}
              initialValue={car?.image2}
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
              stateForm={car.id}
              initialValue={car?.image3}
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
              stateForm={car.id}
              initialValue={car?.image4}
              count={1}
              error={
                error?.status === 422
                  ? error.data.errors.filter(
                    (err: any) => err.field === "image4"
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
            Modifier
          </AButton>
        </div>

        <div className="mt-5">
          {isError && error?.status !== 422 ? (
            <Alert
              message="Echec"
              description={"La modification de la voiture à échoué"}
              type="error"
            />
          ) : null}
        </div>
      </Form>
    </div>
  )
}


export default FormUpdateCars;
