import React, { Component } from 'react'
import "./footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";


const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="container">
                    <p>Orders</p>
                    <ul>
                        <li><a href="/">Shipping</a></li>
                        <li><a href="/">Track My Order</a></li>
                        <li><a href="/">Track My Order</a></li>
                        <li><a href="/">Returns Policy</a></li>
                    </ul>
                </div>
                <div className="container2">
                    <p>About</p>
                    <ul>
                        <li ><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Returns Notice</a></li>
                    </ul>
                </div>
                <div>
                    <div className="icon">


                        <FaTwitter style={{ fontSize: "30px", marginRight: "100px" }} />
                        <FaFacebook style={{ fontSize: "30px", marginRight: "100px" }} />
                        <FaInstagram style={{ fontSize: "30px", marginRight: "100px" }} />
                        <FaYoutube style={{ fontSize: "32px" }} />



                    </div>
                    <div className="icons-1">
                        <div className="icon_text">
                            <p>Subscribe to our mailing list for exclusive<button id="btn_2">Subscribe</button> news and offers!</p>
                            <div className="icon_button"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;