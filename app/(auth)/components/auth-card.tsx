import { ReactNode } from "react";

export function AuthCard({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-md px-2">{children}</div>;
}
