import { useState, useRef, useEffect } from "react";
import { useTranscript } from "./stores/recordings";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

function useRecord() {
  const { setTranscript: recordTranscript } = useTranscript();

  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef<any>(null);
  const transcriptRef = useRef<string>("");

  const appendTranscript = (event: any) => {
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        transcriptRef.current += transcript + " ";
        recordTranscript(transcriptRef.current);
      } else {
        interimTranscript += transcript;
      }
    }
  };

  const startRecording = () => {
    setIsRecording(true);

    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();

    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    // Event handler for speech recognition results
    recognitionRef.current.onresult = (events: any) => {
      appendTranscript(events);
    };

    recognitionRef.current.onerror = (error: any) => {
      console.log(error);
    };

    // Start the speech recognition
    recognitionRef.current.start();
  };

  const stopRecording = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
      setRecordingComplete(true);
      setIsRecording(false);
      recordTranscript(transcriptRef.current);
      transcriptRef.current = "";
    }
  };

  useEffect(() => {
    return () => {
      // Stop the speech recognition if it's active
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  return {
    startRecording,
    stopRecording,
    isRecording,
    recordingComplete,
    fullTranscript: transcriptRef,
  };
}

export default useRecord;
