import { CategoryPurpose } from "@/constants";
import { z } from "zod";

const categorySchema = z.object({
  description: z.string().min(1, "Nome é obrigatório").max(400),
  purpose: z.enum([
    CategoryPurpose.Expense,
    CategoryPurpose.Income,
    CategoryPurpose.Both,
  ]),
});

export { categorySchema };
