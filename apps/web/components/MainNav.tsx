"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { categories } from "@/config/nav";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const isPathSelected = (href: string) => pathname.includes(href);

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-2", className)}
      {...props}
    >
      {categories.map((category) => (
        <Link
          key={category.label}
          href={category.href}
          className={cn(
            "text-sm font-medium px-4 hover:text-primary transition-all",
            isPathSelected(category.href) &&
              "text-primary rounded-md py-1.5 bg-primary/10"
          )}
        >
          {category.label}
        </Link>
      ))}
    </nav>
  );
}
