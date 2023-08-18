import { useGetCarsQuery } from "@redux/feature/services/carsSlice";
import { formatAmountToFCFA } from "@utils/functions/transform-money";

export interface Car {
  id: number;
  model: string;
  brand: string;
  year: string;
  motor: string;
  type: string;
  mileage: string;
  box: string;
  price_with_driver: number;
  price_no_driver: number;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}
export default function ControllerListCars() {
  const {
    data = [],
    isFetching,
    isError,
    error,
  }: any = useGetCarsQuery(null, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  const filteredList: never[] =
    data &&
    data.map((item: Car) => ({
      id: item?.id,
      model: item?.model,
      brand: item?.brand,
      year: item?.year,
      type: item?.type,
      motor: item?.motor,
      mileage: item?.mileage,
      box: item?.box,
      price_with_driver: formatAmountToFCFA(item?.price_with_driver),
      price_no_driver: formatAmountToFCFA(item?.price_no_driver),
      image1: item?.image1,
      image2: item?.image2,
      image3: item?.image3,
      image4: item?.image4,
    }));

  return {
    filteredList,
    isFetching,
    isError,
    error,
  };
}
