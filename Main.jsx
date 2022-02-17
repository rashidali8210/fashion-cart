import React from 'react';
import Product from './Product';
import './components/cssStyle/styling.css';


export default function Main(props) {
  const { products,onAdd } = props;
  
  return (
    <> <div className="main">
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}></Product>
      ))}
     
    </div>
    </>
  );
}