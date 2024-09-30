import Link from "next/link";
import Item from "./items";
import ItemList from "./item-list";


export default function Page() {
    return (
      <main>
        <h1 className="m-4 text-3xl font-bold">Shopping List</h1>
        <h1 className="m-4 text-xl ">Week 3</h1>
        <ItemList/>
        <br></br>
        <p>
        <Link href="/" className="m-4 text-lg underline">Home</Link>
        </p>
      </main>
      
      
    );
  }