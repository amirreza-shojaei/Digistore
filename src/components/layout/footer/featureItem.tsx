import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
}

export function FeatureItem({ icon: Icon, title }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50">
        <Icon className="h-8 w-8 text-blue-500" />
      </div>
      <p className="text-sm text-gray-700">{title}</p>
    </div>
  );
}