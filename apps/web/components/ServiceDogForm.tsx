"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Spinner from "./Spinner";
import { useMutation } from "@tanstack/react-query";
import useNeurosity from "@/lib/api/stores/neurosity";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  deviceId: z
    .string()
    .min(2, { message: "Device ID must be at least 2 characters." }),
  email: z
    .string()
    .email()
    .min(2, { message: "Username must be at least 2 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters." }),
});

interface ServiceDogFormProps {}

function ServiceDogForm({}: ServiceDogFormProps): JSX.Element {
  const { push } = useRouter();
  const { setNeurosity } = useNeurosity();

  const login = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const { Neurosity } = await import("@neurosity/sdk/dist/esm");

      const client = new Neurosity({ deviceId: values.deviceId });

      await client.login({ email: values.email, password: values.password });

      setNeurosity(client);

      push("/dog/kinesis");
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      deviceId: "3cff194fca723aac93caba1a22f7be5c",
      email: "vurya22@gmail.com",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await login.mutateAsync(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="deviceId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Device ID</FormLabel>
              <FormControl>
                <Input placeholder="912e8kba78" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="*****" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full disabled:opacity-50"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? <Spinner /> : "Submit"}
        </Button>
        {login.isError && (
          <div className="text-xs text-red-400 text-center">
            {login.error.message}
          </div>
        )}
      </form>
    </Form>
  );
}

export default ServiceDogForm;
