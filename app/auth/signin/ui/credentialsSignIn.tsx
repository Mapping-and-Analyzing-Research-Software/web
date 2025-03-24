import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import Link from "next/link";

export default function CredentialsSignInUI() {
  const headerURL = headers().get("x-url") || "";
  const urlParamsString = headerURL.split(/\?(.*)/s)[1];
  const urlParams = new URLSearchParams(urlParamsString);
  const redirectURL = urlParams.get("redirect");
  const error = urlParams.get("error");
  const email = urlParams.get("email");
  const newAccount = urlParams.get("newAccount");
  console.log(error);

  return (
    <>
      <form
        action={async (formData) => {
          "use server";
          try {
            await signIn("credentials", formData);
          } catch (error) {
            if (error instanceof AuthError) {
              if (redirectURL) {
                return redirect(
                  `?redirect=${encodeURIComponent(redirectURL)}&error=${error.type}`,
                );
              } else {
                return redirect(`?error=${error.type}`);
              }
            } else {
              throw error;
            }
          }
        }}
      >
        <div className={error ? "p-3 rounded border-4 border-red-500" : ""}>

          {newAccount ?
          <div><div className="lead font-bold m-3">Congrats! Your account has been created.</div> 
          <div className="lead m-3">Sign in with the password you just selected.</div></div>
          : ""}
          <div className="row">
            <label className="form-label" htmlFor="email">
              Email
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                defaultValue={email ? email : ""}
              />
            </label>
          </div>
          <div className="row">
            <label className="form-label" htmlFor="password">
              Password
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
              />
            </label>
          </div>
          <div className="row p-3">
            <input className="btn btn-primary" type="submit" value="Sign In" />
          </div>

          <p className={error ? "mx-auto text-center" : "d-none"}>
            We're sorry, we couldn't log you in. <br /> Please try again or
            <Link
              href="/auth/passwordreset"
              className="btn btn-secondary mx-1 p-1"
            >
              {" "}
              Reset Password{" "}
            </Link>
            .
          </p>
        </div>
      </form>
    </>
  );
}
