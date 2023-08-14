import BodyExampleList from "@components/AppsComponents/ExamplesComponents/ExampleListComponent/BodyExampleList";
import HeaderExampleList from "@components/AppsComponents/ExamplesComponents/ExampleListComponent/HeaderExampleList";
import DefaultPageComponent from "@components/SharedComponents/SystemComponents/DefaultPageComponent";
const ExampleListPage = () => {
  return (
    <DefaultPageComponent
      header={<HeaderExampleList />}
      body={<BodyExampleList />}
    />
  );
};

export default ExampleListPage;
