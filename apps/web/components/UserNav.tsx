import { categories } from "@/config/nav";
import LogoutForm from "./Logout";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User } from "lucia";
import Link from "next/link";

interface UserNavProps {
  user: User;
}

export function UserNav({ user }: UserNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={`https://avatar.vercel.sh/${user.name ?? user.id}`}
            />
            <AvatarFallback>
              {user.name?.substring(0, 2) ?? "UN"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium leading-none">
                {user.name ?? "User"}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                Neuro User
              </p>
            </div>
            <ModeToggle />
          </div>
        </DropdownMenuLabel>
        <div className="block lg:hidden">
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {categories.map((category) => (
              <Link key={category.label} href={category.href}>
                <DropdownMenuItem>
                  {category.label}
                  <DropdownMenuShortcut>→</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutForm className="w-full cursor-pointer text-left">
            Logout
          </LogoutForm>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
