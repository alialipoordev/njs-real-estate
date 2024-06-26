import SignupPage from "@/components/template/SignupPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SignupPage />;
}

export default Signup;
