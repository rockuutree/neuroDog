import GithubIcon from "@/components/assets/GithubIcon";
import Logo from "@/components/assets/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface LoginPageProps {}

function LoginPage({}: LoginPageProps): JSX.Element {
  return (
    <div className="w-full h-screen relative center animate-in-slide-top-card">
      <Card className="max-w-xs bg-card">
        <CardHeader className="flex flex-col gap-1">
          <div className="flex center mb-2 text-lg">
            <Logo className="w-5 h-5 mr-2" />
            Neurodog
          </div>
          <CardDescription>
            Use a social provider below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/login/github" className="w-full">
            <Button variant="outline" className="w-full">
              <GithubIcon className="mr-2 h-4 w-4" />
              Github
            </Button>
          </Link>
          <Separator className="mb-4 mt-6" />
          <a className="text-xs" href="/">
            Not what you are looking for?{" "}
            <span className=" text-primary">Go back.</span>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
