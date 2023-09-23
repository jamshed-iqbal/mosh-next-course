import { notFound } from "next/navigation";

export default function NotFound() {
  return (
    <div>This user does not exist in our database.</div>
  );
}