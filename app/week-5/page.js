import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {
    return (
      <main 
      className="flex justify-center w-full"
      >
        <h1 className="m-4 text-3xl font-bold">Shopping List</h1>
        <NewItem/>
        <br></br>
        <p>
        Go back to <Link href="/" className="underline">Home page</Link>
        </p>
      </main>
    );
}