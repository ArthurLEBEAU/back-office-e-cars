import AText from "@components/SharedComponents/AtomicComponents/Text";
import { useDeleteCarMutation } from "@redux/feature/services/carsSlice";
import { setSearch } from "@redux/feature/slices/search_paginate_slice";
import antdutils from "@utils/systemutils/antdutils";
import { Button, Drawer, Input, Popconfirm, Space, notification } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FormUpdateCars from "../Form/Update";

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
    dataIndex: "Régions",
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
        <div className="px-10 mb-3">
          <span className="font-bold">Modèle : </span> {data.model}
        </div>
        <div className="px-10 mb-3">
          <span className="font-bold">Marque : </span> {data.brand}
        </div>
        <div className="px-10 mb-3">
          <span className="font-bold">Année : </span> {data.year}
        </div>
        <div className="px-10 mb-3">
          <span className="font-bold">Moteur : </span> {data.motor}
        </div>
        <div className="px-10 mb-3">
          <span className="font-bold">Type : </span> {data.type}
        </div>
        <div className="px-10 mb-3">
          <span className="font-bold">Kilométrage : </span> {data.mileage}
        </div>
        <div className="px-10 mb-3">
          <span className="font-bold">Prix sans chauffeur : </span> {data.price_no_driver}
        </div>
        <div className="px-10 mb-3">
          <span className="font-bold">Prix avec chauffeur : </span> {data.price_with_driver}
        </div>
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
