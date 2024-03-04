function Park({park}){
    return(
        <li>
            <h2><u>{park.name}</u></h2>
            <h5>{park.location}</h5>
            <h4>{park.description}</h4>
            <h5>Explore: {park.activities}</h5>
            <img src={park.image}/>
           
        </li>
    )
}
export default Park