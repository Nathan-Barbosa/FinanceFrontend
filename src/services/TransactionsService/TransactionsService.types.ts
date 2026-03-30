import type { CategoryPurposeType } from "@/models";

type PostTransactionsRequestDTO = {
  description: string;
  value: number;
  type: CategoryPurposeType;
  personId: string;
  categoryId: string;
};

export type { PostTransactionsRequestDTO };
