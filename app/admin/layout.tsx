import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex flex-grow -m-5">
      <aside className="bg-slate-200 p-5 flex-shrink-0">Admin Sidebar</aside>
      <main className="p-5 flex-1">{children}</main>
    </div>
  );
}
