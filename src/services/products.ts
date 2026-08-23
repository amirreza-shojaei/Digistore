import { apiFetch } from "@/src/libs/api";
import { Product } from "@/src/types/interfaces";

export async function getProducts(): Promise<Product[]> {
  return apiFetch<Product[]>("/products");
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await apiFetch<Product[]>(`/products?slug=${slug}`);
  return products[0] || null;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return apiFetch<Product[]>(`/products?category=${category}`);
}