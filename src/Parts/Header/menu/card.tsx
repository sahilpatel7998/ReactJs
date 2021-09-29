import React, { Component } from 'react'


const Card = () =>  {
    return (
        <>
        <div className = "card_container">
            <div className = "card">
                <image  src = {image} alt = "images" className = "card-media"/>
            </div>
        </div>
        </>
    )
}
export default Card;