import { NavLink } from "react-router-dom"


function NavBar(){
    return(
        <nav style={{ backgroundColor: '#023f02', textAlign: 'left', border: '2px solid black', padding: '10px', display: 'flex', justifyContent: 'space-evenly',borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'  }}>
            <NavLink to= "/" style={{ color: 'gold', fontWeight: 'bold' }}>Home</NavLink>
            <NavLink to= "/add_park" style={{ color: 'gold', fontWeight: 'bold' }}>Add Park</NavLink>
            <NavLink to= "/about" style={{ color: 'gold', fontWeight: 'bold' }}>About</NavLink>
        </nav>
    )
}
export default NavBar