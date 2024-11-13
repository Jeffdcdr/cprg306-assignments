"use client";

import { useState } from "react";
import ThemeContext from "./theme-context";
import Toolbar from "./toolbar";
import Content from "./content";


export default function Page() {
const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main
        className={`h-screen ${
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <h1 className="m-4 text-3xl font-bold"> Week 9 Context </h1>
        <Toolbar />
        <Content />
      </main>
    </ThemeContext.Provider>
  );
}
