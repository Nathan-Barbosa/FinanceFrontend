import type { CategoryPurposeType } from "@/models";

type PostCategoriesRequestDTO = {
  description: string;
  purpose: CategoryPurposeType;
};

export type { PostCategoriesRequestDTO };
