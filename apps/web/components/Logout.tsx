"use client";

import logout from "@/lib/api/mutations/logout";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface LogoutFormProps extends LogoutButtonProps {}

function LogoutForm({ ...props }: LogoutFormProps): JSX.Element {
  return (
    <form action={logout} className={props.className}>
      <LogoutButton {...props} />
    </form>
  );
}

interface LogoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pendingClassName?: ClassValue[];
}

function LogoutButton({
  pendingClassName,
  ...props
}: LogoutButtonProps): JSX.Element {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      {...props}
      disabled={pending || props.disabled}
      className={cn(props.className, pending && pendingClassName)}
    />
  );
}

export default LogoutForm;
