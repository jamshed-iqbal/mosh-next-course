interface Props {
  params: { id: string; photoId: string };
}

export default function PhotoDetailPage({ params: { id, photoId } }: Props) {
  return (
    <div>PhotoDetailPage with userId: {id} and photoId: {photoId}</div>
  );
}
