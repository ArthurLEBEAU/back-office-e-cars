import Body from "@components/AppsComponents/Cars/List/Body";
import Header from "@components/AppsComponents/Cars/List/Header";
import DefaultPageComponent from "@components/SharedComponents/SystemComponents/DefaultPageComponent";
const RequestListPage = () => {
  return (
    <DefaultPageComponent
      header={<Header />}
      body={<Body />}
    />
  );
};

export default RequestListPage;
