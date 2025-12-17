import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type RegisterFormProps = {
  onLoginClick: () => void;
};

export default function RegisterForm({ onLoginClick }: RegisterFormProps) {
  return (
    <div className="space-y-6">
      <p className="text-3xl font-bold mb-10 text-slate-900">Sign up</p>

      <Input
        type="text"
        placeholder="First Name"
        className="
          h-14
          rounded-lg
          bg-transparent
          border-slate-300
          focus:border-slate-500
          focus:ring-0
          shadow-[0_8px_20px_rgba(15,23,42,0.08)]
        "
      />

      <Input
        type="text"
        placeholder="Last Name"
        className="
          h-14
          rounded-lg
          bg-transparent
          border-slate-300
          focus:border-slate-500
          focus:ring-0
          shadow-[0_8px_20px_rgba(15,23,42,0.08)]
        "
      />

      <Input
        type="text"
        placeholder="Username"
        className="
          h-14
          rounded-lg
          bg-transparent
          border-slate-300
          focus:border-slate-500
          focus:ring-0
          shadow-[0_8px_20px_rgba(15,23,42,0.08)]
        "
      />

      <Input
        type="email"
        placeholder="Email"
        className="
          h-14
          rounded-lg
          bg-transparent
          border-slate-300
          focus:border-slate-500
          focus:ring-0
          shadow-[0_8px_20px_rgba(15,23,42,0.08)]
        "
      />

      <Input
        type="password"
        placeholder="Password"
        className="
          h-14
          rounded-lg
          bg-transparent
          border-slate-300
          focus:border-slate-500
          focus:ring-0
          shadow-[0_8px_20px_rgba(15,23,42,0.08)]
        "
      />

      <Input
        type="password"
        placeholder="Confirm Password"
        className="
          h-14
          rounded-lg
          bg-transparent
          border-slate-300
          focus:border-slate-500
          focus:ring-0
          shadow-[0_8px_20px_rgba(15,23,42,0.08)]
        "
      />

      <p className="text-center mb-10 text-sm text-slate-700">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onLoginClick}
          className="text-blue-600 font-medium hover:underline"
        >
          Login
        </button>
      </p>

      <Button className="w-full h-14 rounded-4xl bg-blue-600 hover:bg-blue-600">
        Create account
      </Button>
    </div>
  );
}
