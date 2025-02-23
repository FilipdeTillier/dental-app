import DashboardTable from "@/components/DashboardTable/DashboardTable";
import Header from "@/components/Header/Header";
import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const session = await getSession();
  if (!session) return;
  const { user } = session;
  return (
    user && (
      <div>
        <Header />
        <DashboardTable />
      </div>
    )
  );
}
