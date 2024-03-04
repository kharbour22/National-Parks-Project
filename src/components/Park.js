function Park({park}){
    return(
        <li>
            <h2><u>{park.name}</u></h2>
            <img src={park.image}/>
            <h5>{park.location}</h5>
           
        </li>
    )
}
export default Park