import React, { useEffect } from "react";
import { useState } from "react";
import './mainContent.css'


function MainComponenetImroved() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      setIsLoaded(true);
      fetch("https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=30&sort_by=&sort_dir=desc&filter=")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(false);
            setItems(result.result.products);
          },

          (error) => {
            setIsLoaded(false);
            setError(error);
          }
        )
    },[])
    // console.log(items);
  return(
    <>
      {
        error?<div>
          {error.message}
        </div> : isLoaded?
        <div>Loading...</div>:
        items && items.length>0 && items.map((item)=>{
          return (
              <>
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
              </>
            );
        })
      }  
    </>
  )
   
}

export default MainComponenetImroved;