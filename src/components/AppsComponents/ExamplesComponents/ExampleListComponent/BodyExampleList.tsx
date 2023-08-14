import EmptyComponent from "@components/SharedComponents/SystemComponents/EmptyComponent";
import { setPaginate } from "@redux/feature/slices/search_paginate_slice";
import { ConfigProvider, Table } from "antd";
import { useDispatch } from "react-redux";
import { ExampleListConfig } from "./ExampleListConfig";
import ExampleListController from "./ExampleListController";

function BodyExampleList() {
  const { DataList, Loading, Error, errorData, params, skip }: any =
    ExampleListController();
  const dispatch = useDispatch();
  const EmptyTable = () => {
    return <EmptyComponent error={errorData} />;
  };

  return (
    <ConfigProvider renderEmpty={EmptyTable}>
      <Table
        columns={ExampleListConfig}
        dataSource={Error ? null : DataList}
        loading={Loading}
        rowKey="id"
        footer={() => (
          <div style={{ textAlign: "left" }}>
            {Loading ? (
              <>Loading...</>
            ) : Error ? null : (
              <>
                <b>Resultats : </b>

                {!skip
                  ? DataList.length
                  : params.current_page == null
                  ? "1- " +
                    Math.ceil(params.total / params.per_page) +
                    params.total
                  : params.current_page +
                    " - " +
                    Math.ceil(params.total / params.per_page) +
                    " de " +
                    params.total}
              </>
            )}
          </div>
        )}
        pagination={
          skip
            ? Loading
              ? undefined
              : Error
              ? undefined
              : {
                  pageSize: 10,
                  total: params?.total,
                  showSizeChanger: false,
                  onChange: (page: any) => dispatch(setPaginate(page)),
                }
            : {
                pageSize: 10,
              }
        }
      />
    </ConfigProvider>
  );
}

export default BodyExampleList;
