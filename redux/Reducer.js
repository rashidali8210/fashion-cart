   import React,{useState} from "react";
   import data from '../components/data/data';
const initial =  {
 
    title: '',
    amount: "",
    note:"",
    date: "",
  
}

const Reducer=
    (state=initial,action) =>
{
    switch(action.type){
        
        case "ON_ADD": {
 const OnAdd=()=>{
            const [cartItems, setCartItems] = useState([]);
            const{product}= data;
 
  const exist = cartItems.find((series) => series.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((series) =>
        series.id === product.id ? { ...exist, qty: exist.qty + 1 } : series
      )
    );
  } 
  else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
 const Y=cartItems.length;

            return {Y};
          } }
        default: return state;

    
        } }
export default Reducer;