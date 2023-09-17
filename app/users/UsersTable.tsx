import Link from "next/link";
// import UsersHeader from "./UsersHeader";
import { sort } from "fast-sort";
// import { useSearchParams } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

export default async function UsersTable({ sortOrder }: Props) {
  const users: User[] = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store"
  }).then(res => res.json());

  // const searchParams = useSearchParams();

  let sortedUsers: User[];

  if (sortOrder === "name") {
    sortedUsers = sort(users).asc(user => user.name);
  } else if (sortOrder === "email") {
    sortedUsers = sort(users).asc(user => user.email);
  } else {
    sortedUsers = [...users];
  }

  return (
    <table className="table">
      {/* <UsersHeader /> */}
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
