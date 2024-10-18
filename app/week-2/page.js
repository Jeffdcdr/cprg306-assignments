import Link from "next/link";
import Studentinfo from "./student-info";
export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <Studentinfo />
      <p>
        Go back to{" "}
        <Link href="/" className="underline">
          Home page
        </Link>
        <br></br>
      </p>
    </main>
  );
}
