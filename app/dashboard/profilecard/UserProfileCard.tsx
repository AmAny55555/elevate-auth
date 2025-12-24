import React from "react";
import Image from "next/image";
import { Flag, Clock, CheckCircle2 } from "lucide-react";

function UserProfileCard() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-8 rounded-3xl bg-white p-8 w-full max-w-[850px] shadow-sm overflow-hidden mt-8">
      <div className="lg:mx-0">
        <Image
          src="/profile.webp"
          width={160}
          height={160}
          alt="profile"
          className="
    rounded-2xl object-cover
    w-48 h-48
    sm:w-52 sm:h-52
    lg:w-40 lg:h-40
  "
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-semibold text-blue-600 text-left">
          Talia
        </h1>
        <p className="mt-2 text-lg text-gray-400 text-left">Voluptatem aut</p>

        <div className="relative mt-6 h-3 w-full max-w-2xl rounded-full bg-gray-200">
          <div className="absolute inset-y-0 left-0 rounded-full bg-blue-600 w-[70%]" />
        </div>

        <div className="mt-8 flex gap-12 justify-start">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full">
              <Flag className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-700">27</div>
              <div className="text-sm text-gray-400">Quiz Passed</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-700">13 min</div>
              <div className="text-sm text-gray-400">Fastest Time</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full">
              <CheckCircle2 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-700">200</div>
              <div className="text-sm text-gray-400">Correct Answers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
