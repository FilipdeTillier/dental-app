"use client";

import { useCallback } from "react";
import { useRouter } from "next/router";

export const LoginButton = () => {
  const router = useRouter();
  const handleLogin = useCallback(() => {
    // Pobierz bazowy URL z okna przeglądarki
    const baseUrl = window.location.origin;
    router.push(`${baseUrl}/api/auth/login`);
  }, [router]);

  return <button onClick={handleLogin}>Login</button>;
};
