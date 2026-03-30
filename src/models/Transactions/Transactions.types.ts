import type { CategoryPurposeType } from "../Categories";

type TransactionsDTO = {
  id: string;
  description: string;
  value: number;
  type: CategoryPurposeType;
  personName: string;
  categoryDescription: string;
};

type GetTransactionsResponseDTO = TransactionsDTO;

export type { TransactionsDTO, GetTransactionsResponseDTO };
