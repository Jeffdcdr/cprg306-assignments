"use client";

import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);
  let [name, setName] = useState("");
  let [category, setCategory] = useState("produce");
  let [nameError, setNameError] = useState("");

  let increment = () => (quantity < 20 ? setQuantity(quantity + 1) : null);
  let decrement = () => (quantity > 1 ? setQuantity(quantity - 1) : null);

  const handleSubmit = (event) => {
    event.preventDefault();

     //error handling
     if (name === "") {
      setNameError("Please enter a name!");
      return;
    } else {
      setNameError(""); // Clear error if name is valid
    }

    // if (name === "") {
    //   alert("Please enter a name!");
    //   return;
    // }

    let item = { name, quantity, category };
    console.log(item);
    alert(`You added ${quantity} ${name} to the ${category} category`);

    //reset form
    setQuantity(1);
    setCategory("produce");
    setName("");

   
  };

  return (
    <form
      // onSubmit={(event) => handleSubmit(event)}
      onSubmit={handleSubmit}
      className="text-2xl mx-4 my-4"
    >
      <label htmlFor="name">Name: </label>
      <input
        className="text-black"
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {nameError && <p className="text-red-500">{nameError}</p>}

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

      <br></br>
      <h3>Current Quantity: {quantity}</h3>
      <br></br>

      <div>
        <input //increment button
          type="button"
          value="+"
          onClick={increment}
          className={`${
            quantity === 20
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-700"
          } text-white font-bold py-2 px-2 rounded`}
        />
        <input //decrement button
          type="button"
          value="-"
          onClick={decrement}
          className={`${
            quantity === 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-700"
          } text-white font-bold py-2 px-2 rounded`}
        />
        <input //submit button
          type="submit"
          value="Submit"
          // onClick={handleSubmit}
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
