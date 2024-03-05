import { NavLink } from "react-router-dom"


function NavBar(){
    return(
        <nav style={{ backgroundColor: '#023f02', textAlign: 'left', border: '2px solid black', padding: '10px', display: 'flex', justifyContent: 'space-evenly'  }}>
            <NavLink to= "/" style={{ color: 'gold', fontWeight: 'bold' }}>Home</NavLink>
            <NavLink to= "/add_park" style={{ color: 'gold', fontWeight: 'bold' }}>Add Park</NavLink>
            <NavLink to= "/about" style={{ color: 'gold', fontWeight: 'bold' }}>About</NavLink>
        </nav>
    )
}
export default NavBar