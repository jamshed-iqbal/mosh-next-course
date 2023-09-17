interface Props {
  params: { id: string };
}

export default function UserDetailPage({ params: { id } }: Props) {
  const typeofid = typeof id;
  return (
    <div>UserDetailPage with id: {id} {typeofid}</div>
  );
}