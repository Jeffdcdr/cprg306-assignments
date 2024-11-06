"use client";

import Item from "./item";
import { useState } from "react";
import itemsJson from "./items.json";

export default function ItemList() {
  const [sortby, setSortby] = useState("name");
  const [groupedCategory, setGroupedCategory] = useState(null); // added to handle grouped category

  const items = [...itemsJson].sort((a, b) => {
    if (sortby === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortby === "category") {
      return a.category.localeCompare(b.category);
    } 
      return 0;
    }
  );

  const handleGroupedCategory = () => {
    const groupedItems = items.reduce((accumulator, item) => {
      if (!accumulator[item.category]) {
        accumulator[item.category] = [];
      }
      accumulator[item.category].push(item);
      return accumulator;
    }, {});

    // Sort categories
    const sortedGroupedItems = Object.keys(groupedItems)
      .sort((a, b) => a.localeCompare(b))
      .reduce((accumulator, category) => {
        accumulator[category] = groupedItems[category];
        accumulator[category].sort((a, b) => a.name.localeCompare(b.name)); // this sorts the items inside each category
        return accumulator;
      }, {});
    setGroupedCategory(sortedGroupedItems);
    setSortby("grouped category");
  };

  const handleItemClick = (value) => {
    setSortby(value);
    setGroupedCategory(null);
  };

  return (
    <div>
      <div className="ml-4">
        <label htmlFor="sortby" className="text-xl">
          Sort by:
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
        <input
          type="button"
          value="Grouped Category"
          className={`cursor-pointer p-1 m-2 w-40 rounded-md ${
            sortby === "grouped category" ? "bg-sky-600" : "bg-sky-800"
          }`}
          onClick={handleGroupedCategory}
        />
      </div>

      {groupedCategory ? (
        <div>
          <ul>
            {Object.keys(groupedCategory).map((category) => (
              <li key={category}>
                <h3 className="p-2 m-4 text-sky-400 text-transform: capitalize text-2xl">
                  {category}
                </h3>
                <ul>
                  {groupedCategory[category].map((item) => (
                    <Item key={item.id} itemObj={item} />                    
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul>
          {items.map((item) => (
            <Item key={item.id} itemObj={item} />            
          ))}
        </ul>
      )}
    </div>
  );
}
