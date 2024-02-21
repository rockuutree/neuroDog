import Shape3 from "@/components/shapes/Shape3";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";
import React from "react";

interface InformationPageProps {}

async function InformationPage({}: InformationPageProps) {
  const { user } = await validateRequest();

  if (!user) return redirect("/login");

  return (
    <div className="center py-8 animate-in-slide-top-dashboard">
      <div className="max-w-lg  p-4 rounded-lg w-full">
        <Card>
          <CardHeader className="flex flex-col gap-1">
            <div className="flex items-center gap-2 mb-2 text-lg">
              <Shape3 className="w-5 h-5 mr-1" /> Neurocard
            </div>
            <CardTitle className="text-2xl">
              Personal Information Card
            </CardTitle>
            <CardDescription>{`This card is to share crucial information in case of emergencies.`}</CardDescription>
          </CardHeader>
          <CardContent>
            <Card className="text-sm flex flex-col gap-4">
              <div className="flex justify-between pt-4 px-4">
                <h1>Name</h1>
                <h2 className="font-semibold text-sm">{user?.name}</h2>
              </div>
              <Separator />
              <div className="flex justify-between px-4">
                <h1>Emergency Number</h1>
                <h2 className="font-semibold text-sm">+1 625-721-9034</h2>
              </div>
              <Separator />
              <div className="flex justify-between px-4">
                <h1>Disabilities</h1>
                <h2 className="font-semibold text-sm">
                  Diabetes and cardiovascular issues
                </h2>
              </div>
              <Separator />
              <div className="flex justify-between pb-4 px-4">
                <h1>Email</h1>
                <h2 className="font-semibold text-sm">john@gmail.com</h2>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InformationPage;
