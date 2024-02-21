import { User } from "lucia";
import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav";
import Logo from "./assets/Logo";
import VoiceActions from "./VoiceActions";
import Link from "next/link";

interface HeaderProps {
  user: User;
}

function Header({ user }: HeaderProps): JSX.Element {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center md:px-8 px-4">
        <Link href="/dashboard">
          <div className="flex center  md:text-sm">
            <Logo className="w-5 h-5 mr-2 font-serif" />
            Neurodog
          </div>
        </Link>

        <MainNav className="mx-6 hidden lg:block" />
        <div className="ml-auto flex items-center space-x-4">
          <VoiceActions />
          <UserNav user={user} />
        </div>
      </div>
    </div>
  );
}

export default Header;
