import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { getSession } from "@/lib/actions/session";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const user = await getSession();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar user={user} />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;