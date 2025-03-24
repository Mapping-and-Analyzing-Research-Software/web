import GoogleSignInUI from "./ui/googleSignIn";
import CredentialsSignInUI from "./ui/credentialsSignIn";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const headerURL = headers().get("x-url") || "";
  const urlParamsString = headerURL.split(/\?(.*)/s)[1];
  const urlParams = new URLSearchParams(urlParamsString);
  const redirectURL = urlParams.get("redirect");


  // If there is already a user authenticated, go to redirect link
  const session = await auth();
  if (session?.user) {
    if (redirectURL) {
      redirect(redirectURL);
    } else {
      redirect(`/${session?.user.handle}`);
    }
  }

  return (
    <>
      <div className="p-3">
        <div className="col col-3 my-3 mx-auto p-3 rounded border shadow bg-slate-400">
          <div className="text-center mx-auto">{GoogleSignInUI()}</div>
        </div>

        <p className="text-center m-3">or</p>

        <div className="col col-3 my-3 mx-auto p-3 rounded border shadow bg-slate-400">
          <div className="mx-auto">{CredentialsSignInUI()}</div>
        </div>

        <p className="text-center m-3">or</p>

        <div className="col col-3 my-3 mx-auto p-3 rounded border shadow bg-slate-400">
          <div className="text-center mx-auto">
            <Link href="/auth/signup" className="btn btn-secondary p-3">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
