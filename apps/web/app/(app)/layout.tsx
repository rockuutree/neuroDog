import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const { session, user } = await validateRequest();

  if (!session) return redirect("/login");

  return (
    <main className="w-full h-screen flex flex-col">
      <Header user={user} />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
