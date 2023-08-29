import React from "react";
import "../index.css"
import {useState} from "react"                                                  
import CartButton from "./CartButton"


const GroceryItem = ({img,name,price}) => {
  const [value,setValue] = useState(true)
  
  // recive name, image, and price as props

  return <div>
    <img src={img} alt="" />
    <h2>{name}</h2>
    <p>{price}</p>
    {value?<button onClick={()=>{
      setValue(false);
    }}>Add to cart</button>:<CartButton show={setValue}/>}
    
  </div>;
};

export default GroceryItem;
