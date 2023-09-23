import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-5 p-5 bg-slate-200">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
    </nav>
  );
}
