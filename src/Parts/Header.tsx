import React from "react";
import './header.css';
import Main from './Main';

const Header = () => {
    return (<>
        <div className="Header">
            <div className="Header_container">
                <img src="https://demo.vendure.io/storefront/assets/cube-logo-line-icon-nostroke.png"></img>
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


        <Main></Main>
    </>
    )
}

export default Header;