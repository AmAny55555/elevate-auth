"use client";

import Image from "next/image";
import { Search, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TopbarProps {
  onMenuToggle?: () => void;
}

export default function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 z-50 w-full h-14 bg-blue-600 text-white flex items-center px-3">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onMenuToggle}
            className="text-white hover:bg-white/10"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </Button>

          <Search size={20} />
        </div>

        <div className="ml-auto">
          <Image
            src="/profile.webp"
            alt="profile"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center px-8 py-6 gap-6">
        <div className="relative w-full max-w-3xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
            size={20}
          />
          <Input
            placeholder="Search Quiz"
            className="h-14 w-full rounded-xl pl-12 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          />
        </div>

        <div className="flex-1" />

        <Image
          src="/profile.webp"
          width={60}
          height={60}
          alt="profile"
          className="rounded-full object-cover"
        />
      </div>
    </>
  );
}
