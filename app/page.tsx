import Link from "next/link";
import { getServerSession } from "next-auth";
import ProductCard from "./components/ProductCard";
import { authOptions } from "./api/auth/authOptions";
import HeavyComponentWrapper from "./components/HeavyComponentWrapper";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session ? session.user?.name : "World"}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <HeavyComponentWrapper />
    </main>
  );
}
