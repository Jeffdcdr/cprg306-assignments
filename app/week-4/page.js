import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <NewItem/>
        <p>
        Go back to <Link href="/" className="underline">Home page</Link>
        </p>
      </main>
    );
}