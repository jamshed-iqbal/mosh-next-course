import Link from "next/link";
import UsersTable from "./UsersTable";
import { Suspense } from "react";

interface Props {
  searchParams: { sortOrder: string };
}

export default async function UsersPage({ searchParams: { sortOrder } }: Props) {
  return (
    <>
      <h1 className="text-xl font-semibold underline mb-5">Users List</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <div className="mb-5">
        <Link href="/users/new" className="btn">New User</Link>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
}
