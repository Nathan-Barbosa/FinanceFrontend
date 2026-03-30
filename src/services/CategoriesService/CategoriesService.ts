import type {
  CategoryTotalsResponseDTO,
  GetCategoriesResponseDTO,
} from "@/models";
import { api } from "../api";
import type { PostCategoriesRequestDTO } from "./CategoriesService.types";

class CategoriesService {
  public static readonly url = "api/category";

  public static async getCategories(): Promise<GetCategoriesResponseDTO[]> {
    const { data } = await api.get<GetCategoriesResponseDTO[]>(
      CategoriesService.url,
    );
    return data;
  }

  public static async createCategory(
    payload: PostCategoriesRequestDTO,
  ): Promise<void> {
    await api.post(CategoriesService.url, payload);
  }

  public static async getCategoryTotals(): Promise<CategoryTotalsResponseDTO> {
    const { data } = await api.get<CategoryTotalsResponseDTO>(
      `${CategoriesService.url}/totals`,
    );
    return data;
  }
}

export { CategoriesService };
