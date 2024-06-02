"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
// import _ from "lodash";
// import MyHeavyComponent from "./MyHeavyComponent";
const MyHeavyComponent = dynamic(() => import("./MyHeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function HeavyComponentWrapper() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <div className="mt-10">
        <button
          className="btn btn-error"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          Toggle Heavy Component
        </button>
        {isVisible && <MyHeavyComponent />}
      </div>
      <div className="mt-5">
        <button
          className="btn btn-accent"
          onClick={async () => {
            const _ = (await import("lodash")).default;

            const users = [
              {
                name: "c",
              },
              {
                name: "b",
              },
              {
                name: "a",
              },
            ];
            console.log("orginal", users);
            const sorted = _.orderBy(users, ["name"]);
            console.log("sorted", sorted);
          }}
        >
          Sort Users
        </button>
      </div>
    </>
  );
}
