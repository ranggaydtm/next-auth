"use client";

import { Buttons } from "@/components/button";
import { Inputs } from "@/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="w-full flex items-center justify-center">
      <div className="px-10 py-7 bg-white rounded-4xl text-black flex flex-col gap-6">
        <span className="text-center text-3xl font-semibold">
          Welcome Back!
        </span>
        <div className="flex flex-col gap-2">
          <Inputs
            placeholder="Username"
            variant="outlined"
            type="text"
            value={payload?.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPayload({ ...payload, username: e.target.value })
            }
          />
          <Inputs
            placeholder="Password"
            variant="outlined"
            type="password"
            value={payload?.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPayload({ ...payload, password: e.target.value })
            }
          />
          <Buttons
            variant="filled"
            className="bg-black text-white py-2 mt-2"
            onClick={() => router.push("/")}
          >
            Sign In
          </Buttons>
        </div>
        <div className="flex gap-1.5 items-center justify-center text-sm">
          <span>Don&apos;t have an account?</span>
          <span
            className="cursor-pointer text-blue-500"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
