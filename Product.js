import React from "react";
import './components/cssStyle/styling.css';

const Product = (props) =>
{
    const {product,onAdd} = props;
    return(
        <>
        <ul>
        <div className="latest-box">

        <img src={product.image}/>
        <strong > {product.name}</strong>
        <p> Price {product.price}</p>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
        </ul>
        </>
    )
}
export default Product ;

