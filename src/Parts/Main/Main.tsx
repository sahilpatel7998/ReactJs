import React from 'react'
import "./main.css"
import img1 from "../../images/cam.jpg"
import img2 from "../../images/trees.jpg"
import img3 from "../../images/sofa.jpg"
import img4 from "../../images/img1.jpg"
import img5 from "../../images/img2.jpg"
import img6 from "../../images/img3.jpg"
import img7 from "../../images/img4.jpg"
import img8 from "../../images/img5.jpg"
import img9 from "../../images/img6.jpg"
import img10 from "../../images/img7.jpg"
import img11 from "../../images/img8.jpg"


const Main = () => {
    return (
        <>
            <div className="Main">
                <div className="top">
                    <div className="banner">
                        <div className="heading">
                            <h1 id="txt">Vendure Store Front</h1>
                        </div>

                    </div>

                </div>
            </div>
            <div className="section">
                 <div className = "image_container">
                     <img src = {img1} alt = "pic one"/>
                     <img src = {img2} alt = "pic two"/>
                     <img src = {img3} alt = "pic three"/>
                    
                 </div>
                 <div className = "heading_section">
                     Top Sellers
                 </div>
                 <div className = "image2_container">
                     <img src = {img4} alt = "pic one"/>
                     <img src = {img5} alt = "pic one"/>
                     <img src = {img6} alt = "pic one"/>
                     <img src = {img7} alt = "pic one"/>
                     <img src = {img8} alt = "pic one"/>
                     <img src = {img9} alt = "pic one"/>
                     <img src = {img10} alt = "pic one"/>
                     <img src = {img11} alt = "pic one"/>

                 </div>
            </div>
        </>
    )
}

export default Main;