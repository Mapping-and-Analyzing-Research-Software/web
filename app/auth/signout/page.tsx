import SignOutButton from "./ui/signOutBtn";
export default function SignOutPage() {
  return (
    <div className="mx-auto text-center container p-3 m-5">
      <p className="h5">Are you sure you want to sign out?</p>

      <SignOutButton />
    </div>
  );
}
