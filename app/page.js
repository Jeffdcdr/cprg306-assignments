import Link from "next/link"
import Page from "./week-2/page";

export default function Home(){
  return (
    <header>
      CPRG 306: Web Development 2 - Assignments
      <li><Link href="/week-2/">Link to Week-2 folder</Link> </li>           
    </header>    
  );
}


