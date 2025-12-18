"use client";

import { useRouter } from "next/navigation";
import { AuthTopBar } from "../components/auth-top-bar";
import RegisterForm from "../components/register-form";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="w-full">
      <AuthTopBar />

      <div className="space-y-6 px-2 w-full max-w-md mx-auto">
        <RegisterForm onLoginClick={() => router.push("/login")} س />
      </div>
    </div>
  );
}
