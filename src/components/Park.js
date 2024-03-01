function Park({park}){
    return(
        <li>
            <h4>{park.name}</h4>
            <img src={park.image}/>
            <h5>{park.location}</h5>
           
        </li>
    )
}
export default Park