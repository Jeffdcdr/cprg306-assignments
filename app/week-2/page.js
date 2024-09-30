import Link from "next/link";
import Studentinfo from "./student-info";
export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <Studentinfo/>
        <p>
        Go back to <Link href="/" className="underline">Home page</Link>
        <br></br>
        </p>
      </main>
      
      
    );
  }