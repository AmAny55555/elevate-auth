import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type Props = {
  onLogin: () => void;
  onRegister: () => void;
};

export function AuthTopBar({ onLogin, onRegister }: Props) {
  return (
    <div className="mb-16 mt-10 flex items-center justify-center gap-14">
      <button className="text-xl font-normal text-black flex items-center gap-1">
        English
        <ChevronDown className="" />
      </button>

      <button onClick={onLogin} className="text-xl font-bold text-blue-600 ">
        Sign in
      </button>

      {/* Register (button) */}
      <Button
        onClick={onRegister}
        variant="outline"
        className="
          rounded-full
          px-6
          border-slate-300
          text-blue-600
          text-xl
          font-normal 
          h-11
          hover:bg-slate-100
        "
      >
        Register
      </Button>
    </div>
  );
}
