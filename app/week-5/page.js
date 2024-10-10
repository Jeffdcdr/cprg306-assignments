import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {
    return (
      <main 
      className="flex justify-center w-full"
      >
        <h1>Shopping List</h1>
        <NewItem/>
        <br></br>
        <p>
        Go back to <Link href="/" className="underline">Home page</Link>
        </p>
      </main>
    );
}