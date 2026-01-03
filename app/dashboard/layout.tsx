"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import Topbar from "./_components/topbar";
import Side from "./_components/sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[#f3f4f6] w-full overflow-x-hidden">
        س
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
        )}
        <div
          className={cn(
            "lg:hidden fixed top-0 left-0 z-[60] w-full bg-white rounded-b-3xl shadow-xl",
            "transform transition-transform duration-300 ease-in-out",
            menuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <Image
              src="/1.svg"
              alt="Elevate"
              width={140}
              height={32}
              className="object-contain"
            />

            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto">
            <Side />
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex gap-6">
            <aside className="hidden lg:block w-72 shrink-0">
              <Side />
            </aside>

            <div className="flex flex-col flex-1 min-w-0">
              <Topbar onMenuToggle={() => setMenuOpen((p) => !p)} />
              <main className="pt-14 lg:pt-6 flex-1 min-w-0">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
