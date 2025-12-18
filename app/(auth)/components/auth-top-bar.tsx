"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export function AuthTopBar() {
  const router = useRouter();

  return (
    <div className="absolute top-15 flex items-center gap-14 mb-16">
      <button className="text-xl font-normal text-black flex items-center gap-1">
        English
        <ChevronDown />
      </button>

      <button
        className="text-xl font-bold text-blue-600"
        onClick={() => {
          router.push("/login");
        }}
      >
        Sign in
      </button>

      <Button
        variant="outline"
        className="rounded-full px-6 border-slate-300 text-blue-600 text-xl font-normal h-11 hover:bg-slate-100"
        onClick={() => {
          router.push("/register");
        }}
      >
        Register
      </Button>
    </div>
  );
}
