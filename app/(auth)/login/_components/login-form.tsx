"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { LoginSchema, type LoginFormValues } from "@/lib/schemas/login.schema";
import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    console.log("login data:", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-40">
      <p className="text-3xl font-bold mb-10 text-slate-900">Sign in</p>

      <div>
        <Input
          type="email"
          placeholder="Email"
          className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm font-medium text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Input
          type="password"
          placeholder="Password"
          className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          {...register("password")}
        />
        {errors.password && (
          <p className="mt-1 text-sm font-medium text-destructive">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="text-right">
        <Link
          href="/recover"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Recover password?
        </Link>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 rounded-4xl bg-blue-600 hover:bg-blue-600"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
