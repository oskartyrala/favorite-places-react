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
        <>
            <h2>{props.title}</h2>
            <h3>{props.name}</h3>
            <p>{props.country}</p>
            <img src={props.imageURL} alt={props.title}></img>
            <a href={props.location}>Google Maps</a>
            <p>{props.description}</p>
        </>
    )
}

export default PlaceEntry;