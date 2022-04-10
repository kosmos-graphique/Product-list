import React from "react";
import product_card from "../../data/product_data";
import "./mainContent.css"


const Main_content = ()=> {
    //console.log(product_card);
    const listItems = product_card.map((item)=>
        <div className="card" key={item.id_product}>
            <div className="card_img">
                <img src={item.image} alt="image"/>
            </div>
            <div className="card_header">
                <h3>{item.name}</h3>
                <p className="descr">{item.description}</p>
                <p className="price"><span id="currency">₹ </span>{item.price}</p>
                <button className="btn">Add to cart</button>
            </div>
        </div>
    );
    return (
        <>
            <div className="mainContent">
                {listItems}
            </div>
        </>
    );
}
export default Main_content;