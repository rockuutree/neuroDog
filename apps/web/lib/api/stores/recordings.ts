import { create } from "zustand";

export const useTranscript = create<{
  transcript: string;
  reset: () => void;
  setTranscript: (transcript: string) => void;
}>((set) => ({
  transcript: "",
  reset: () => set({ transcript: undefined }),
  setTranscript: (transcript: string) => set({ transcript }),
}));
