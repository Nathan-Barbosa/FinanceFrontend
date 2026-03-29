import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CategoriesService } from "./CatgoriesService";
import type { PostCategoriesRequestDTO } from "./CatgoriesService.types";
import type { GetCategoriesResponseDTO } from "@/models";

const categoriesKeys = {
  all: ["categories"] as const,
  lists: () => [...categoriesKeys.all, "list"] as const,
  create: () => [...categoriesKeys.all, "createPerson"] as const,
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

export { useGetCategoriesQuery, usePostCategoryQuery };
