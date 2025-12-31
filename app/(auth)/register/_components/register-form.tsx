"use client";

/* =========================
   Imports
========================= */
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  RegisterSchema,
  type RegisterFormValues,
} from "@/lib/schemas/auth.schema";

/* =========================
   Component
========================= */
export default function RegisterForm() {
  /* =========================
     Local state
  ========================= */
  const router = useRouter();

  /* =========================
     Form setup
  ========================= */
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { isSubmitting } = form.formState;

  /* =========================
     Handlers
  ========================= */
  const onSubmit = async (_values: RegisterFormValues) => {
    router.push("/login");
  };

  /* =========================
     Render
  ========================= */
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-40">
        <p className="text-3xl font-bold mb-10 text-slate-900">Sign up</p>

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">First Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="First Name"
                  className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Last Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <p className="text-center mb-10 text-sm text-slate-700">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </button>
        </p>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 rounded-4xl bg-blue-600 hover:bg-blue-600"
        >
          {isSubmitting ? "Creating..." : "Create account"}
        </Button>
      </form>
    </Form>
  );
}
