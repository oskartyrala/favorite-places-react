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
        imageURL="/img/fuji-pagoda.png"
        location="#"
        description="Lorem ipsum"
      />

      <PlaceEntry
        title="Guitar Street"
        city="Tokyo"
        imageURL="/img/guitar-street.png"
        location="#"
        description="Lorem ipsum"
      />

      <PlaceEntry
        title="Koishikawa Korakuen Gardens"
        city="Tokyo"
        ward='Bunkyō'
        imageURL="/img/koishikawa-korakuen-gardens.png"
        location="#"
        description="Lorem ipsum"
      />

      <PlaceEntry
        title="Bamboo Grove"
        city="Kyoto"
        imageURL="/img/kyoto-bamboo-grove.png"
        location="#"
        description="Lorem ipsum"
      />

      <PlaceEntry
        title="Fushimi Inari Pathway"
        city="Kyoto"
        imageURL="/img/kyoto-fushimi-inari-pathway.png"
        location="#"
        description="Lorem ipsum"
      />

      <PlaceEntry
        title="Meiji Jingu Forest"
        city="Tokyo"
        imageURL="/img/meiji-jingu.png"
        location="#"
        description="Lorem ipsum"
      />

      <PlaceEntry
        title="Nara Park"
        city="Nara"
        imageURL="/img/nara-park.png"
        location="#"
        description="Lorem ipsum"
      />

      <PlaceEntry
        title="Tokyo Tower"
        city="Tokyo"
        imageURL="/img/tokyo-tower-view.png"
        location="#"
        description="Lorem ipsum"
      />

      <PageFooter />
    </>
  );
}

export default App;