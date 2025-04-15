"use client";

import { Buttons } from "@/components/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center">
      <div className="px-12 py-10 bg-white rounded-4xl text-black flex flex-col gap-4 items-center">
        <span className="text-3xl font-semibold">Join today.</span>
        <div className="flex flex-col gap-3 font-bold">
          <Buttons
            variant="filled"
            className="bg-black text-white px-12 py-2"
            onClick={() => router.push("/login")}
          >
            Login
          </Buttons>
          <Buttons
            variant="outlined"
            className="px-12 py-2"
            onClick={() => router.push("/register")}
          >
            Register
          </Buttons>
        </div>
      </div>
    </div>
  );
}
