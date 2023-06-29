import "./PlaceEntry.css"
import "../img/fuji-pagoda.png"

interface Place {
    title: string;
    city: string;
    imageURL: string;
    location: string;
    description: string;
}

function PlaceEntry(props: Place): JSX.Element {
    return (
        <div className="place-card">
            <img src="./img/fuji-pagoda.png" alt={props.title}></img>
            <div>
                <h2>{props.title}</h2>
                <h3>{props.city}</h3>
                <a href={props.location}>Where is it?</a>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default PlaceEntry;