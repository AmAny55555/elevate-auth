"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema, type LoginFormValues } from "@/lib/schemas/auth.schema";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  const form = useForm<LoginFormValues>({
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-40">
        <p className="text-3xl font-bold mb-10 text-slate-900">Sign in</p>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                  {...field}
                />
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
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          disabled={form.formState.isSubmitting}
          className="w-full h-14 rounded-4xl bg-blue-600 hover:bg-blue-600"
        >
          {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Form>
  );
}
