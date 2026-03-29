import type { CATEGORY_PURPOSE } from "@/constants";

export type CategoryPurposeType =
  (typeof CATEGORY_PURPOSE)[keyof typeof CATEGORY_PURPOSE]["value"];

type CategoriesDTO = {
  id: string;
  description: string;
  purpose: CategoryPurposeType;
};

type GetCategoriesResponseDTO = CategoriesDTO;

export type { CategoriesDTO, GetCategoriesResponseDTO };
