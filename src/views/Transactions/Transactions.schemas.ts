import { z } from "zod";

const transactionSchema = z.object({
  description: z.string().min(1, "Descrição obrigatória"),
  value: z.number(),
  type: z.enum(["Expense", "Income", "Both"]),
  personId: z.string().min(1, "Pessoa obrigatória"),
  categoryId: z.string().min(1, "Categoria obrigatória"),
});

export { transactionSchema };
