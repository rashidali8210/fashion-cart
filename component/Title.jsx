import React from "react";


const Title =(props) =>
{
  const {countItems} = props


   return( 
<> 
<div className="title">
    <img src="./image/lgo.png "  /> 
    <h2>fashion cart</h2>
   <div id="wow">
        <a href="/Help">
          LOGin{' '}
          {countItems? (
            <button className="badge">{countItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
        
        </div></div>
      
    </>
// props.countCartItems
);
};
export default Title;
