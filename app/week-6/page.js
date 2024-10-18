import Link from "next/link";
import ItemList from "./item-list";
import Item from "./items";


export default function Page() {
    return (
      <main>
        <h1 className="m-4 text-3xl font-bold">Shopping List</h1>
        <ItemList/>
        <br></br>
        <div className="ml-4">
        Go back to <Link href="/" className="underline" >Home page</Link>
        </div>
      </main>
    );
}