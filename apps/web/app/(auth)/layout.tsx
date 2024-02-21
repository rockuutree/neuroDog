import ShapeBackground from "@/components/ShapeBackground";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const { session } = await validateRequest();

  if (session) return redirect("/dashboard");

  return (
    <div className="h-screen relative">
      <ShapeBackground />
      {children}
    </div>
  );
}
