// در صفحه دسته‌بندی
import ProductCard from "@/src/components/categoriesPage/productCard";
import { products } from "@/src/data/products";
import { Product } from "@/src/types/interfaces";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const productsFiltered: Product[] = products.filter(
    (item) => item.category === slug,
  );

  if (!productsFiltered.length) {
    return <div className="text-center text-gray-500">محصولی یافت نشد.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {productsFiltered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
