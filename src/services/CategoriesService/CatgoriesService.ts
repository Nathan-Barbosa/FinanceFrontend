import type { GetCategoriesResponseDTO } from "@/models";
import { api } from "../api";
import type { PostCategoriesRequestDTO } from "./CatgoriesService.types";

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
}

export { CategoriesService };
