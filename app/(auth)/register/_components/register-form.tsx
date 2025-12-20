"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  RegisterSchema,
  type RegisterFormValues,
} from "@/lib/schemas/register.schema";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-40">
      <p className="text-3xl font-bold mb-10 text-slate-900">Sign up</p>

      <div>
        <Input
          type="text"
          placeholder="First Name"
          className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-600">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <Input
          type="text"
          placeholder="Last Name"
          className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email"
          className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
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
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <Input
          type="password"
          placeholder="Confirm Password"
          className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

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
  );
}
