"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [pw, setPw] = useState("");
  const router = useRouter();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/admin?auth=${encodeURIComponent(pw)}`);
  };

  return (
    <main className="bg-black min-h-screen flex items-center justify-center px-6">
      <form onSubmit={submit} className="w-full max-w-sm">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-8 font-mono text-center">
          Ductape Admin
        </p>
        <div className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="bg-transparent border border-white/20 text-white text-sm px-5 py-3.5 placeholder:text-white/25 focus:outline-none focus:border-white/40 w-full"
            autoFocus
          />
          <button
            type="submit"
            className="bg-white text-black px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
          >
            Enter
          </button>
        </div>
      </form>
    </main>
  );
}
