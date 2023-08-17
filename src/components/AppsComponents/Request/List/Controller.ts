import { Car } from "@components/AppsComponents/Cars/List/Controller";
import { useGetRequestQuery } from "@redux/feature/services/requestSlice";

interface Client {
  name: string;
  email: string;
  phone: string;
}
interface Request {
  id: number;
  outOfDate: string;
  comeBackDate: string;
  state: string;
  client: Client;
  car: Car;
}
export default function ControllerListRequest() {
  const {
    data = [],
    isFetching,
    isError,
    error,
  }: any = useGetRequestQuery(null);

  const filteredList: never[] =
    data &&
    data.map((item: Request) => ({
      id: item?.id,
      outOfDate: item?.outOfDate,
      client_phone: item?.client.phone,
      client_name: item?.client.name,
      car_model: item?.car.model,
      comeBackDate: item?.comeBackDate,
      state: item?.state,
      client: item?.client,
      car: item?.car,
    }));

  return {
    filteredList,
    isFetching,
    isError,
    error,
  };
}
