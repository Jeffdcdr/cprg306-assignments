import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {
    return (
      <main>
        <h1 className="text-2xl mx-4 my-4">Shopping List</h1>
        <NewItem/>
        <br></br>
        <p>
        Go back to <Link href="/" className="underline">Home page</Link>
        </p>
      </main>
    );
}