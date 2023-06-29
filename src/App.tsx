import PageHeader from "./PageHeader/PageHeader";
import PlaceEntry from "./PlaceEntry/PlaceEntry";
import PageFooter from "./PageFooter/PageFooter";

function App(): JSX.Element {
  return (
    <>
      <PageHeader heading={"I was there:"} />

      <PlaceEntry
        title="Chureito Pagoda"
        city="Fujiyoshida"
        imageURL="./img/fuji-pagoda.png"
        location="#"
        description="Lorem ipsum"
      />

      <PageFooter />
    </>
  );
}

export default App;
