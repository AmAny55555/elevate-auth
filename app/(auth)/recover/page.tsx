"use client";

import { useRouter } from "next/navigation";
import { AuthCard } from "../components/auth-card";
import { AuthTopBar } from "../components/auth-top-bar";
import RecoverForm from "../components/recover-form";

export default function RecoverPage() {
  const router = useRouter();

  return (
    <div className="w-full">
      <AuthTopBar
        onLogin={() => router.push("/")}
        onRegister={() => router.push("/")}
      />

      <AuthCard>
        <RecoverForm />
      </AuthCard>
    </div>
  );
}
