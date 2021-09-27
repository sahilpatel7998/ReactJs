import React from "react";
import './header.css';
import Main from '../Main/Main';
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import ElectronicsProducts from "./ElectronicsProducts";
import Sports from "./Sports&Outdoor";
import Home from "./Home&Garden";

const Menu = () => {
    return (<>
        <div className="Header">
            <div className="Header_container">
                <img src={logo}></img>

                <div className="input">
                    <input type="text" placeholder="Search...." />
                    <button className="btn">Sign in</button>
                </div>
            </div>
        </div>
        <div className="header_menu">
            <li><Link to = "/ElectronicsProducts" component = {ElectronicsProducts}>Electronics</Link></li>
            <li> <Link to = "/Sports&Outdoors" component = {Sports}>Home & Garden</Link></li>
            <li> <Link to ="/Home&garden" component = {Home}>Sports & outdors</Link></li>

        </div>


        <Main/>
    </>
    )
}

export default Menu;