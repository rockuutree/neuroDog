import React from "react";

interface FooterProps {}

function Footer({}: FooterProps): JSX.Element {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        © 2024 Neurodog. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
