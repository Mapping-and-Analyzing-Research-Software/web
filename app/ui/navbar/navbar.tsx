import logo from "@/public/img/mars_logo_color.png";
import styles from "@/app/ui/navbar/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/auth";

async function _LoginLogoutComps() {
  const pathname = encodeURIComponent(headers().get("x-url") || "");
  const session = await auth();
  if (!session?.user) {
    return (
      <>
        <li className={`nav-item ${styles["nav-item"]}`}>
          <Link
            className="rounded text-base p-1 m-0 m-1 border-1 border-lime-500 d-block"
            //href={"/auth/signin?redirect=" + pathname}
            href={"/auth/signin"}
          >
            Sign In
          </Link>
          </li>
          <li className={`nav-item ${styles["nav-item"]}`}>
          <Link
            className={`rounded text-base p-1 m-0 m-1 border-1 border-fuchsia-400 d-block`}
            href={"/auth/signup"}
          >
            Sign Up
          </Link>
        </li>
      </>
    );
  } else {
    let img_url = session.user?.image;
    if (!img_url) {
      let first_char = session.user?.name?.charAt(0).toUpperCase();
      if (!first_char) {
        first_char = session.user?.email?.charAt(0).toUpperCase();
      }
      img_url = "/img/usricons/" + first_char + ".jpg";
    }
    return (
      <>
        <Link className="m-2 col" href={"/"+session?.user.handle}>
          <img
            src={img_url}
            className="rounded rounded-circle d-inline border-solid ring"
            width="32px"
            height="32px"
            alt="Profile Picture"
          />
        </Link>
      </>
    );
  }
}

function _Navbar() {
  const pathname = encodeURIComponent(headers().get("x-url") || "");
  if (pathname.startsWith("/member")) {
    return <></>;
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-white mx-auto ${styles["mynavbar"]} border`}
        id="mynavbar"
      >
        <div className={`container-fluid ${styles["container-fluid"]}`}>
          <Link className={`navbar-brand ${styles["navbar-brand"]}`} href="/">
            <Image
              className={styles["navbar-brand-image"]}
              src={logo}
              alt="Logo"
            />
            Mapping &amp; Analyzing Research Software
          </Link>
          <div
            className={`${styles["navbar-collapse"]} ${"flex"}`}
            id="navbarSupportedContent"
          >
            <ul className={`${styles["mynav"]}`}>
              <li className={`nav-item ${styles["nav-item"]} px-4`}>
                <Link
                  className={`nav-link text-lg ${pathname === "/info/about" ? "underline underline-offset-[1rem] decoration-1" : ""}`}
                  href="/visualize"
                >
                  Visualize
                </Link>
              </li>

              <li className={`nav-item ${styles["nav-item"]} px-4`}>
                <Link
                  className={`nav-link text-lg ${pathname === "/info/about" ? "underline underline-offset-[1rem] decoration-1" : ""}`}
                  href="/query"
                >
                  Query
                </Link>
              </li>

              <li className={`nav-item ${styles["nav-item"]} px-4`}>
                <Link
                  className={`nav-link text-lg ${pathname === "/info/about" ? "underline underline-offset-[1rem] decoration-1" : ""}`}
                  href="/browse"
                >
                  Browse
                </Link>
              </li>

              <li className={`nav-item ${styles["nav-item"]} px-4`}>
                <Link
                  className={`nav-link text-lg ${pathname === "/info/about" ? "underline underline-offset-[1rem] decoration-1" : ""}`}
                  href="/analyze"
                >
                  Analyze
                </Link>
              </li>

              <li className={`nav-item ${styles["nav-item"]} px-4`}>
                <Link
                  className={`nav-link text-lg ${pathname === "/info/about" ? "underline underline-offset-[1rem] decoration-1" : ""}`}
                  href="/api"
                >
                  API
                </Link>
              </li>


              <_LoginLogoutComps />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <_Navbar />
    </>
  );
}
