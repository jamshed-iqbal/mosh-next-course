"use client";
import { useRouter } from "next/navigation";

export default function NewUserPage() {
  const router = useRouter();

  function handleCreate() {
    router.push("/users");
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleCreate}>Create</button>
    </div>
  );
}
