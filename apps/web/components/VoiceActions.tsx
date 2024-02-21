"use client";

import useTranscribeAction from "@/lib/api/mutations/useTranscribeAction";
import useAudioPermissions from "@/lib/api/queries/useAudioPermissions";
import { useTranscript } from "@/lib/api/stores/recordings";
import useRecord from "@/lib/api/useRecord";
import { cn } from "@/lib/utils";
import { Mic, Text } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import Spinner from "./Spinner";

interface VoiceActionsProps {}

function VoiceActions({}: VoiceActionsProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const permissions = useAudioPermissions();
  const { startRecording, stopRecording, isRecording } = useRecord();
  const { transcript, reset } = useTranscript();
  const { mutate, isPending } = useTranscribeAction();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!open) {
          reset();
          startRecording();
        } else {
          if (transcript) mutate(transcript);
          stopRecording();
        }
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [mutate, open, reset, startRecording, stopRecording, transcript]);

  return (
    <>
      <Button
        onClick={() => {
          reset();
          startRecording();
          setOpen(true);
        }}
        variant="outline"
        className={cn(
          "hover:text-green-500 hover:bg-green-500/10",
          isRecording &&
            "animate-pulse text-green-500 border-green-500 bg-green-500/10 transition-all"
        )}
      >
        {isPending ? (
          <Spinner />
        ) : (
          <>
            <Mic className="mr-2 w-4 h-4" />
            {!permissions.data && !permissions.isLoading
              ? "Requires Permissions"
              : "Voice Actions"}
            <kbd className="pointer-events-none ml-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>J
            </kbd>
          </>
        )}
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={(e) => {
          if (!e) {
            if (transcript) mutate(transcript);
            stopRecording();
          }
          setOpen(e);
        }}
      >
        <CommandInput
          placeholder={`Listening for instructions... (say: "I want to see my dog")`}
          disabled
        />
        <CommandList>
          <CommandGroup heading="Transcript">
            <CommandItem>
              <Text className="mr-2 h-4 w-4" />
              {<span>{transcript}</span>}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default VoiceActions;
