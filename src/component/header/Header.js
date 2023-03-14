import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div className="header">
            <div className="headerLeft">
                <Link to = "/" ><img className="header-icon" src="https://cdn.dribbble.com/users/612987/screenshots/9500879/eagle_logo.jpg" alt="" /></Link>
                <Link to = "/movies/popular" style={{textDecoration:"none"}}><span>popular</span></Link>
                <Link to = "/movies/top_rated" style={{textDecoration:"none"}}><span>top-rated</span></Link>
                <Link to = "/movies/upcoming" style={{textDecoration:"none"}}><span>upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header;