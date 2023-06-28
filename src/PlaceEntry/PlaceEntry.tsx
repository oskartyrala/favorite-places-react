import "./PlaceEntry.css"

interface Place {
    title: string;
    name: string;
    country: string;
    imageURL: string;
    location: string;
    description: string;
}

function PlaceEntry(props: Place): JSX.Element {
    return (
        <div className="place-card">
            <img src={props.imageURL} alt={props.title}></img>
            <div>
                <h2>{props.title}</h2>
                <h3>{props.name}</h3>
                <p>{props.country}</p>
                <a href={props.location}>Where is it?</a>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default PlaceEntry;