import React from "react";
import './header.css';
import Main from '../Main/Main';
import logo from "../../images/logo.png"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import ElectronicsProducts from "./menu/ElectronicsProducts";
import Sports from "./menu/Sports&Outdoor";
import Home from "./menu/Home&Garden";

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
            {/* <Router> */}
                <li><Link to="/ElectronicsProducts" >Electronics</Link></li>          
                <li> <Link to="/Sports&Outdoors" >Sports & outdors</Link></li>
                <li> <Link to="/Home&garden" >Home & Garden</Link></li>

                {/* <Route path="/electronicsProducts" component={ElectronicsProducts} />
                <Route path="/sports" component={Sports} />
                <Route path="/home" component={Home} /> */}
{/* 
            </Router> */}

        </div>

    
    </>
    )
}

export default Header;