import { products } from "@/src/data/products";
import Gallery from "@/src/components/product/galery";
import Info from "@/src/components/product/info";
import Breadcrumb from "@/src/components/ui/breadcrumb";
import Specifications from "@/src/components/product/specifications";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="m-5">
      <Breadcrumb className=" text-gray-400" />
      
      <div className="grid grid-cols-9  gap-1 mt-10">
        <div className="col-span-3">
          <Gallery items={product.galery} />
        </div>
        <div className="col-span-6">
          <Info product={product} />
        </div>
      </div>
      <Specifications items={product.specifications} />
    </div>
  );
}
