"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";

export default function AdminPageClient() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    setMounted(true);
    const auth = searchParams.get("auth");
    const password = "ductape2026";
    setAuthed(auth === password);
  }, [searchParams]);

  if (!mounted) return null;

  if (!authed) {
    return <LoginForm />;
  }

  return <AdminPanel />;
}
