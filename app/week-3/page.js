import Link from "next/link";
import Item from "./items";
import ItemList from "./item-list";


export default function Page() {
    return (
      <main>
        <h1>Shopping List - Week 3</h1>
        <ItemList/>
        <p>
        Go back to <Link href="/" className="underline">Home page</Link>
        </p>
      </main>
      
      
    );
  }