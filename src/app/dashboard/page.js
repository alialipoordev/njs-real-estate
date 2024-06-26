import DashboardPage from "@/components/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";

async function Dashboard() {
  const session = await getServerSession(authOptions);

  const user = await User.findOne({ email: session.user.email });

  return <DashboardPage user={user} />;
}

export default Dashboard;
