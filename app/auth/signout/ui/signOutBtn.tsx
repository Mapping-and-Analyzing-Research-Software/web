import { signOut } from "@/auth";

export default function SignOutButton() {
  return (
    <>
      <form
        action={async (formData) => {
          "use server";
          await signOut({
            redirect: true,
            redirectTo: "/auth/signin",
          });
        }}
      >
        <button className="btn btn-primary w-100" type="submit">
          Sign Out
        </button>
      </form>
    </>
  );
}
