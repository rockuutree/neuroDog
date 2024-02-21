"use client";

import { TranscribeActionRequest } from "@/app/api/transcribe-action/route";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import logout from "./logout";
import { toast } from "sonner";
import { useTheme } from "next-themes";

function useTranscribeAction() {
  const { push } = useRouter();
  const { theme, setTheme } = useTheme();

  return useMutation({
    mutationFn: async (transcript: string) => {
      const res = await fetch("/api/transcribe-action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: transcript }),
      });

      const actionRequest = (await res.json()) as TranscribeActionRequest;

      switch (actionRequest.action) {
        case "open-home-page":
          return push("/dashboard");
        case "logout":
          await logout();
          return;
        case "go-to-landing":
          return push("/");
        case "open-dog-services":
          return push("/dog");
        case "open-personal-information-page":
          return push("/information");
        case "toggle-theme":
          setTheme(theme === "dark" ? "light" : "dark");
          return;
      }

      toast("Unknown command");

      return actionRequest;
    },
  });
}

export default useTranscribeAction;
