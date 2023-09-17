"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function UsersHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function sortBy(field: string) {
    console.log(field);
    console.log(router);
    console.log(pathname);
    console.log(searchParams);
    console.log(searchParams.get("sortOrder"));
    console.log(searchParams.getAll("sortOrder"));
  }

  return (
    <thead>
      <tr>
        <th onClick={() => sortBy("name")}>Name</th>
        <th onClick={() => sortBy("email")}>Email</th>
      </tr>
    </thead>
  );
}
