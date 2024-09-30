"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity - 1);

return (
    <div>
        <p>Current Quantity: {quantity}</p>
        <button 
        onClick={increment}
        >Increment</button>
        <button
        onclick = {decrement}
        >Decrement
        </button>
    </div>
);

}