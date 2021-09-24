import React from "react";
import './header.css';
import Main from './Main';
import logo from "../images/logo.png"

const Header = () => {
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
            <li> <a href="/">Electronics</a></li>
            <li> <a href="/">Home & Garden</a></li>
            <li> <a href="/">Sports & outdors</a></li>

        </div>


        <Main/>
    </>
    )
}

export default Header;