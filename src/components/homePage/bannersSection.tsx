import { Banner } from "@/src/types/interfaces";
import Image from "next/image";
import Link from "next/link";

interface BannersSectionProps {
  items: Banner[];
}

export default function BannersSection({ items }: BannersSectionProps) {
  return (
    <section>
      <div className="flex flex-row relative gap-2 my-5">
        {items.map((item) => (
          <Link 
            href={item.link} 
            key={item.id} 
            className="relative w-full aspect-3/2"  
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-4xl"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}