import PageHeader from "./PageHeader"
import PlaceEntry from "./PlaceEntry/PlaceEntry"

function App(): JSX.Element {
  return (
    <>
      <PageHeader 
        heading = {"Oskar's Favourite Places"}
      />

      <PlaceEntry
      title = "The capital of Andalusia"
      name = "Sevilla"
      country = "Spain"
      imageURL = "https://images.pexels.com/photos/5470587/pexels-photo-5470587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      location = "https://goo.gl/maps/8NgWhwFxYtcaZshx8"
      description = "I studied there for 4 months in 2017 and loved it! I've been meaning to go back ever since, but for one reason or another never did."
      />
      
    </>
  )
}

export default App;