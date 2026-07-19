import { getSession } from "@/lib/actions/session";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession()
  const role = session?.role

  if (role === "admin") {
    redirect("/dashboard/admin/profile");
  }

  if (role === "vendor") {
    redirect("/dashboard/vendor/profile");
  }

  redirect("/dashboard/user/profile");
}