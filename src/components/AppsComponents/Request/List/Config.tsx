import { ATButton } from "@components/SharedComponents/AtomicComponents/Button";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import { setSearch } from "@redux/feature/slices/search_paginate_slice";
import antdutils from "@utils/systemutils/antdutils";
import { Drawer, Input, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const ExampleListConfig: any = [
  {
    title: "Nom",
    dataIndex: "name",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "name"),

    render: (
      _: any,
      record: {
        name: string;
        description: string;
        email: string;
        id: any;
      }
    ) => (
      <AccessFiche
        id={record.id}
        name={record.name}
        description={record.description}
      />
    ),
  },

  {
    title: "Description",
    dataIndex: "description",
    className: "w-64",
    sorter: (a: any, b: any) => antdutils.antdTableSorter(a, b, "description"),
  },

  {
    className: "flex items-center justify-center",
    title: (_: any, elm: any) => (
      <div>
        <SearchAction />
      </div>
    ),
    dataIndex: "Régions",
    render: (
      _: any,
      record: {
        id: number;
      }
    ) => <AccessFiche accessbutton id={record.id} />,
  },
];

function AccessFiche({ id, name, description, accessbutton }: any) {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <>
      {accessbutton ? (
        <div className="flex items-center justify-center">
          <ATButton action={showDrawer}>Consulter</ATButton>
        </div>
      ) : (
        <div
          onClick={showDrawer}
          className="flex  cursor-pointer flex-col space-y-3"
        >
          <AText bold>{name}</AText>

          <Typography.Paragraph
            ellipsis={true ? { rows: 2, tooltip: description } : false}
          >
            <AText thin> {description}</AText>
          </Typography.Paragraph>
        </div>
      )}

      <Drawer
        width={600}
        closable={true}
        placement="right"
        onClose={onClose}
        open={visible}
        destroyOnClose
        title={
          <AText size="base+3" bold>
            Fiche zone
          </AText>
        }
      >
        <div className="px-12 ">
         ttt
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
