import {
  useGetExemplebyNameQuery,
  useGetExemplesQuery,
} from "@redux/feature/services/exampleService";
import { useSelector } from "react-redux";

interface Example {
  id: number;
  name: string;
  description: string;
  created_at: string;
}
export default function ExampleListController() {
  //Selector
  const paginate = useSelector(
    (state: any) => state.searchAndPaginate.paginate
  );
  const nameSearch = useSelector(
    (state: any) => state.searchAndPaginate.search
  );

  //block useGetZoneByNameQuery
  const skip = nameSearch === "" ? true : false;

  const {
    data = [],
    isFetching,
    isError,
    error,
  }: any = useGetExemplesQuery(paginate);

  const filteredListExemple: never[] =
    data &&
    data.map((item: Example) => ({
      id: item?.id,
      name: item?.name,
      description:
        item?.description === null ? "Aucune description" : item?.description,
      creation: !item?.created_at
        ? "Pas de date"
        : item?.created_at.substring(0, 10).split("-").reverse().join("/"),
    }));

  const params = {};
  //   data && data.meta;

  const {
    data: dataSearched = [],
    isFetching: isFetchingSearch,
    isError: isErrorSearched,
    error: errorSearched,
  }: any = useGetExemplebyNameQuery(nameSearch, { skip });

  const filteredListComiteDeBaseSearched: never[] = [];
  dataSearched &&
    dataSearched.map((item: Example) => ({
      id: item?.id,
      name: item?.name,
      description:
        item?.description === null ? "Aucune description" : item?.description,
      creation: !item?.created_at
        ? "Pas de date"
        : item?.created_at.substring(0, 10).split("-").reverse().join("/"),
    }));

  const DataList = skip
    ? filteredListExemple
    : filteredListComiteDeBaseSearched;
  const Loading = skip ? isFetching : isFetchingSearch;
  const Error = skip ? isError : isErrorSearched;
  const errorData = skip ? error : errorSearched;

  return {
    DataList,
    Loading,
    Error,
    errorData,
    params,
    skip,
  };
}
