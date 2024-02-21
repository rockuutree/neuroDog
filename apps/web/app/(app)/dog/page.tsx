"use client";

import ServiceDogForm from "@/components/ServiceDogForm";
import Shape4 from "@/components/shapes/Shape4";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useNeurosity from "@/lib/api/stores/neurosity";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface DogPageProps {}

function DogPage({}: DogPageProps): JSX.Element {
  const { push } = useRouter();
  const { neurosity } = useNeurosity();

  useEffect(() => {
    if (neurosity) push("/dog/kinesis");
  }, [neurosity, push]);

  return (
    <div className="center py-8">
      <div className="max-w-lg  p-4 rounded-lg w-full">
        <Card>
          <CardHeader className="flex flex-col gap-1">
            <div className="flex center mb-2 text-lg">
              <Shape4 className="w-5 h-5 mr-1" /> Neurosity
            </div>
            <CardTitle className="text-2xl">Service Dog</CardTitle>
            <CardDescription>
              {`In order to proceed the neurodog's service, please provide the device id and your credentials for your EEG device.`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ServiceDogForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DogPage;
