"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, History, LogOut } from "lucide-react";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type SideProps = {
  onNavigate?: () => void;
  variant?: "mobile" | "desktop";
};

export default function Side({ onNavigate, variant = "desktop" }: SideProps) {
  const pathname = usePathname();

  const Content = (
    <div className="p-6 mt-3 flex flex-col items-start">
      <Image src="/1.svg" alt="logo" width={180} height={40} className="px-4" />

      <div className="mt-10 font-bold text-lg w-full">
        <Link
          href="/dashboard"
          onClick={onNavigate}
          className={cn(
            "flex items-center mb-5 gap-4 text-gray-700 px-4 py-3 rounded-xl",
            pathname === "/dashboard" && "bg-blue-600 text-white"
          )}
        >
          <LayoutDashboard
            size={20}
            className={
              pathname === "/dashboard" ? "text-white" : "text-blue-600"
            }
          />
          Dashboard
        </Link>

        <Link
          href="/Quiz"
          onClick={onNavigate}
          className={cn(
            "flex items-center mb-5 gap-4 text-gray-700 px-4 py-3 rounded-xl",
            pathname === "/Quiz" && "bg-blue-600 text-white"
          )}
        >
          <History
            size={20}
            className={pathname === "/Quiz" ? "text-white" : "text-blue-600"}
          />
          Quiz History
        </Link>

        <button
          type="button"
          onClick={onNavigate}
          className="mt-5 flex w-full items-center gap-4 text-gray-700 px-4 py-3 rounded-xl"
        >
          <LogOut size={20} className="text-blue-600" />
          Log out
        </button>
      </div>
    </div>
  );

  if (variant === "mobile") {
    return <div className="bg-white">{Content}</div>;
  }

  return (
    <Sidebar className="bg-[#f3f4f6]">
      <SidebarContent className="p-0">{Content}</SidebarContent>
    </Sidebar>
  );
}
