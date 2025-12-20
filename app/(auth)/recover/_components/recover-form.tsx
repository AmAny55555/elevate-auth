"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  RecoverSchema,
  type RecoverFormValues,
} from "@/lib/schemas/recover.schema";

export default function RecoverForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RecoverFormValues>({
    resolver: zodResolver(RecoverSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: RecoverFormValues) => {
    console.log("recover email", values.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <p className="text-3xl font-bold mb-10 text-slate-900">
        Forgot your password?
      </p>

      <div>
        <Input
          type="email"
          placeholder="Enter your email"
          className="h-14 rounded-xl bg-transparent border-slate-300
            shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-600 font-medium">
            {errors.email.message}
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
        className="w-full h-14 mt-6 rounded-3xl bg-blue-600 hover:bg-blue-600"
      >
        {isSubmitting ? "Sending..." : "Continue"}
      </Button>
    </form>
  );
}
