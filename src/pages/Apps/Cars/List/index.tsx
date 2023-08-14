import Body from "@components/AppsComponents/Cars/List/Body";
import Header from "@components/AppsComponents/Cars/List/Header";
import DefaultPageComponent from "@components/SharedComponents/SystemComponents/DefaultPageComponent";
const CarsListPage = () => {
  return (
    <DefaultPageComponent
      header={<Header />}
      body={<Body />}
    />
  );
};

export default CarsListPage;
