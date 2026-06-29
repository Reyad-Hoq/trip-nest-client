import { getSession } from "@/lib/actions/session";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession()
  if (!session) {
    redirect("/auth/signin");
  }

  const role = session?.user?.role;

  if (role === "admin") {
    redirect("/dashboard/admin");
  }

  if (role === "vendor") {
    redirect("/dashboard/vendor");
  }

  redirect("/dashboard/user");
}