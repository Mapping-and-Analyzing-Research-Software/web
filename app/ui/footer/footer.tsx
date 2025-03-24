import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-100 mx-auto row center bg-black text-white p-3">
        <div className="col-3 mx-auto">
          <p className="h3">Our Organization</p>
          <ul>
            <li>
              <Link href="/info/contact/" className="text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/info/about/" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/info/team/" className="text-white">
                Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3 mx-auto">
          <p className="h3">Legal</p>
          <ul>
            <li>
              <Link href="/legal/terms-of-service/" className="text-white">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy-policy/" className="text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
