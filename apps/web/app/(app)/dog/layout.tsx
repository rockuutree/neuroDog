"use client";

import React from "react";

interface DogLayoutProps {
  children: React.ReactNode;
}

function DogLayout({ children }: DogLayoutProps): JSX.Element {
  return <>{children}</>;
}

export default DogLayout;
