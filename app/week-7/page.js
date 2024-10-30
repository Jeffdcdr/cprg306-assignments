"use client";

import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsJson from "./items.json"; 
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsJson);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="p-2">
      <h1 className="m-4 text-3xl font-bold">Shopping List Week 7</h1>
      <NewItem onAddItem={handleAddItem} />
      
      <div className="ml-4">
        Go back to{" "}
        <Link href="/" className="underline">
          Home page
        </Link>{" "}
      </div>
    </main>
  );
}
