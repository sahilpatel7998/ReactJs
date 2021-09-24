import React, { Component } from 'react'
import "../Parts/footer.css"

const Footer = ( ) => {
    return(
        <>
        <div className = "footer">
            <div className = "container">
                <p>Orders</p>
                <ul>
                    <li><a href = "/">Shipping</a></li>
                    <li><a href = "/">Track My Order</a></li>
                    <li><a href = "/">Track My Order</a></li>
                    <li><a href = "/">Returns Policy</a></li>
                </ul>
            </div>
            <div className = "container2">
                <p>About</p>
                <ul>
                    <li ><a href = "/">About Us</a></li>
                    <li><a href = "/">Contact Us</a></li>                   
                    <li><a href = "/">Returns Notice</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Footer;