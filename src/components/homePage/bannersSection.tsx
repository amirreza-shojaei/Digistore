import { Banner } from "@/src/types/interfaces";
import Image from "next/image";
import Link from "next/link";
interface BannersSectionProps {
  items: Banner[];
}
export default function BannersSection({ items } :BannersSectionProps) {

    return(
        <section>
                <div className="flex flex-row relative gap-2 my-5">
                    {items.map((item)=>(
                        <Link href={item.link} key={item.id} className="relative ">
                            <img src={item.image} alt={item.title} className="w-full h-full rounded-4xl"  />
                        </Link>
                    ))}
                </div>

        </section>
        
    );
}