import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CategoriesService } from "./CategoriesService";
import type { PostCategoriesRequestDTO } from "./CategoriesService.types";
import type { GetCategoriesResponseDTO } from "@/models";

const categoriesKeys = {
  all: ["categories"] as const,
  lists: () => [...categoriesKeys.all, "list"] as const,
  create: () => [...categoriesKeys.all, "createCategory"] as const,
  categoryTotals: () => [...categoriesKeys.all, "categoryTotals"] as const,
};

const useGetCategoriesQuery = () => {
  return useQuery<GetCategoriesResponseDTO[]>({
    queryKey: categoriesKeys.lists(),
    queryFn: () => CategoriesService.getCategories(),
  });
};

const usePostCategoryQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostCategoriesRequestDTO>({
    mutationKey: categoriesKeys.create(),
    mutationFn: CategoriesService.createCategory,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: categoriesKeys.lists(),
      }),
  });
};

const useGetCategoriesTotalsQuery = () => {
  return useQuery({
    queryKey: categoriesKeys.categoryTotals(),
    queryFn: CategoriesService.getCategoryTotals,
  });
};

export {
  useGetCategoriesQuery,
  usePostCategoryQuery,
  useGetCategoriesTotalsQuery,
};
