import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthTopBar } from "./auth-top-bar";

export default function RecoverForm() {
  return (
    <div className="space-y-6">
      <AuthTopBar />
      <p className="text-3xl font-bold mb-10 text-slate-900">
        Forgot your password?
      </p>

      <Input
        type="email"
        placeholder="Enter your email"
        className="
          h-14
          rounded-xl
          bg-transparent
          border-slate-300
          shadow-[0_8px_20px_rgba(15,23,42,0.08)]
      
       
      
        "
      />

      <div className="text-right">
        <p className="text-sm text-blue-600 ">Recover Password?</p>
      </div>

      <Button className="w-full h-14 mt-6 rounded-3xl bg-blue-600 hover:bg-blue-600">
        continue
      </Button>
    </div>
  );
}
