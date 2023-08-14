import EmptyComponent from "@components/SharedComponents/SystemComponents/EmptyComponent";
import { ConfigProvider, Table } from "antd";
import { ListConfigCars } from "./Config";
import Controller from "./Controller";

function BodyExampleList() {
  const { filteredList, isFetching, isError, error }: any =
    Controller();
  const EmptyTable = () => {
    return <EmptyComponent error={error} />;
  };

  return (
    <ConfigProvider renderEmpty={EmptyTable}>
      <Table
        columns={ListConfigCars}
        dataSource={isError ? null : filteredList}
        loading={isFetching}
        rowKey="id"
        footer={() => (
          <div style={{ textAlign: "left" }}>
            {isFetching ? (
              <>Loading...</>
            ) : isError ? null : (
              <>
                <b>Resultats : </b>
                {filteredList.length}
              </>
            )}
          </div>
        )}

      />
    </ConfigProvider>
  );
}

export default BodyExampleList;
