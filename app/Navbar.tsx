"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { status, data: session } = useSession();

  return (
    <nav className="flex gap-5 p-5 bg-slate-200">
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <>
          <Link href="/">Home</Link>
          <Link href="/users">Users</Link>
          <Link href="/admin">Admin</Link>
          {status === "unauthenticated" && (
            <Link href="/api/auth/signin">Login</Link>
          )}
          {status === "authenticated" && (
            <>
              <div>{session.user?.name}</div>
              <Link href="/api/auth/signout">Logout</Link>
            </>
          )}
        </>
      )}
    </nav>
  );
}
