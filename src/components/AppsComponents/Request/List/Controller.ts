import { Car } from "@components/AppsComponents/Cars/List/Controller";
import { useGetRequestQuery } from "@redux/feature/services/requestSlice";
import { estimateTarif, TarifEstimate } from "@utils/functions/estimate-tarif";

interface Client {
  name: string;
  email: string;
  phone: string;
}
interface Request {
  id: number;
  outOfDate: string;
  comeBackDate: string;
  isDriver: boolean;
  isDelivery: boolean;
  isGoOutCity: boolean;
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
  }: any = useGetRequestQuery(null, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  function transformDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Les mois vont de 0 à 11, donc on ajoute 1
    const year = date.getUTCFullYear();

    const formattedDate = `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year}`;
    return formattedDate;
  }

  const filteredList: never[] =
    data &&
    data.map((item: Request) => {
      const dateOutOfDate = transformDate(item?.outOfDate);
      const dateComeBackDate = transformDate(item?.comeBackDate);
      const interfaceTarif: TarifEstimate = {
        endDate: item?.comeBackDate,
        startDate: item?.outOfDate,
        isDelivery: item?.isDelivery,
        isGoOutCity: item?.isGoOutCity,
        isDriver: item?.isDriver,
        priceDriver: item?.car.price_with_driver,
        priceNoDriver: item?.car.price_no_driver,
      };
      return {
        id: item?.id,
        outOfDate: dateOutOfDate,
        client_phone: item?.client.phone,
        isGoOutCity: item?.isGoOutCity,
        isDelivery: item?.isDelivery,
        isDriver: item?.isDriver,
        client_name: item?.client.name,
        car_model: item?.car.model,
        comeBackDate: dateComeBackDate,
        tarif: estimateTarif(interfaceTarif),
        state: item?.state,
        client: item?.client,
        car: item?.car,
      };
    });

  return {
    filteredList,
    isFetching,
    isError,
    error,
  };
}
