import AText from "@components/SharedComponents/AtomicComponents/Text";
import { useDeleteCarMutation } from "@redux/feature/services/carsSlice";
import { setSearch } from "@redux/feature/slices/search_paginate_slice";
import antdutils from "@utils/systemutils/antdutils";
import { Button, Drawer, Input, Popconfirm, Space, notification, Row, Col, Carousel, Image } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FormUpdateCars from "../Form/Update";


const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const ListConfigCars: any = [
  {
    title: "Modèle",
    dataIndex: "model",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "model"),
  },

  {
    title: "Marque",
    dataIndex: "brand",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "brand"),
  },
  {
    title: "Année",
    dataIndex: "year",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "year"),
  },
  {
    title: "Moteur",
    dataIndex: "motor",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "motor"),
  },
  {
    title: "Kilometrage",
    dataIndex: "mileage",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "mileage"),
  },
  {
    title: "Boite",
    dataIndex: "box",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "box"),
  },
  {
    title: "Prix avec chaffeur",
    dataIndex: "price_with_driver",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "price_with_driver"),
  },
  {
    title: "Prix sans chaffeur",
    dataIndex: "price_no_driver",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "price_no_driver"),
  },

  {
    className: "flex items-center justify-center",
    title: (_: any, elm: any) => (
      <div className="w-64 text-center">
        <AText>Actions</AText>
      </div>
    ),
    dataIndex: "Actions",
    render: (
      _: any,
      record: any
    ) => <AccessFiche data={record} title={`Détail voiture`} />,
  },
];

function AccessFiche({ data, title }: { data: any, title: string }) {
  const [deleteCar, { isLoading }]: any =
    useDeleteCarMutation();
  const deletedCar = async () => {
    try {
      await deleteCar(data.id).unwrap();
      notification.success({
        message: `Suppression succès`,
        description: "La voiture a été supprimée",
        placement: 'topRight',
      });
    } catch (err) {
      notification.error({
        message: `Erreur de suppression`,
        description: "Une erreur s'est produite. Veuillez réesayer plus tard",
        placement: 'topRight',
      });
    }
  };
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onCloseUpdate = () => {
    setVisibleUpdate(false);
  };
  const showDrawerUpdate = () => {
    setVisibleUpdate(true);
  };

  return (
    <>
      <Space size="middle">
        <Button type="link" onClick={showDrawer}>
          Consulter
        </Button>
        <Button type="link" onClick={showDrawerUpdate}>
          Modifier
        </Button>
        <Popconfirm
          title="Voulez vous supprimer ce véhicule ?"
          onConfirm={deletedCar}
          okButtonProps={{ loading: isLoading }}
          okText="Supprimer"
          cancelText="Non"
        >
          <Button type="link" danger>
            Supprimer
          </Button>
        </Popconfirm>
      </Space>
      <Drawer
        width={600}
        closable={true}
        placement="right"
        onClose={onClose}
        open={visible}
        destroyOnClose
        key={'consulter'}
        title={
          <AText size="base+3" bold>
            {title}
          </AText>
        }
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Modèle</AText>
              <AText>{data.model}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Marque</AText>
              <AText>{data.brand}</AText>
            </div>
          </Col>

          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Année</AText>
              <AText>{data.year}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Moteur</AText>
              <AText>{data.motor}</AText>
            </div>
          </Col>

          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Type</AText>
              <AText>{data.type}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Kilométrage</AText>
              <AText>{data.mileage}</AText>
            </div>
          </Col>

          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Prix sans chauffeur </AText>
              <AText>{data.price_no_driver}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Prix avec chauffeur </AText>
              <AText>{data.price_with_driver}</AText>
            </div>
          </Col>
        </Row>
        <div className="mt-5">
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <Image
                  width={200}
                  src={data.image1}
                  style={{ marginTop: '10px' }}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  width={200}
                  src={data.image2}
                  style={{ marginTop: '10px' }}
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}><Image
                width={200}
                src={data.image3}
                style={{ marginTop: '10px' }}
              /></h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  width={200}
                  src={data.image4}
                  style={{ marginTop: '10px' }}
                />
              </h3>
            </div>
          </Carousel>
        </div>

      {/* <div className="flex items-center justify-center space-x-8">
        <ModalDeleteExemple close={() => console.log('dd')} id={data.id} button />
        <ModalDeleteExemple close={() => console.log('dd')} id={data.id} button />
      </div> */}

      </Drawer>
      <Drawer
        width={600}
        closable={true}
        placement="right"
        key={'update'}
        onClose={onCloseUpdate}
        open={visibleUpdate}
        maskClosable={false}
        destroyOnClose
        title={
          <AText size="base+3" bold>
            Modification de voiture
          </AText>
        }
      >
        <div className=" px-12">
          <FormUpdateCars close={onCloseUpdate} car={data} />
        </div>
      </Drawer>
    </>
  );
}

const SearchAction = () => {
  const dispatch = useDispatch();
  const handleSearch = (val: string) => {
    dispatch(setSearch(val));
  };

  return (
    <Input
      className="w-64"
      type="text"
      placeholder="Rechercher une voiture"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchAction;
