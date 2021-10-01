import React, { useState } from "react";
import "./menu.css"
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa"
// import Card from "../../../components/card";
import Product from "../../../Api/menuApi";
import MenuCard from "../../../components/ProductCard/ProductCard";
import { ProductName } from "../../../components/ProductCard/ProductData";

const ElectronicsProducts = () => {

    const [productData, setProductData] = useState<ProductName[]>(Product);

    const [showBrand, setShowBrand] = useState<boolean>(true);
    

    const filterProduct = (brandName: string) => {
        console.log(productData);

        setShowBrand(!showBrand);
        console.log(showBrand);

        const updatedList = Product.filter((element) => {
            return element.brand_name === brandName;
        });
        if(showBrand) {
            setProductData(updatedList);
        }
        if(!showBrand) {
            setProductData(Product);
        }

        
       
    }

    return (<>
        <div className="parent_div">
            <div className="imgE_div">
                <img src="https://demo.vendure.io/assets/preview/5b/jakob-owens-274337-unsplash__preview.jpg?w=1000&h=300"
                    className="imageE1"
                />

            </div>
            <div className='txtE'>
                <li> <Link to="/" >Home</Link></li>
                <p>/ Electronics</p>
            </div>
            <h1 id="elect">Electronics</h1>

            <div className="containerE">
                <div className="row">
                    <div className="filter_product">
                        <div className="topping">
                            <div className="label">
                                <div className="filter_icon"><FaFilter style={{ marginRight: 13 }} />  </div>
                                <label>FILTERS</label>
                            </div>
                            <hr />
                            <div>
                                <p>Category</p>
                                <input type="checkbox" id="topping" name="topping"
                                    value="Paneer" />
                                Computers
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    value="Paneer" />
                                Photo
                            </div>
                            <div>
                                <p>Brand</p>
                                <input type="checkbox" id="toppiElectronicsProductsng" name="topping"
                                    onChange={() => filterProduct("Apple")}
                                    value="Paneer" />
                                Apple
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Logitech")}
                                    value="Paneer" />
                                Logitech
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Samsung")}
                                    value="Paneer" />
                                Samsung
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Corsair")}
                                    value="Paneer" />
                                Corsair
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("ADMI")}
                                    value="Paneer" />
                                ADMI
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Seagate")}
                                    value="Paneer" />
                                Seagate
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Polaroid")}
                                    value="Paneer" />
                                Polaroid
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Nikkon")}
                                    value="Paneer" />
                                Nikkon
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Agfa")}
                                    value="Paneer" />
                                Agfa
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Manfrotto")}
                                    value="Paneer" />
                                Manfrotto
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Kodak")}
                                    value="Paneer" />
                                Kodak
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Sony")}
                                    value="Paneer" />
                                Sony
                                <br />
                                <input type="checkbox" id="topping" name="topping"
                                    onChange={() => filterProduct("Rolleiflex")}
                                    value="Paneer" />
                                Rolleiflex
                               


                            </div>
                        </div>




                    </div>
                </div>

                <div className="elect_image">
                    <img src="https://demo.vendure.io/assets/preview/9c/alexandru-acea-686569-unsplash__preview.jpg?w=400&h=150"
                        className="cropped1"

                    />
                    <img src='https://demo.vendure.io/assets/preview/b5/eniko-kis-663725-unsplash__preview.jpg?w=400&h=150'
                        className="cropped2"
                    />
                    <h1 id="cmp_txt">Computers</h1>
                    <h1 id="cnp_txt">Camera & Photo</h1>

                </div>
                {/* <div className = "elect_image2">
                    <img src = "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/b8/kelly-sikkema-685291-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/a1/oscar-ivan-esquivel-arteaga-687447-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/d2/daniel-korpai-1302051-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/9c/alexandru-acea-686569-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/58/liam-briese-1128307-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/5a/florian-olivo-1166419-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/96/vincent-botta-736919-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/09/juan-gomez-674574-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/7b/thomas-q-1229169-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/64/adam-birkett-239153-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/b5/eniko-kis-663725-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/9b/brandi-redd-104140-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/3c/jonathan-talbert-697262-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/21/zoltan-tasi-423051-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/5b/jakob-owens-274337-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/bc/patrick-brinksma-663044-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/95/chuttersnap-324234-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/9d/robert-shunev-528016-unsplash__preview.jpg?w=200&h=200"/>
                    <img src = "https://demo.vendure.io/assets/preview/ef/alexander-andrews-260988-unsplash__preview.jpg?w=200&h=200"/>

                </div> */}
                <div>
                    {/* <Card/> */}
                </div>
            </div>
        </div>
                  <Link to ="/ElectronicsProducts/TopProductCard"> <MenuCard productData={productData} /></Link>
    </>
    )
}

export default ElectronicsProducts;