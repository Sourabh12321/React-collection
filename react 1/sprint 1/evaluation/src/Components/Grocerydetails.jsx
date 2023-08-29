import axios from "axios";
import React from "react";
import {useState,useEffect} from "react"
import GroceryItem from "./GroceryItem";
import "../index.css"
const Grocerydetails = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries")
    .then((response) => {
      console.log(response.data.data)
      let value = response.data.data;
      setData(value);
      console.log(data) 
    })
    .catch((err) => {
      console.log(err.message);
    });
  },[])
  

  return (
    <div className="items">
      {data.map((el,i)=>{
        return <div key={i}>
          <GroceryItem img={el.image} name={el.name} price={el.price} />
        </div>
      })}
    </div>
  );
};

export default Grocerydetails;
