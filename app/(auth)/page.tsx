"use client";

import { useState } from "react";
import { AuthCard } from "./components/auth-card";
import { AuthTopBar } from "./components/auth-top-bar";
import LoginForm from "./components/login-form";
import RegisterForm from "./components/register-form";

export default function AuthPage() {
  const [view, setView] = useState<"login" | "register">("login");

  return (
    <div className="w-full">
      <AuthTopBar
        onLogin={() => setView("login")}
        onRegister={() => setView("register")}
      />

      <AuthCard>
        {view === "login" && <LoginForm />}
        {view === "register" && (
          <RegisterForm onLoginClick={() => setView("login")} />
        )}
      </AuthCard>
    </div>
  );
}
