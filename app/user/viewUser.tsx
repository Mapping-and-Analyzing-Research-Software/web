import SignOutButton from "@/app/auth/signout/ui/signOutBtn";
import ImageWithFallback from "@/app/lib/imageWithFallback";
import { auth } from "@/auth";
import Link from "next/link";


async function UserBanner({user, session}){
  
  return (
    <>
      <div className="container border p-6 m-1 mx-auto bg-white rounded-lg text-surface shadow-md dark:bg-neutral-700 dark:text-white dark:shadow-black-30 max-w-7xl">
        <ImageWithFallback
          src={"/img/banner/" + user.handle + ".jpg"}
          fallbackSrc={"/img/usrbanners/" + user.name.charAt(0).toUpperCase() + ".jpg"}
          className="w-100 object-cover bg-slate-200"
          width="1024"
          height="200"
          style={{ maxHeight: "200px", objectFit: "cover" }}
          alt={"Banner image for " + user.handle}
        />
        <div className="position-relative border w-75 mx-auto">
          <ImageWithFallback
            src={"/img/icon/" + user.handle + ".jpg"}
            fallbackSrc={"/img/usricons/" + user.name.charAt(0).toUpperCase() + ".jpg"}
            width="125"
            height="125"
            className="rounded mx-4 position-absolute border border-black bg-slate-400 shadow dark:bg-neutral-700 dark:text-white dark:shadow-black/30"
            style={{
              maxWidth: "125px", maxHeight: "125px", 
              top: "-75px",
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
            alt={"Profile image for " + user.name}
          />
        </div>
        {user.handle == session?.user.handle ?
        <div className="float-right">
          <div className="m-2">
          <SignOutButton />
            </div>
            <div className="m-2">
          <Link href={"/"+user.handle+"/edit"} className="btn btn-primary">
          Edit Profile
        </Link>
        </div>
        </div>
        : <></>
        }
        <div className="flex justify-between items-center">
          <div className="mt-5 text-black flex flex-col items-start ml-4 space-y-1">
            <span className="text-4xl font-medium">{user.name}</span>
            <span className="text-2xl text-slate-700">
              {user.physical_location}
            </span>
            <span className="text-xl text-slate-500">@{user.handle}</span>

            {/* • {org.followers_count + org.members_count} Followers and Members */}
            <span className="text-lg mt-3 mb-3 text-slate-700">{user.bio}</span>
          </div>
        </div>
        <div className="clear-both"></div>
      </div>
    </>
  );
}





function formatDate(dateString) {
  const date = new Date(dateString);

  // Options for formatting
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

async function About({user, session}){
  return (
    <>
    <div>
      <p className="h2">About</p>
      <div>
      <p>Joined on {formatDate(user.create_date)}</p>
        </div>

    </div>
    </>
  );
}

export default async function ViewUser({ user }) {
  const session = await auth();
  return (
    <>
      <UserBanner user={user} session={session} />
      <div className="container my-3 max-w-7xl">
        <div className="row">
            
            <div className="col-md-4 mb-4 d-flex">
                <div className="flex-fill p-3 border bg-light">
                </div>
            </div>

            <div className="col-md-4 mb-4 d-flex">
                <div className="flex-fill p-3 border bg-light">
                </div>
            </div>

            <div className="col-md-4 mb-4 d-flex">
                <div className="flex-fill p-3 border bg-light">
                <About user={user} session={session} />
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
