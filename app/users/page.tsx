import UsersTable from "./UsersTable";

interface Props {
  searchParams: { sortOrder: string };
}

export default async function UsersPage({ searchParams: { sortOrder } }: Props) {
  return (
    <>
      <h1 className="text-xl font-semibold underline mb-5">Users List</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <UsersTable sortOrder={sortOrder} />
    </>
  );
}
