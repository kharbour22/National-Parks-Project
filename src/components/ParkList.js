import { useOutletContext } from "react-router-dom"
import Park from "./Park"


function ParkList(){

    const {parks} = useOutletContext()

    const parkComponents = parks.map(park => {
        return <Park key={park.id} park={park}/>
      })
    
    return(
    <ul>{parkComponents}</ul>
    )
}
export default ParkList