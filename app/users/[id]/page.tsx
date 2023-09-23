import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function UserDetailPage({ params: { id } }: Props) {
  if (parseFloat(id) > 10) {
    notFound();
  }
  const typeofid = typeof id;
  return (
    <div>UserDetailPage with id: {id} {typeofid}</div>
  );
}