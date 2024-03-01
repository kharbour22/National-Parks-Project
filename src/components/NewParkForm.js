import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"


function NewParkForm(){

    const [formData, setformData] = useState({
        name: "",
        image: "",
        location: "",

    })

    const navigate = useNavigate()
    const {addPark} = useOutletContext()
    

    function handleSubmit(e){
        e.preventDefault()
        

        addPark(formData)

        setformData({name:"", image:"",location:""})
        navigate('/')
    }

    function updatedFormData(e){
        setformData({...formData, [e.target.name]: e.target.value})
        
    }



    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
          <input onChange={updatedFormData} type="text" name= "name" placeholder="Add the parks name here!" value={formData.name}/>
          <br/>
          <label>Image:</label>
          <input onChange={updatedFormData} type="text" name= "image" placeholder="Add a picture here!" value={formData.image}/>
          <br/>
          <label>Location:</label>
          <input onChange={updatedFormData} type="text" name= "location" placeholder="The state to visit!" value={formData.location}/>
          <br/>
          <button type="submit">Add Park</button>  
        </form>
    )
}
export default NewParkForm