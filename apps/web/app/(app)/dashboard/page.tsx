import { ActionsList } from "@/components/ActionsList";
import Header from "@/components/Header";
import { Overview } from "@/components/Overview";
import Logo from "@/components/assets/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { validateRequest } from "@/lib/lucia";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FileQuestion, MessageCircleQuestion } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import GuidedTutorial from "@/components/GuidedTutorial";

export default async function DashboardPage() {
  const { user } = await validateRequest();

  if (!user) return redirect("/login");

  return (
    <div className="animate-in-slide-top-dashboard">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

          <Tabs defaultValue="caretaker" className="space-y-4">
            <TabsList>
              <TabsTrigger value="caretaker">Caretaker</TabsTrigger>
              <TabsTrigger value="exercise" disabled>
                Owner
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* <Card className=" col-span-2 max-h-32 overflow-clip float-left align-top">
            <Image
              className="w-full h-full object-cover object-top align-top opacity-80"
              src={"https://i.ibb.co/m0K515z/japanese.jpg"}
              alt="Picture of the author"
              width={1500}
              height={1000}
            />
          </Card> */}

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Dog</CardTitle>
              <Logo className="w-4 h-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Neurosity Spot</div>
              <p className="text-xs text-muted-foreground">
                Capable of understanding your emotions
              </p>
            </CardContent>
          </Card>

          <Card className="flex items-center">
            <div className="flex-1 h-full justify-between flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 w-full">
                <CardTitle className="text-sm font-medium">
                  Guided Interactive Tutorial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <GuidedTutorial />
              </CardContent>
            </div>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Daily Brain Efficiency</CardTitle>
              <CardDescription>
                Understand your progress and how your improves.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                The most recent activities your service dog has done for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ActionsList />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
