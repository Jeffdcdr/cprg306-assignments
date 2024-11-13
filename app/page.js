import Link from "next/link"


export default function Home(){
  return (
    <header className="text-2xl mx-4 my-4">
      CPRG 306: Web Development 2<h2>Links to my assignments</h2>
      <br></br>
      <div>
        <li className="hover:bg-amber-200 hover:text-gray-800 max-w-32 rounded-full">
          <Link href="/week-2/">Week 2</Link>
        </li>
        <li className="hover:underline  decoration-red-700 max-w-32">
          <Link href="/week-3/">Week 3</Link>
        </li>
        <li>
          <Link href="/week-4/">Week 4</Link>{" "}
        </li>
        <li>
          <Link href="/week-5/">Week 5</Link>{" "}
        </li>
        <li>
          <Link href="/week-6/">Week 6</Link>{" "}
        </li>
        <li>
          <Link href="/week-7/">Week 7</Link>{" "}
        </li>
        <li>
          <Link href="/week-8/">Week 8</Link>{" "}
        </li>
        <li>
          <Link href="/week-9/">Week 9</Link>{" "}
        </li>
        <li>
          <Link href="/week-9-context/">Week 9 Context</Link>{" "}
        </li>
        <li>
          <Link href="/week-9/">Week 10</Link>{" "}
        </li>
        <li>
          <Link href="/week-9/">Week 11</Link>{" "}
        </li>
        <li>
          <Link href="/week-9/">Week 12</Link>{" "}
        </li>
        <li>
          <Link href="/week-9/">Week 13</Link>{" "}
        </li>
      </div>
    </header>
  );
}


