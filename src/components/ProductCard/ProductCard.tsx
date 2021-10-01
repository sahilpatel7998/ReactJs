import React, { Component } from 'react'
import { ProductName } from "./ProductData"
import "../card/card.css"
interface Props {
    productData: ProductName[];
}
const MenuCard = (props: Props) => {
    const { productData } = props;
    console.log(productData);
    return (
        <>
            <section className ="main_card_container">
                {
                    productData.map((curElem, index) => {

                        const{id, brand_name, name, price} = curElem

                        return (
                            <>
                            <div className="card_container" key = {curElem.id} >
                                <div className="card">
                                    <img  src = {curElem.image} alt = "images" className = "card-media"/>
                                    <p>{curElem.name}</p>
                                    <p> From ${curElem.price}</p>
                                </div>
                            </div>
                                    </>
                        )
                    })
                }
            </section>
        </>
    )
}
export default MenuCard;