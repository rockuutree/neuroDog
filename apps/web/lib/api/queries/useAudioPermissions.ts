import { useQuery } from "@tanstack/react-query";

function useAudioPermissions() {
  return useQuery({
    queryKey: ["audio-permissions"],
    queryFn: async () => navigator.mediaDevices.getUserMedia({ audio: true }),
  });
}

export default useAudioPermissions;
