export default function card(props){
    return(
        <>
            <article className="card">
                <div className="main-image-container">
                     <img className="main-image" src={props.img} alt="Mount Fuji" />
                </div>
                <div className="card-location-container">
                    <img src="./src/assets/marker.png" alt="Margker Image Icon" />
                    <span>{props.country}</span>
                    <a href={props.location}>View On Google Maps</a>
                    <h1>{props.name}</h1>
                    <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
                    <p>{props.description}</p>
                </div>
            </article>
            
        </>
    )
}