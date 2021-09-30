import React, { Component } from 'react'
import { ProductName } from "./ProductData"
interface Props {
    productData: ProductName[];
}
const MenuCard = (props: Props) => {
    const { productData } = props;
    console.log(productData);
    return (
        <>
            <section>
                {
                    productData.map((curElem, index) => {
                        return (
                            <div className="card_container" key = {curElem.id} >
                                <div className="card">
                                    <img  src = {curElem.image} alt = "images" className = "card-media"/>
                                    <p>{curElem.name}</p>
                                    <div>{curElem.price}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}
export default MenuCard;