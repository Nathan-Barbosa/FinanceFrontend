import { z } from "zod";

import { transactionSchema } from "./Transactions.schemas";

export type TransactionsFormData = z.infer<typeof transactionSchema>;

export { transactionSchema };
