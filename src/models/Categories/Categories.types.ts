import type { CATEGORY_PURPOSE } from "@/constants";

export type CategoryPurposeType =
  (typeof CATEGORY_PURPOSE)[keyof typeof CATEGORY_PURPOSE]["value"];

type CategoriesDTO = {
  id: string;
  description: string;
  purpose: CategoryPurposeType;
};

type GetCategoriesResponseDTO = CategoriesDTO;

type CategoryTotalsDTO = {
  description: string;
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

type CategoryTotalsResponseDTO = {
  categories: CategoryTotalsDTO[];
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

export type {
  CategoriesDTO,
  GetCategoriesResponseDTO,
  CategoryTotalsResponseDTO,
  CategoryTotalsDTO,
};
