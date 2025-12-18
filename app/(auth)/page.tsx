"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthTopBar } from "./components/auth-top-bar";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen">
      <AuthTopBar />
    </div>
  );
}
