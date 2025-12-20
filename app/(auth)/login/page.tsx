import { AuthTopBar } from "../_components/auth-top-bar";
import LoginForm from "./_components/login-form";

export default function LoginPage() {
  return (
    <div className="w-full">
      <AuthTopBar />

      <div className="space-y-4 px-2 w-full max-w-md mx-auto">
        <LoginForm />
      </div>
    </div>
  );
}
