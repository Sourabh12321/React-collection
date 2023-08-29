import React from "react";
import {useState} from "react";
const CartButton = ({show}) => {
  const [count,setCount] = useState(1);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>+</button>
    {count}
    <button onClick={()=>{
      if(count>1){
        setCount(count-1)
      }else{
        show(true)
      }
      
    }}>-</button>
    </div>;
};

export default CartButton;
