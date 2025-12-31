"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import {
  RecoverSchema,
  type RecoverFormValues,
} from "@/lib/schemas/auth.schema";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RecoverForm() {
  const form = useForm<RecoverFormValues>({
    resolver: zodResolver(RecoverSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: RecoverFormValues) => {
    console.log("recover email", values.email);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <p className="text-3xl font-bold mb-10 text-slate-900">
          Forgot your password?
        </p>

        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 rounded-xl bg-transparent border-slate-300
                    shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
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
          className="w-full h-14 mt-6 rounded-3xl bg-blue-600 hover:bg-blue-600"
        >
          {form.formState.isSubmitting ? "Sending..." : "Continue"}
        </Button>
      </form>
    </Form>
  );
}
