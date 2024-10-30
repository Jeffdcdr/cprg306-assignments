"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  let [quantity, setQuantity] = useState(1);
  let [name, setName] = useState("");
  let [category, setCategory] = useState("produce");

  let increment = () => (quantity < 20 ? setQuantity(quantity + 1) : null);
  let decrement = () => (quantity > 1 ? setQuantity(quantity - 1) : null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { name, quantity, category };
    const newId = Math.floor(Math.random() * 1000000);
    const NewItem = { id: newId, name: name, category: category, quantity: quantity };
    onAddItem(NewItem);

    //reset form
    setQuantity(1);
    setCategory("produce");
    setName("");
  };

  return (
    <form
      // onSubmit={(event) => handleSubmit(event)}
      onSubmit={handleSubmit}
      className="text-xl p-2 m-4 bg-slate-800 max-w-sm w-full"
    >
      <label htmlFor="name"></label>
      <input
        className="text-black w-full mt-1 border-2 border-gray-500 p-2 rounded-lg font-sans"
        placeholder="Item name"
        type="text"
        id="name"
        required //name is required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <div className="flex justify-evenly p-2 mt-1 mb-1 rounded-md">
        
        <label htmlFor="category"></label>
        <select
          className="p-2 mt-1 mb-1 rounded-md border-gray-500 text-black w-auto"
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
      
        <div  className=" flex justify-between p-2 mt-1 mb-1 mr-1 rounded-md bg-white text-black w-36">
        <h3 className="p-2"> {quantity}</h3>
        
        <div>
        <input //increment button
          type="button"
          value="▲"
          onClick={increment}
          className={`${
            quantity === 20
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-700"
          } text-white font-bold p-2 rounded`}
        />
        <input //decrement button
          type="button"
          value="▼"
          onClick={decrement}
          className={`${
            quantity === 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-700"
          } text-white font-bold p-2 rounded`}
        />
        </div>
        </div>
      </div>

      <div className="flex justify-center">
        <input //submit button
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
          // className={`${
          //   name === ""
          //     ? "bg-gray-500 "
          //     : "bg-blue-500 hover:bg-blue-700"
          // } text-white font-bold py-2 px-2 rounded`}
          // onClick={() =>
          //   name === "" ? alert("Please enter a name!") : handleSubmit()
          // }
        />
      </div>
    </form>
  );
}
