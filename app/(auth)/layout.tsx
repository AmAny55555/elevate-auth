import type { ReactNode } from "react";
import Image from "next/image";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div
        className="hidden lg:flex flex-col justify-center px-16 bg-[#f0f4fc] text-white   rounded-tr-[80px]
  rounded-br-[80px] shadow-[0_20px_120px_-10px_rgba(15,23,42,0.18)]
 "
      >
        <h1 className="text-3xl font-bold mb-4 text-black">
          Welcome to <br></br> <span className="text-[#385198]">Elevate</span>
        </h1>

        <p className="text-black mb-8">
          Quidem autem voluptatibus qui quaerat aspernatur<br></br> architecto
          natus
        </p>

        <Image
          src="/1.webp"
          alt="Elevate Illustration"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
