"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface QueryClientWrapperProps {
  children: React.ReactNode;
}

function QueryClientWrapper({
  children,
}: QueryClientWrapperProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryClientWrapper;
