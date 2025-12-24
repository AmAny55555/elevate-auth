"use client";

import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, History, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

function Side() {
  const pathname = usePathname();

  return (
    <div className="p-6 mt-3 flex flex-col items-start ">
      <Image src="/1.svg" alt="logo" width={180} height={40} className="px-4" />

      <div className="links mt-10 font-bold text-lg w-full">
        <Link
          href="/dashboard"
          className={`flex items-center mb-5 gap-4 text-gray-700 px-4 py-3 rounded-xl
            ${pathname === "/dashboard" ? "bg-blue-600 text-white" : ""}`}
        >
          <LayoutDashboard
            size={20}
            className={`${
              pathname === "/dashboard" ? "text-white" : "text-blue-600"
            }`}
          />
          Dashboard
        </Link>

        <Link
          href="/Quiz"
          className={`flex items-center mb-5 gap-4 text-gray-700 px-4 py-3 rounded-xl
            ${pathname === "/Quiz" ? "bg-blue-600 text-white" : ""}`}
        >
          <History
            size={20}
            className={`${
              pathname === "/Quiz" ? "text-white" : "text-blue-600"
            }`}
          />
          Quiz History
        </Link>

        <Link
          href="#"
          className="mt-5 flex items-center mb-5 gap-4 text-gray-700 px-4 py-3 rounded-xl"
        >
          <LogOut size={20} className="text-blue-600" />
          Log out
        </Link>
      </div>
    </div>
  );
}

export default Side;
