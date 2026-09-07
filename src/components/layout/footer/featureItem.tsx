import { getFooterFeatures } from "@/src/services/layouts";
import Image from "next/image";

export async function FeatureItems() {
  const features = await getFooterFeatures();
  return (
    <div className="mx-auto grid  grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 md:grid-cols-5">
      {features.map((item) => (
        <div
          className="flex flex-col items-center gap-3 text-center"
          key={item.id}
        >
          <div className=" relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-50">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="h-8 w-8 text-blue-500"
            />
          </div>
          <p className="text-sm text-gray-700">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
