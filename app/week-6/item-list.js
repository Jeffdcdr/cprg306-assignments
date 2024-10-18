"use client";

import { useState } from "react";
import itemsJson from "./items.json";

export default function ItemList() {
  const [sortby, setSortby] = useState("name");
  let items = [...itemsJson];

  return (
    <div>
      <div className="ml-4">
        <label htmlFor="sortby">Sort by:</label>
        <input
          type="button"
          value="Name"
          className="bg-orange-500 p-1 m-2 w-28"
        ></input>
        <input
          type="button"
          value="Category"
          className="bg-orange-500 p-1 m-2 w-28"
        ></input>
        <input
          type="button"
          value="Grouped Category"
          className="bg-orange-700 p-1 m-2 w-28 h-10"
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
