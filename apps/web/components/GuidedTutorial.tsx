import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { MessageCircleQuestion } from "lucide-react";
import { Button } from "./ui/button";

interface GuidedTutorialProps {}

function GuidedTutorial({}: GuidedTutorialProps): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <MessageCircleQuestion className="w-4 h-4 mr-2" />
          Click to Start
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-lg">
        <iframe
          style={{ minHeight: "640px" }}
          src="https://app.tango.us/app/embed/24cf8114-b8b2-44c2-b58e-cce536426dcb"
          sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin"
          security="restricted"
          title="Navigating Neurodog"
          width="100%"
          height="100%"
          referrerPolicy={"strict-origin-when-cross-origin"}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}

export default GuidedTutorial;
