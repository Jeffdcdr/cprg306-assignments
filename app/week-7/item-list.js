"use client";

import { useState } from "react";
// import itemsJson from "./items.json";

export default function ItemList({ itemsJson }) {
  const [sortby, setSortby] = useState("name");
  const [groupedCategory, setGroupedCategory] = useState(null); // added to handle grouped category

  const items = [...itemsJson].sort((a, b) => {
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
    setGroupedCategory(null);
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
