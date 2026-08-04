export const dynamic = "force-dynamic";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { getSession } from "@/lib/actions/session";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const user = await getSession();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <DashboardSidebar user={user} />
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;