
import Link from "next/link";
import { sidebarCategories } from "@/src/data/megaMenu";

interface MegaMenuSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export default function MegaMenuSidebar({ activeId, onSelect }: MegaMenuSidebarProps) {
  return (
    <aside className="w-56 bg-gray-50 border-l border-gray-200 py-3 overflow-y-auto max-h-[70vh]">
      <ul className="space-y-0.5">
        {sidebarCategories.map((category) => {
          const isActive = activeId === category.id;

          return (
            <Link href={`/category/${category.slug}`} key={category.id}>
              <button
                onMouseEnter={() => onSelect(category.id)}
                onClick={() => onSelect(category.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-right text-sm transition-colors
                  ${
                    isActive
                      ? "bg-white text-red-500 font-medium border-r-2 border-red-500"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.title}</span>
              </button>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
}