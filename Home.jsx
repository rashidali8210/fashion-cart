import React from "react";
import Main from "./Main";
import data from "./components/data/data";
import './components/cssStyle/styling.css';
import  { useState } from "react";
 
const Home = () => {
  const{products}= data;
  const [cartItems, setCartItems] = useState([]);


   const onAdd = (product) => {
      
      const exist = cartItems.find((series) => series.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((series) =>
            series.id === product.id ? { ...exist, qty: exist.qty + 1 } : series
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
  const Y =cartItems.length; 

    return(<>  
   
  
    <div className="btn-cart">
    {Y? (
            <button className="badge">{Y}</button>
          ) : (
            ' '
          )}
         
    <img src="./image/lgoo.png  " width="50px" height="50px"  />
    <a href="/Help">
    
        <br/> {"    "} Cart </a> 
    </div>
  
 
<Main products={products} onAdd={onAdd}/>
  
</>
    );
  };
  export default Home;


 