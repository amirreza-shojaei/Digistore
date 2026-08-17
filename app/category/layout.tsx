import { ReactNode } from "react";
import Breadcrumb from "@/src/components/ui/breadcrumb";

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto  px-4 py-6 sm:px-6">
      <Breadcrumb className="mb-6 text-sm text-gray-400" />
      {children}
    </div>
  );
}