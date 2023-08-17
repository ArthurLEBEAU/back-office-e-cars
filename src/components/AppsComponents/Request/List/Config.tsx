import AText from "@components/SharedComponents/AtomicComponents/Text";
import { useCancelRequestMutation, useConfirmRequestMutation } from "@redux/feature/services/requestSlice";
import { setSearch } from "@redux/feature/slices/search_paginate_slice";
import antdutils from "@utils/systemutils/antdutils";
import { Button, Col, Divider, Drawer, Input, notification, Popconfirm, Row, Space, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
export const RequestConfig: any = [
  {
    title: "Nom client",
    dataIndex: "client_name",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "name"),
  },
  {
    title: "Numéro client",
    dataIndex: "client_phone",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "client_phone"),
  },

  {
    title: "Model voiture",
    dataIndex: "car_model",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "client_email"),
  },
  {
    title: "Status",
    dataIndex: "state",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "state"),
    render: (
      _: any,
      record: {
        id: number;
        state: string;
      }
    ) => <Tag color={record.state === 'pending' ? 'magenta' : record.state === 'declined' ? 'geekblue' : 'green'}>{record.state === 'pending' ? 'En attente' : record.state === 'declined' ? 'Réfusé' : 'Accepté'}</Tag>,
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
      record: {
        id: number;
      }
    ) => <AccessFiche data={record} title={`Détail demande`} />,
  },
];

function AccessFiche({ data, title }: { data: any, title: string }) {
  const [cancelRequest, { isLoading }]: any =
    useCancelRequestMutation();
  const [confirmRequestApi]: any =
    useConfirmRequestMutation();
  const cancelRequestFunction = async () => {
    try {
      await cancelRequest(data.id).unwrap();
      notification.success({
        message: `Suppression succès`,
        description: "La requete a été annulé",
        placement: 'topRight',
      });
    } catch (err) {
      notification.error({
        message: "Erreur d'annulation",
        description: "Une erreur s'est produite. Veuillez réesayer plus tard",
        placement: 'topRight',
      });
    }
  };

  const confirmRequest = async (param: boolean) => {
    try {
      await confirmRequestApi({
        id: data.id,
        request: {
          isAccept: param,
        },
      }).unwrap();
      notification.success({
        message: `Status modifié`,
        description: "La status a bien été modifié",
        placement: 'topRight',
      });
    } catch (err) {
      notification.error({
        message: "Erreur de modification",
        description: "Une erreur s'est produite. Veuillez réesayer plus tard",
        placement: 'topRight',
      });
    }
  };
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <>
      <Space size="middle">
        <Button type="link" onClick={showDrawer}>
          Consulter
        </Button>
        <Popconfirm
          title="Voulez vous annuler la demande ?"
          onConfirm={cancelRequestFunction}
          okButtonProps={{ loading: isLoading }}
          okText="Annuler"
          cancelText="Non"
        >
          <Button type="link" danger>
            Annuler
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
        <div>
          <Space size={70} align="center">
            <AText bold>Demande</AText>
            {
              data.state === 'pending' ? (
                <>
                  <Button danger type="text" onClick={() => confirmRequest(false)}>
                    Refuser
                  </Button>
                  <Button type="primary" onClick={() => confirmRequest(true)}>
                    Accepter
                  </Button>
                </>
              ) : null
            }
          </Space>
          <Divider />
        </div>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Date de début</AText>
              <AText>{data.outOfDate}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Date de fin</AText>
              <AText>{data.comeBackDate}</AText>
            </div>
          </Col>

          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Option</AText>
              <AText>Avec chauffeur/ sans chauffeur</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Statut</AText>
              <Tag color={data.state === 'pending' ? 'magenta' : data.state === 'declined' ? 'geekblue' : 'green'}>{data.state === 'pending' ? 'En attente' : data.state === 'declined' ? 'Réfusé' : 'Accepté'}</Tag>
            </div>
          </Col>

        </Row>
        <Divider />
        <div>
          <AText bold>Voiture</AText>
          <Divider />
        </div>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Modèle</AText>
              <AText>{data.car.model}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Marque</AText>
              <AText>{data.car.brand}</AText>
            </div>
          </Col>

          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Année</AText>
              <AText>{data.car.year}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Moteur</AText>
              <AText>{data.car.motor}</AText>
            </div>
          </Col>

          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Type</AText>
              <AText>{data.car.type}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Kilométrage</AText>
              <AText>{data.car.mileage}</AText>
            </div>
          </Col>

          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Prix sans chauffeur </AText>
              <AText>{data.car.price_no_driver}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Prix avec chauffeur </AText>
              <AText>{data.car.price_with_driver}</AText>
            </div>
          </Col>
        </Row>
        <Divider />
        <div>
          <AText bold>Client</AText>
          <Divider />
        </div>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Nom</AText>
              <AText>{data.client.name}</AText>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Email</AText>
              <AText>{data.client.email}</AText>
            </div>
          </Col>

          <Col span={12}>
            <div className="space-y-1">
              <AText bold>Numéro</AText>
              <AText>{data.client.phone}</AText>
            </div>
          </Col>
        </Row>

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
