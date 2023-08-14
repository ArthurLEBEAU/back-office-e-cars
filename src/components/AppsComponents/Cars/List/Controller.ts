import { useGetCarsQuery } from "@redux/feature/services/carsSlice";

interface Car {
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
}
export default function ControllerListCars() {
  const { data = [], isFetching, isError, error }: any = useGetCarsQuery(null);

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
      price_with_driver: item?.price_with_driver,
      price_no_driver: item?.price_no_driver,
    }));


  return {
    filteredList,
    isFetching,
    isError,
    error,
  };
}
