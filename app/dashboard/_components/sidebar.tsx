"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, History, LogOut } from "lucide-react";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export default function Side() {
  const pathname = usePathname();

  const Content = (
    <div className="p-6 mt-3 flex flex-col items-start">
      <Image
        src="/1.svg"
        alt="logo"
        width={180}
        height={40}
        className="px-4 hidden lg:block"
      />

      <div className="mt-6 lg:mt-10 font-bold text-lg w-full">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center mb-5 gap-4 text-gray-700 px-4 py-3 rounded-xl transition",
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
          className={cn(
            "flex items-center mb-5 gap-4 text-gray-700 px-4 py-3 rounded-xl transition",
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
          className="mt-5 flex w-full items-center gap-4 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          <LogOut size={20} className="text-blue-600" />
          Log out
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="lg:hidden bg-white">{Content}</div>

      <div className="hidden lg:block">
        <Sidebar className="bg-[#f3f4f6]">
          <SidebarContent className="p-0">{Content}</SidebarContent>
        </Sidebar>
      </div>
    </>
  );
}
