import React, {useState} from "react"
import './Navbar.css'
import { Link, NavLink } from "react-router-dom"


const Navbar = () =>{
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <nav>
             <Link to='/Home' className="title">
                    SM
            </Link>
            <div className="menu" onClick={()=>{setMenuOpen(!menuOpen) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
               <li>
                    <NavLink to='/About'> About </NavLink>
               </li>
               <li>
                    <NavLink to='/Project'> Project </NavLink>
               </li>
               <li>
                    <NavLink to='/Resume'> Resume </NavLink>
               </li>
             
            </ul>
          
        </nav>
    )
}

export default Navbar