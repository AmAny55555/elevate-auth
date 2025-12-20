import { AuthTopBar } from "../_components/auth-top-bar";
import RegisterForm from "./_components/register-form";

export default function RegisterPage() {
  return (
    <div className="w-full">
      <AuthTopBar />

      <div className="space-y-6 px-2 w-full max-w-md mx-auto">
        <RegisterForm />
      </div>
    </div>
  );
}
