"use client";

import { useState } from "react";
import itemsJson from "./items.json";

export default function ItemList() {
  const [sortby, setSortby] = useState("name");
  const [groupedCategory, setGroupedCategory] = useState(false); // added to handle grouped category

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

  const handleGroupedCategory = () => {
    const groupedItems = items.reduce((accumulator, item) => {
      if (!accumulator[item.category]) {
        accumulator[item.category] = [];
      }
      accumulator[item.category].push(item);
      return accumulator;
    }, {});
    setGroupedCategory(groupedItems); // added to set grouped category
    setSortby("grouped category");
    console.log(groupedItems)
    
  };

  const handleItemClick = (value) => {
    setSortby(value);
    setGroupedCategory(false);
  };

  return (
    <div>
      <div className="ml-4">
        <label htmlFor="sortby" className="text-xl">Sort by:</label>
        <input
          type="button"
          value="Name"
          // className="bg-green-600 p-1 m-2 w-28"
          className={`p-1 m-2 w-24 rounded-md ${
            sortby === "name" ? "bg-sky-600" : "bg-sky-800"
          }`}
          //  className={`p-1 m-2 w-28 ${sortby === value ? "bg-green-600" : "bg-green-800"}`}

          // onClick={() => setSortby("name")}
          onClick={() => handleItemClick("name")}
        />
        <input
          type="button"
          value="Category"
          // className="bg-green-600 p-1 m-2 w-28"
          className={`p-1 m-2 w-24 rounded-md ${
            sortby === "category" ? "bg-sky-600" : "bg-sky-800"
          }`}
          // onClick={() => setSortby("category")}
          onClick={() => handleItemClick("category")}
        />
        <input
          type="button"
          value="Grouped Category"
          className={`p-1 m-2 w-40 rounded-md ${
            sortby === "grouped category" ? "bg-sky-600" : "bg-sky-800"
          }`}
          
          onClick={() => handleGroupedCategory("grouped category")}
        />
      </div>

      {groupedCategory ? (
        <div>
          <ul>
            {Object.keys(groupedCategory).map((category) => (
              <li key={category} >
                <h3 className="p-2 m-4 text-sky-400 text-transform: capitalize text-2xl">{category}</h3>
                <ul>
                  {groupedCategory[category].map((item) => (
                    <li key={item.id} className="p-2 m-4 bg-zinc-900 max-w-sm">
                      <h2 className="text-xl font-semibold"> {item.name} </h2>
                      <div className="text-sm">
                        Buy {item.quantity} in {item.category}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
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
      )}
    </div>
  );
}
