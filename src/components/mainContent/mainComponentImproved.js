import React, { useEffect } from "react";
import { useState } from "react";
import './mainContent.css'


function MainComponenetImroved() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://mocki.io/v1/32698683-768e-41b2-a040-bc6be322cd94")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    },[])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <>
          {items.map(item => (
            <div className="mainContent">
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
            </div>
            )
          )}
          </>
        );
    }
}

export default MainComponenetImroved;