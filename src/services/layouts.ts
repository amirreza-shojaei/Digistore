import { apiFetch } from "@/src/libs/api";
import { FooterFeature } from "@/src/types/interfaces";
import { Icons } from "@/src/types/interfaces";


export async function getFooterFeatures(): Promise<FooterFeature[]> {
    return apiFetch<FooterFeature[]>("/footerFeatures")
}
export async function getSiteNameIcon(): Promise<Icons> {
    return apiFetch<Icons>("/iconName")
}