"use server"
import ViewUser from "./viewUser";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  if(!session?.user){
    return (
      <>
        <p className="m-5 lead p-5 font-bold">Sorry partner! We couldn't find anyone logged in. Try logging in.</p>
      </>
    )
  }
  return (<ViewUser user={session?.user} />);

}
