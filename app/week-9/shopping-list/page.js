"use client";

import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsJson from "./items.json"; 
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsJson);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item) => {
    // Use regex to remove everything after the first comma, any numbers with units, and emojis
    const trimmedName = item.name
      .replace(/,.*/g, "") // Remove everything after the first comma (assumes name is before any comma)
      .replace(/\d+.*$/g, "") // Remove numbers and anything following (assumes quantity and unit follow numbers)
      .replace(
        /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1FB00}-\u{1FBFF}\u{1FC00}-\u{1FCFF}\u{1FD00}-\u{1FDFF}\u{1FE00}-\u{1FEFF}\u{1FF00}-\u{1FFFF}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B73F}\u{2B740}-\u{2B81F}\u{2B820}-\u{2CEAF}\u{2CEB0}-\u{2EBEF}\u{2F800}-\u{2FA1F}\u{30000}-\u{3134F}\u{E000}-\u{F8FF}\u{FE00}-\u{FE0F}\u{FE30}-\u{FE4F}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}]/gu,
        ""
      ) // Remove all emojis
      .trim();
    setSelectedItemName(trimmedName);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="flex p-2">
      <div className="flex-1">
      <h1 className="m-4 text-3xl font-bold">Shopping List Week 8</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">Meal Ideas</h2>
        {selectedItemName ? (
          <MealIdeas ingredient={selectedItemName} />
        ) : (
          <p className="text-2xl">Select an item to see meal ideas.</p>
        )}
      </div>

      <div className="ml-4">
        Go back to{" "}
        <Link href="/" className="underline">
          Home page
        </Link>{" "}
      </div>
    </main>
  );
}
