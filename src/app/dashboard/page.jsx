import { getSession } from "@/lib/actions/session";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession()
  console.log('session:', session)
  const role = session?.role
  if (!session) {
    redirect("/auth/signin");
  }


  if (role === "admin") {
    redirect("/dashboard/admin");
  }

  if (role === "vendor") {
    redirect("/dashboard/vendor");
  }

  redirect("/dashboard/user");
}