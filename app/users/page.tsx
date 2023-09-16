interface User {
  id: number;
  name: string;
}

export default async function UsersPage() {
  const users: User[] = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store"
  }).then(res => res.json());

  return (
    <>
      <h1>Users List</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}
