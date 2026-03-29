import type { CategoryPurpose } from "@/constants";

type CategoryPurposeType =
  (typeof CategoryPurpose)[keyof typeof CategoryPurpose];

type CategoriesDTO = {
  id: string;
  description: string;
  purpose: CategoryPurposeType;
};

export type { CategoriesDTO, CategoryPurposeType };
