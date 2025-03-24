import Link from "next/link";
import styles from "./navbar.module.css"

export default function BrowseNavbar() {
  return (
    <>
      <div className={`${styles["subnavbar"]} bg-slate-200 w-100 align-right`}>
        <ul className="text-right py-1">
          <li><Link className="button btn btn-secondary" href="/browse/barn">Barn</Link></li>
          <li><Link className="button btn btn-secondary" href="/browse/cellar">Cellar</Link></li>
          <li><Link className="button btn btn-secondary" href="/browse/bar">Bar</Link></li>
        </ul>
      </div>
    </>
  );
}

