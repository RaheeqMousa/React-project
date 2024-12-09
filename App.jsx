import React, { useState } from 'react'

export default function App() {
    
  // Using use hook to define state and setter function
  const [counter,setCounter] = useState(0);

  const prod = {
    name: "iPhone15", 
    price: "1200", 
    desc: "Light Pink and powerfull Feature"};

 
  const [visible,setVisible] = useState(false);
  const displayProduct = ()=>{
    
    setVisible(!visible); // toggles the visibility of the product details
  }


  // Function to increase counter by 1 and log the new value to console.log()
  const increase= ()=>{
    setCounter(counter+1); //counter=counter+1

  }

  return(
      <>
        <h1>Counter: {counter}</h1>
        <div className="d-flex gap-5 flex-column w-25">
            <button className="btn-success" onClick={increase}>Increase Counter</button>
            <button className="btn-success" onClick={displayProduct}>Display product</button>
        </div>
        
        {visible?
            <div className="fs-3">
            <h2>Product Details</h2>
            <p>name: {prod.name}</p>
            <p>Price: ${prod.price}</p>
            <p>Description: {prod.desc}</p>
            </div>
            :
            <div className="fs-3 d-none">
            <h2>Product Details</h2>
            <p>name: {prod.name}</p>
            <p>Price: ${prod.price}</p>
            <p>Description: {prod.desc}</p>
          </div>
        }
      </>
  )

}
