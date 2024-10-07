"use client";

import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);
  let [name, setName] = useState("");
  let [category, setCategory] = useState("produce");

  let increment = () => (quantity < 20 ? setQuantity(quantity + 1) : null);
  let decrement = () => (quantity > 1 ? setQuantity(quantity - 1) : null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { name, quantity, category };
    console.log(item);
    alert(`You added ${name} ${quantity} to the ${category} category`);

    //reset form
    setQuantity(1);
    setCategory("produce");
    setName("");

    if (name.length === 0) {
      alert("Please enter a name");
    }
  };

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input
        className="text-black"
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="category">Category: </label>
      <select
        className="text-black"
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen foods</option>
        <option value="canned goods">Canned goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="other">Other</option>
      </select>

      <div>
        <h3>Current Quantity: {quantity}</h3>
        <br></br>

        <button
          type="button"
          onClick={increment}
          className={`${
            quantity === 20
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-700"
          } text-white font-bold py-2 px-2 rounded`}
        >
          {/* Increment */}+
        </button>

        <button
          type="button"
          onClick={decrement}
          className={`${
            quantity === 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-700"
          } text-white font-bold py-2 px-2 rounded`}
        >
          {/* Decrement */}-
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
}
