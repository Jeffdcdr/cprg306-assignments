"use client";

import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);

  // for increment function
  // let increment = () => {
  //   if (quantity < 20) setQuantity(quantity + 1);
  // };
  
  let increment = () => quantity < 20? setQuantity(quantity + 1) : null;
  
  // for decrement function
  //   let decrement = () => {
  //     if (quantity > 1) setQuantity(quantity - 1);
  //   };

  let decrement = () => quantity > 1 ? setQuantity(quantity - 1) : null;
  


  // for reset function
  const reset = () => setQuantity(1);

  return (
    <div>
      <h3>Current Quantity: {quantity}</h3>
      <br></br>

      <button
        onClick={increment}
        // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
        className={`${
          quantity === 20
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold py-2 px-2 rounded`}
        //   disabled={quantity === 20}
      >
        Increment
      </button>

      <button
        onClick={decrement}
        // className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
        className={`${
          quantity === 1
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-700"
        } text-white font-bold py-2 px-2 rounded`}
        //   disabled={quantity === 1}
      >
        Decrement
      </button>

      <button
        onClick={reset}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded"
      >
        Reset
      </button>
    </div>
  );
}
