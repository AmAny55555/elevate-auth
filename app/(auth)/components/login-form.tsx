import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function LoginForm() {
  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold  mb-8">sign in</p>
      <Input
        type="email"
        placeholder="Email"
        className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
      />

      <Input
        type="password"
        placeholder="Password"
        className="h-14 rounded-lg shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
      />

      <div className="text-right">
        <Link href="/recover" className="text-sm text-blue-600 hover:underline">
          Recover Password?
        </Link>
      </div>

      <Button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-600">
        Sign in
      </Button>
    </div>
  );
}
