interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UsersPage() {
  const users: User[] = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store"
  }).then(res => res.json());

  return (
    <>
      <h1 className="text-xl font-semibold underline mb-5">Users List</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  );
}
