import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function AuthTopBar() {
  return (
    <div className="absolute top-15 flex items-center gap-14 mb-16">
      <button
        type="button"
        className="text-xl font-normal text-black flex items-center gap-1"
      >
        English
        <ChevronDown />
      </button>

      <Link href="/login" className="text-xl font-bold text-blue-600 ">
        Sign in
      </Link>

      <Link
        href="/register"
        className="rounded-full px-6 h-11 flex items-center justify-center
          border border-slate-300 text-blue-600 text-xl font-normal
          hover:bg-slate-100"
      >
        Register
      </Link>
    </div>
  );
}
