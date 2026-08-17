import ProductCard from "@/src/components/categoriesPage/productCard";
import { products } from "@/src/data/products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const filteredProducts = products.filter(
    (item) => item.category === slug
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
        <p className="text-lg font-medium text-gray-600">
          محصولی در این دسته‌بندی یافت نشد
        </p>
        <p className="mt-2 text-sm text-gray-400">
          لطفاً دسته‌بندی دیگری را انتخاب کنید
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}