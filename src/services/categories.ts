import { apiFetch } from "../libs/api";
import { Category } from "../types/interfaces";
export async function getCategories():Promise<Category[]> {
    return apiFetch<Category[]>("/categories")
}