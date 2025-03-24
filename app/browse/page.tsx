import Link from "next/link";
import BrowseNavbar from "./subnavbar/navbar";

export default function Page() {

    return (
      <>
        <BrowseNavbar />

        <div className="row w-100 justify-content-center">
          <div className="col-3 bg-white rounded m-3 p-2">
            <h1 className="h1">The Barn</h1>
            <p>
              Pointers to artifacts -- such as a repository URL, paper DOI, or a human's email address -- are stored in our barn.
            </p>
            <Link href="/browse/barn" className="btn btn-primary mx-auto my-2">Explore Barn</Link>
            <p>
              More specifically, we <em>harvest</em> these pointers through different ways. Metadata about a harvest, such as when it was conducted, is stored in the barn, alongside the pointers.
            </p>
          </div>
          <div className="col-3 bg-white rounded m-3 p-2">
            <h1 className="h1">The Cellar</h1>
            <p>
              Raw data about artifacts -- such as the information returned from a GitHub API call -- is in our cellar.
            </p>
            <Link href="/browse/cellar" className="btn btn-primary mx-auto my-2">Explore Cellar</Link>
            <p>
              More specifically, we <em>bottle</em> data about artifacts through different ways. Metadata about a bottling, such as when it was conducted, is stored in the cellar, alongside the data.
            </p>
          </div>
          <div className="col-3 bg-white rounded m-3 p-2">
            <h1 className="h1">The Bar</h1>
            <p>
              Data in our bottles is desireable alone, but can sometimes have dredges. Go to the bar to serve up data in smooth ways.
            </p>
            <Link href="/browse/bar" className="btn btn-primary mx-auto my-2">Explore Bar</Link>
            <p>
              More specifically, we <em>pour a drink</em> (curate data) from one or more bottles. We showcase a few drinks, provide recipes for others, and let you sling your own data cocktail from our bottles.
            </p>
          </div>
        </div>
      </>
    );
  }

