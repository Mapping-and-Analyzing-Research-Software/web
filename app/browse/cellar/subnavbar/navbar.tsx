import Link from "next/link";
import styles from "./navbar.module.css"

export default function BrowseNavbar() {
  return (
    <>
      <div className={`${styles["subnavbar"]} bg-slate-200 w-100 align-right`}>
        <h2 className="h2 d-inline-block mx-3">The Cellar</h2>
        <ul className="text-right d-inline-block py-1 float-right">
        <li><Link href="/browse/cellar/bottle" className="btn btn-success">New Bottle</Link></li>
        <li><Link className="button btn btn-secondary" href="/browse/barn">Barn</Link></li>
          <li><Link className="button btn btn-secondary" href="/browse/cellar">Cellar</Link></li>
          <li><Link className="button btn btn-secondary" href="/browse/bar">Bar</Link></li>
        </ul>
      </div>
    </>
  );
}

