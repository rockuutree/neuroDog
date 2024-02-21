"use client";

import { Neurosity } from "@neurosity/sdk/dist/esm/Neurosity";
import { create } from "zustand";

interface NeurosityState {
  neurosity: Neurosity | null;
  setNeurosity: (neurosity: Neurosity) => void;
}

const useNeurosity = create<NeurosityState>((set) => ({
  neurosity: null,
  setNeurosity: (neurosity) => set({ neurosity }),
}));

export default useNeurosity;
