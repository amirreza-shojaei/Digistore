import { products } from "@/src/data/products";
import Gallery from "@/src/components/productPage/gallery";
import Info from "@/src/components/productPage/info";
import Breadcrumb from "@/src/components/ui/breadcrumb";
import Specifications from "@/src/components/productPage/specifications";
import { notFound } from "next/navigation";
import {getProductBySlug} from "@/src/services/products"
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  // const product = products.find((item) => item.slug === slug);
  const product =await getProductBySlug(slug);
  console.log(product);
  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto px-4 py-6 sm:px-6">
      <Breadcrumb className="mb-6 text-sm text-gray-400" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Gallery items={product.gallery} />
        </div>

        <div className="lg:col-span-8">
          <Info product={product} />
        </div>
      </div>

      <Specifications items={product.specifications} />
    </div>
  );
}