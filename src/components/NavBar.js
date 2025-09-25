 import React from "react"
 import {Link} from 'react-router-dom';
 import "./NavBar.css"

 function NavBar(){
    return(
        <nav className="nav-cont">
            <h2 className="logo">Skyworld<br/> Aerospace <br/> Limited</h2>
             <ul className="nav-links">            
            <li><Link to="/homepage">HOME</Link></li>   
            <li><Link to="/">SERVICES</Link></li>   
            <li><Link to="/">FLEET</Link></li>   
            <li><Link to="/">PRICING</Link></li>   
            </ul>
            <li className="nav-links button"><Link to="/">Request a Mission</Link></li>   

        </nav>
    );
 }

 export default NavBar