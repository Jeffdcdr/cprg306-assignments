"use client";

import { useState } from "react";

import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortby, setSortby] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortby === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortby === "category") {
      return a.category.localeCompare(b.category);
    } 
      return 0;
    });

  const handleItemClick = (value) => {
    setSortby(value);
  };

  return (
    <div>
      <div className="ml-4">
        <label htmlFor="sortby" className="text-xl">
          Sort by:
          {/* {sortby} */}
        </label>
        <input
          type="button"
          value="Name"
          className={`cursor-pointer p-1 m-2 w-24 rounded-md ${
            sortby === "name" ? "bg-sky-600" : "bg-sky-800"
          }`}
          onClick={() => handleItemClick("name")}
        />
        <input
          type="button"
          value="Category"
          className={`cursor-pointer p-1 m-2 w-24 rounded-md ${
            sortby === "category" ? "bg-sky-600" : "bg-sky-800"
          }`}
          onClick={() => handleItemClick("category")}
        />
      </div>

      <div>
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} itemObj={item} onSelect={onItemSelect}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
