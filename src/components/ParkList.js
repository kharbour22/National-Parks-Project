import { useOutletContext } from "react-router-dom"
import Park from "./Park"



function ParkList(){

    const {parks} = useOutletContext()

    const parkComponents = parks.map(park => {
        return <Park key={park.id} park={park}/>
      })
    
    return(
      <><div><p>Have you always been interested in traveling our nation's national parks but don't know where to start? National Parks Explorer provides suggestions for where to start based off your current location or favorite activities. You can mark off completed adventures and even add some more national parks to explore!</p></div><ul>{parkComponents}</ul></>
    )
}
export default ParkList