import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
// import {Link} from 'react-router-dom'; // we can also use NavLink

const Nav=()=>{
    return(
        <>
        <NavLink exact activeClassName="active_class" to="/" >AboutUs</NavLink>
        <NavLink exact activeClassName="active_class" to="/contact" >ContactUs</NavLink>
        <br/>
       
        </>

    )
}
export default Nav;