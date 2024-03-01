import { NavLink } from "react-router-dom"


function NavBar(){
    return(
        <nav>
            <NavLink to= "/">Home</NavLink>
            <NavLink to= "/add_park">Add Park</NavLink>
            <NavLink to= "about_me">About me</NavLink>
        </nav>
    )
}
export default NavBar