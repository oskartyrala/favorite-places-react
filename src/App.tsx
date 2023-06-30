import PageHeader from "./PageHeader/PageHeader";
import PlaceEntry from "./PlaceEntry/PlaceEntry";
import PageFooter from "./PageFooter/PageFooter";

function App(): JSX.Element {
  return (
    <>
      <PageHeader
        heading={
          "Japan Explored: Discover the Delights of My Favorite Must-See Destinations Across the Land of the Rising Sun!"
        }
      />

      <PlaceEntry
        title="Meiji Jingu Forest"
        city="Tokyo"
        ward="Shibuya"
        imageURL="/img/meiji-jingu.png"
        location="https://goo.gl/maps/51omfaTTKcmwsTmm8"
        description="The forest surrounding Meiji Jingu is stunningly beautiful, with its lush greenery, tranquil ambiance, and enchanting wildlife."
      />

      <PlaceEntry
        title="Chureito Pagoda"
        city="Fujiyoshida"
        imageURL="/img/fuji-pagoda.png"
        location="https://goo.gl/maps/N1wXyJh4oSMDv3t58"
        description="The view of Mount Fuji from Chureito Pagoda is breathtaking, with the iconic mountain majestically rising above cherry blossoms and picturesque landscapes."
      />

      <PlaceEntry
        title="Fushimi Inari Pathway"
        city="Kyoto"
        imageURL="/img/kyoto-fushimi-inari-pathway.png"
        location="https://goo.gl/maps/rtTAKXKWor6rHsJv8"
        description="The forest surrounding Fushimi Inari Pathway is awe-inspiring at night, with softly glowing lanterns casting a mystical ambiance amidst the torii gates."
      />

      <PlaceEntry
        title="Koishikawa Korakuen Gardens"
        city="Tokyo"
        ward="Bunkyō"
        imageURL="/img/koishikawa-korakuen-gardens.png"
        location="https://goo.gl/maps/ihv9egXVDTTKSp3n7"
        description="Koishikawa Korakuen Gardens offer a perfect breakfast setting, combining serene beauty, lush landscapes, and tranquil water features for a peaceful morning experience."
      />

      <PlaceEntry
        title="Tokyo Tower"
        city="Tokyo"
        ward="Minato"
        imageURL="/img/tokyo-tower-view.png"
        location="https://goo.gl/maps/BeC2cmbxks7mBSVR8"
        description="Despite a fear of heights, the view from Tokyo Tower is truly worth it, offering an awe-inspiring panorama of Tokyo's captivating skyline"
      />

      <PlaceEntry
        title="Guitar Street"
        city="Tokyo"
        ward="Chiyoda"
        imageURL="/img/guitar-street.png"
        location="https://goo.gl/maps/12CnWg2io6LedsGi7"
        description="The guitar street in Tokyo is a haven for bass players and other musicians, offering a wide array of shops and instruments catering to their musical needs and passions."
      />

      <PlaceEntry
        title="Nara Park"
        city="Nara"
        imageURL="/img/nara-park.png"
        location="https://goo.gl/maps/owb9eSuzzARNg7H86"
        description="Nara Park offers a unique opportunity to harmoniously coexist with nature, as friendly deer roam freely amidst historic temples and lush greenery."
      />

      <PlaceEntry
        title="Arashiyama Bamboo Grove"
        city="Kyoto"
        imageURL="/img/kyoto-bamboo-grove.png"
        location="https://goo.gl/maps/Q7xfXsMo2kQCVx529"
        description="The Arashiyama Bamboo Grove in Kyoto is a mesmerizing sight, with towering bamboo stalks creating an ethereal atmosphere of tranquility and enchantment."
      />

      <PageFooter />
    </>
  );
}

export default App;
