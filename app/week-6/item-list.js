"use client";

import { useState } from "react";
import itemsJson from "./items.json";

export default function ItemList() {
  const [sortby, setSortby] = useState("name");

  // let items = [...itemsJson] - original code to render what's on the JSON file

  let items = [...itemsJson].sort((a, b) => {
    // added sort function to sort the items
    if (sortby === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortby === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  const handleItemClick = (value) => {
    setSortby(value);
  };

  return (
    <div>
      <div className="ml-4">
        <label htmlFor="sortby">Sort by:</label>
        <input
          type="button"
          value="Name"
          // className="bg-green-600 p-1 m-2 w-28"
          className={`p-1 m-2 w-28 ${sortby === "name" ? "bg-green-600" : "bg-green-800"}`}
            //  className={`p-1 m-2 w-28 ${sortby === value ? "bg-green-600" : "bg-green-800"}`}

          // onClick={() => setSortby("name")}
          onClick={() => handleItemClick("name")}
        ></input>
        <input
          type="button"
          value="Category"
          // className="bg-green-600 p-1 m-2 w-28"
          className={`p-1 m-2 w-28 ${sortby === "category" ? "bg-green-600" : "bg-green-800"}`}
          // onClick={() => setSortby("category")}
          onClick={() => handleItemClick("category")}
        ></input>
        <input
          type="button"
          value="Grouped Category"
          className="bg-green-800 p-1 m-2 w-28 h-10"
        ></input>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="p-2 m-4 bg-zinc-900 max-w-sm">
            <h2 className="text-xl font-semibold"> {item.name} </h2>
            <div className="text-sm">
              Buy {item.quantity} in {item.category}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
