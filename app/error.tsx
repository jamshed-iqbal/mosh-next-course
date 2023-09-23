"use client";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  console.log("Error: ", error);
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <div>
        <button className="btn" onClick={() => reset()}>Retry (not a good idea for everywhere)</button>
      </div>
    </>
  );
}
