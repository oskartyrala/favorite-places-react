import PageHeader from "./PageHeader"
import PlaceEntry from "./PlaceEntry"

function App(): JSX.Element {
  return (
    <>
      <PageHeader 
        heading = {"Oskar's Favourite Places"}
      />

      <PlaceEntry
      title = "Title placeholder"
      name = "Name placeholder"
      country = "Country placeholder"
      imageURL = "#"
      location = "#"
      description = "Description placeholder"
      />
      
    </>
  )
}

export default App;