import type { CategoryPurposeType } from "@/models";

const CategoryPurpose = {
  Expense: "Expense",
  Income: "Income",
  Both: "Both",
} as const;

export const CategoryPurposeLabel: Record<CategoryPurposeType, string> = {
  Expense: "Despesa",
  Income: "Receita",
  Both: "Ambos",
};

export { CategoryPurpose };
