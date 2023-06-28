import PageHeader from "./PageHeader/PageHeader"
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
      
      <PlaceEntry
        title = "In the heart of Scotland"
        name = "Edinburgh"
        country = "Scotland"
        imageURL = "https://images.pexels.com/photos/2957060/pexels-photo-2957060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        location = "https://goo.gl/maps/efYFgKNWvx2Rwxic7"
        description = "I worked there in the summer of 2015 and 2016, and I fell in love with the colors of Edinburgh. Something about this city is just magical."
      />

      <PlaceEntry
        title = "Tokyo Metropolis"
        name = "Tokyo"
        country = "Japan"
        imageURL = "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        location = "https://goo.gl/maps/18kTedr1fTRyEQMW6"
        description = "My most recent trip! This is where I beat my fear of heights (kinda)."
      />

    </>
  )
}

export default App;